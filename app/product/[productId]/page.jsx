"use client";

import { notFound, useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "@/context/UserContext";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const { session } = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchParams.get("cancelled") === "true") {
      toast.error("Payment unsuccessful");
      router.replace(`/product/${productId}`, undefined, { shallow: true });
    } else if (searchParams.get("success") === "true") {
      toast.success("Payment successful");
      router.replace(`/product/${productId}`, undefined, { shallow: true });
    }

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handlePayment = async () => {
    const userId = session.data.session.user.id;
    if (!userId) return;
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          productId: product.id,
          priceId: product.stripe_product.default_price,
        }),
      });
      const result = await response.json();
      if (response.status !== 200) {
        throw Error("Something went wrong");
      }
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      if (!stripe) {
        throw Error("Something went wrong");
      }
      await stripe.redirectToCheckout({ sessionId: result.session.id });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Image
                src={
                  product.image_id
                    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_STORAGE_PATH}/product-image/${product.id}/${product.image_id}`
                    : "/placeholder.jpg"
                }
                alt="product_image"
                width={400}
                height={400}
                className="object-contain mb-4"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg mb-4 text-gray-600">{product.description}</p>
              <p className="text-2xl font-semibold mb-6">{product.price}</p>
              <button
                onClick={handlePayment}
                style={{ backgroundColor: "#4cc8b1" }}
                className="text-white px-6 py-3 rounded-md hover:brightness-90"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Page;

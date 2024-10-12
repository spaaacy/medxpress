"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Page = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Image src={product.image} alt={product.name} width={400} height={400} className="object-contain mb-4" />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg mb-4 text-gray-600">{product.description}</p>
              <p className="text-2xl font-semibold mb-6">{product.price}</p>
              <button
                onClick={addToCart}
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
    </div>
  );
};

export default Page;

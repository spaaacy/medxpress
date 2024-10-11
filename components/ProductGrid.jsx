"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const ProductGrid = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response;
        if (searchTerm) {
          response = await fetch(`/api/product?search=${searchTerm}`, {
            method: "GET",
          });
        } else {
          response = await fetch(`/api/product`, {
            method: "GET",
          });
        }
        if (response.status !== 200) {
          console.error("Oops, something went wrong...");
        } else {
          const { products } = await response.json();
          setProducts(products);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <section className="flex-grow mx-4 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-54">
      <section className="text-center py-8 pb-0 bg-white">
        <div className="py-12 pb-0">
          <div className="mb-8 bg-gray-50 p-4 pb-0 rounded-lg">
            {
              <h2 className="text-2xl font-semibold mb-4 text-left text-[#4CC8B1]">
                {searchTerm ? `Results for \"${searchTerm}\"` : "Latest Items"}
              </h2>
            }

            <div className="grid-container">
              <div className="grid grid-cols-4 gap-6 overflow-y-auto py-8">
                {loading ? (
                  <p>Loading products...</p>
                ) : error ? (
                  <p>Error: {error.message}</p>
                ) : products.length > 0 ? (
                  products.map((item) => (
                    <Link key={item.id} href={`/product/${item.id}`} className="flex flex-col items-center">
                      {/* Will need this for a product page to a specific product */}
                      <Image
                        src={item.image || "/placeholder.jpg"} // Placeholder if image is not available. Will add images later
                        alt={item.name}
                        width={250}
                        height={250}
                        className="object-contain mb-2"
                      />
                      <p className="text-center font-semibold">{item.name}</p>
                      <p className="text-center text-gray-500 text-sm">{item.description || "No description"}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">No products found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductGrid;

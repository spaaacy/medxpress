"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchProductsByName, fetchAllProducts } from "@/utils/products";

const ProductGrid = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (searchTerm) {
          const data = await fetchProductsByName(searchTerm);
          setProducts(data);
        } else {
          const allProducts = await fetchAllProducts();
          setProducts([]);
          const sortedProducts = allProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));  // Sort products by created_at in descending order and take the first 4

          setLatestProducts(sortedProducts.slice(0, 4));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const filteredItems = searchTerm ? products : [];

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
                  ) : searchTerm ? (
                      filteredItems.length > 0 ? (
                          filteredItems.map((item) => (
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
                      )
                  ) : (
                      latestProducts.map((item) => (
                          <Link key={item.id} href={`/product/${item.id}`} className="flex flex-col items-center">
                            <Image
                                src={item.image || "/placeholder.jpg"}
                                alt={item.name}
                                width={250}
                                height={250}
                                className="object-contain mb-2"
                            />
                            <p className="text-center font-semibold">{item.name}</p>
                            <p className="text-center text-gray-500 text-sm">{item.description || "No description"}</p> {/* Show description if available */}
                          </Link>
                      ))
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
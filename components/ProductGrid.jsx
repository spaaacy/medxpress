"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductGrid = ({ searchTerm }) => {
  const allItems = [
    {
      id: 1,
      name: "Multivitamin",
      image: "/multivitamin.webp",
      category: "Vitamins & Supplements",
      link: "/product/multivitamin",
    },
    {
      id: 2,
      name: "Vitamin D",
      image: "/vitamin-d.webp",
      category: "Vitamins & Supplements",
      link: "/product/vitamin-d",
    },
    { id: 3, name: "Omega-3", image: "/omega-3.webp", category: "Vitamins & Supplements", link: "/product/omega-3" },
    { id: 4, name: "Calcium", image: "/calcium.webp", category: "Vitamins & Supplements", link: "/product/calcium" },
    { id: 5, name: "Vitamin C", image: "/vitamin-C.png", category: "Vitamins & Supplements", link: "/product/vitamin-C" },
    { id: 6, name: "Magnesium", image: "/magnesium.png", category: "Vitamins & Supplements", link: "/product/magnesium" },
    { id: 7, name: "Vitamin B12", image: "/vitamin-B12.png", category: "Vitamins & Supplements", link: "/product/vitamin-B12" },
    { id: 8, name: "Vitamin K2", image: "/vitamin-K2.png", category: "Vitamins & Supplements", link: "/product/vitamin-K2" },
    { id: 9, name: "Toothpaste", image: "/toothpaste.webp", category: "Personal Care", link: "/product/toothpaste" },
    { id: 10, name: "Moisturizer", image: "/moisturizer.webp", category: "Personal Care", link: "/product/moisturizer" },
    {
      id: 11,
      name: "Energy Bars",
      image: "/energy-bars.webp",
      category: "Fitness & Nutrition",
      link: "/product/energy-bars",
    },
    { id: 12, name: "Yoga Mat", image: "/yoga-mat.webp", category: "Fitness & Nutrition", link: "/product/yoga-mat" },
    { id: 13, name: "Shampoo", image: "/shampoo.webp", category: "Personal Care", link: "/product/shampoo" },
    { id: 14, name: "Sunscreen", image: "/sunscreen.webp", category: "Personal Care", link: "/product/sunscreen" },
    {
      id: 15,
      name: "Protein Powder",
      image: "/protein.webp",
      category: "Fitness & Nutrition",
      link: "/product/protein-powder",
    },
    {
      id: 16,
      name: "Resistance Bands",
      image: "/resistance-bands.webp",
      category: "Fitness & Nutrition",
      link: "/product/resistance-bands",
    },
  ];

  const filteredItems = searchTerm
    ? allItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : allItems;

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
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link key={item.id} href={item.link} className="flex flex-col items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={250}
                        height={250}
                        className="object-contain mb-2"
                      />
                      <p className="text-center font-semibold">{item.name}</p>
                      <p className="text-center text-gray-500 text-sm">{item.category}</p>
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

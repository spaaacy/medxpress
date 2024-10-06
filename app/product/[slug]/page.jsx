"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: "Multivitamin",
    slug: "multivitamin",
    image: "/multivitamin.webp",
    category: "Vitamins & Supplements",
    price: "$15.99",
    description: "A daily multivitamin packed with essential vitamins and minerals to support overall health, energy levels, and immune function. Ideal for those with a busy lifestyle to ensure nutrient needs are met."
  },
  {
    id: 2,
    name: "Vitamin D",
    slug: "vitamin-d",
    image: "/vitamin-d.webp",
    category: "Vitamins & Supplements",
    price: "$12.99",
    description: "Vitamin D is crucial for bone health, immune support, and the regulation of calcium levels in the body. This supplement is perfect for those who spend limited time in the sun or have higher needs."
  },
  {
    id: 3,
    name: "Omega-3",
    slug: "omega-3",
    image: "/omega-3.webp",
    category: "Vitamins & Supplements",
    price: "$18.99",
    description: "A premium Omega-3 fish oil supplement rich in EPA and DHA to support heart health, brain function, and inflammation management. Sourced from wild-caught fish for purity and potency."
  },
  {
    id: 4,
    name: "Calcium",
    slug: "calcium",
    image: "/calcium.webp",
    category: "Vitamins & Supplements",
    price: "$10.99",
    description: "Calcium is essential for maintaining strong bones and teeth. This supplement is ideal for individuals at risk of calcium deficiency, particularly those with increased calcium requirements."
  },
  {
    id: 5,
    name: "Toothpaste",
    slug: "toothpaste",
    image: "/toothpaste.webp",
    category: "Personal Care",
    price: "$5.99",
    description: "A fluoride toothpaste that offers long-lasting protection against cavities, plaque buildup, and gum disease. Its minty fresh flavor leaves your mouth feeling clean and refreshed after every brush."
  },
  {
    id: 6,
    name: "Moisturizer",
    slug: "moisturizer",
    image: "/moisturizer.webp",
    category: "Personal Care",
    price: "$8.99",
    description: "A lightweight, hydrating moisturizer formulated with natural ingredients to nourish the skin, lock in moisture, and provide a smooth, radiant complexion. Suitable for all skin types."
  },
  {
    id: 7,
    name: "Energy Bars",
    slug: "energy-bars",
    image: "/energy-bars.webp",
    category: "Fitness & Nutrition",
    price: "$9.99",
    description: "Delicious, nutrient-packed energy bars that provide a quick boost of energy. Perfect for pre- or post-workout snacks, or to keep you going throughout the day. Made with wholesome ingredients like nuts, oats, and dried fruits."
  },
  {
    id: 8,
    name: "Yoga Mat",
    slug: "yoga-mat",
    image: "/yoga-mat.webp",
    category: "Fitness & Nutrition",
    price: "$20.99",
    description: "A high-quality, non-slip yoga mat that provides excellent grip and cushioning for your yoga practice. Designed to offer comfort and stability whether you are a beginner or a seasoned yogi."
  },
  {
    id: 9,
    name: "Shampoo",
    slug: "shampoo",
    image: "/shampoo.webp",
    category: "Personal Care",
    price: "$7.99",
    description: "A gentle shampoo formulated for all hair types. Enriched with natural extracts to cleanse, hydrate, and nourish your hair, leaving it soft, shiny, and free from buildup."
  },
  {
    id: 10,
    name: "Sunscreen",
    slug: "sunscreen",
    image: "/sunscreen.webp",
    category: "Personal Care",
    price: "$12.99",
    description: "A broad-spectrum sunscreen that protects against both UVA and UVB rays. Lightweight, non-greasy formula that absorbs quickly, providing reliable protection without leaving a white cast on the skin."
  },
  {
    id: 11,
    name: "Protein Powder",
    slug: "protein-powder",
    image: "/protein.webp",
    category: "Fitness & Nutrition",
    price: "$25.99",
    description: "A premium protein powder blend designed to support muscle growth and recovery. Made from high-quality whey protein, it's ideal for athletes and fitness enthusiasts looking to boost their protein intake."
  },
  {
    id: 12,
    name: "Resistance Bands",
    slug: "resistance-bands",
    image: "/resistance-bands.webp",
    category: "Fitness & Nutrition",
    price: "$15.99",
    description: "Durable and versatile resistance bands for strength training, flexibility exercises, and injury rehabilitation. Available in different resistance levels to suit beginners and advanced users alike."
  }
];


export default function ProductPage({ params }) {
  const { slug } = params;
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
              <Image
                src={product.image}
                alt={product.name}
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
                onClick={addToCart}
                style={{ backgroundColor: '#4cc8b1' }}
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
}

"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FeaturesSection from "@/components/FeaturesSection";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <main className="flex-grow">
        {!searchTerm && <FeaturesSection />}
        <ProductGrid searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

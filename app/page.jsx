import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FeaturesSection from "@/components/FeaturesSection";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <FeaturesSection />
        {/* <ProductGrid /> */}
      </main>
      <Footer />
    </div>
  );
}

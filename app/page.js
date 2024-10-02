import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>Landing page</main>
      <Footer />
    </div>
  );
}

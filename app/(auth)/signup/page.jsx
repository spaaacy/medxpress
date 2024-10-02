import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <h1 className="font-semibold text-xl">Sign Up</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

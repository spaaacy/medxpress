import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <h1 className="font-semibold text-xl">Sign In</h1>
        <Link href={"/signup"} className="text-sm text-blue-500 hover:underline" target="_blank">
          Not registered? Create Account.
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

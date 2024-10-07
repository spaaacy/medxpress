import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import SignUpForm from "../../../components/auth/SignUpForm";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <div className="w-full flex justify-center items-center  overflow-hidden p-3">
          <div className="shadow-lg p-8 w-[700px] rounded-xl bg-slate-50">
            <h1 className="font-bold text-xl text-center">Sign Up</h1>
            <SignUpForm />
          </div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default Page;

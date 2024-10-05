import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import SignUpForm from "./sign_up_form";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <div className="w-full flex justify-center items-center bg-slate-100 overflow-hidden p-3">
          <div className="shadow-2xl p-8 w-[700px] bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-xl">
            <div className="shadow-2xl p-2 bg-white/[.25] rounded-xl">
              <h1 className="font-extrabold text-2xl text-center
                            underline underline-offset-2 decoration-black/[.75]">Sign Up</h1>
            </div>
            <SignUpForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;

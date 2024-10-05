'use client';

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";
import SignInForm from "./sign_in_form";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <div className="w-full flex justify-center items-center bg-slate-100 overflow-hidden p-3">
          <div className="shadow-2xl p-8 w-[500px] bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-xl">
            <div className="shadow-2xl p-2 bg-white/[.25] rounded-xl">
              <h1 className="font-extrabold text-2xl text-center
                            underline underline-offset-2 decoration-black/[.75]">Sign In</h1>
            </div>
            <SignInForm />
            <Link href={"/signup"} className="text-sm text-blue-900 hover:underline" target="_blank">
              Not registered? Create Account.
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

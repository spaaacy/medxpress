"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const NavBar = ({ searchTerm, setSearchTerm }) => {
  const { session } = useContext(UserContext);
  const [hideSearch, setHideSearch] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setHideSearch(window.location.pathname === "/signup" || window.location.pathname === "/signin");
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      location.reload();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <div className="flex items-center bg-gray-800 p-2 text-white">
        <Link href="/" className="flex items-center mx-4">
          <Image src="/icon.png" width={50} height={50} alt="logo" className="invert" />
          <span className="font-semibold text-2xl ml-2">MedXpress</span>
        </Link>

        <div className="flex items-center mx-4 cursor-pointer">
          <svg
            className="h-5 w-5 text-white mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
        </div>

        {!hideSearch && (
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search products"
              className="w-full p-2 rounded text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <div className="ml-auto mx-4 flex flex-col leading-tight">
          {session?.data.session ? (
            <button onClick={signOut} type="button" className="text-sm -mx-2 hover:underline">
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/signin" className="font-semibold hover:underline">
                Sign In
              </Link>
              <span className="text-xs">
                Not registered?{" "}
                <Link href="/signup" className="underline">
                  Create Account.
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

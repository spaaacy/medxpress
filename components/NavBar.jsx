"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const NavBar = ({ searchTerm, setSearchTerm }) => {
  const { session, user } = useContext(UserContext);
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
          <>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search products"
                className="w-full p-2 rounded text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Conditionally render buttons based on hideSearch */}
            {user && (
              <div className="flex items-center mx-4 space-x-2">
                {user.admin ? (
                  <>
                    <Link
                      href="/view-prescriptions"
                      className="bg-[#4cc8b1] hover:bg-[#7aaea2] text-white font-semibold py-2 px-4 rounded"
                    >
                      View Prescriptions
                    </Link>
                    <Link
                      href="/product/add"
                      className="bg-[#4cc8b1] hover:bg-[#7aaea2] text-white font-semibold py-2 px-4 rounded"
                    >
                      Add Product
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/upload-prescription"
                    className="bg-[#4cc8b1] hover:bg-[#7aaea2] text-white font-semibold py-2 px-4 rounded"
                  >
                    Upload Prescriptions
                  </Link>
                )}
              </div>
            )}
          </>
        )}

        <div className="ml-auto mx-4 flex flex-col leading-tight pl-2">
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

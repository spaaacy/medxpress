import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      {/* Top Navigation Bar */}
      <div className="flex items-center bg-gray-800 p-2 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center mx-4">
          <Image
            src="/icon.png"
            width={50}
            height={50}
            alt="logo"
            className="invert" // Tailwind CSS class to invert colors
          />
          <span className="font-semibold text-2xl ml-2">MedXpress</span>
        </Link>

        {/* Location */}
        <div className="flex items-center mx-4 cursor-pointer">
          {/* Location Icon */}
          <svg
            className="h-5 w-5 text-white mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* SVG paths */}
          </svg>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input type="text" placeholder="Search products" className="w-full p-2 rounded" />
        </div>

        {/* Sign In Link */}
        {/* Sign In Section */}
        <div className="mx-4 flex flex-col leading-tight">
          <Link href="/signin" className="font-semibold hover:underline">
            Sign In
          </Link>
          <span className="text-xs">
            Not registered?{" "}
            <Link href="/signup" className="underline">
              Create Account.
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

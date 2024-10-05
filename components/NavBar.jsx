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
          <div className="flex flex-col leading-tight">
            <span className="text-xs">Deliver to</span>
            <span className="font-semibold">Your Location</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search products"
            className="w-full p-2 rounded"
          />
        </div>

        {/* Sign In Link */}
        {/* Sign In Section */}
        <div className="mx-4 flex flex-col leading-tight">
          <Link href="/signin" className="font-semibold hover:underline">
            Sign In
          </Link>
          <span className="text-xs">
            Not registered?{' '}
            <Link href="/signup" className="underline">
              Create Account.
            </Link>
          </span>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="flex items-center bg-gray-700 p-2 pl-6 text-white text-sm">
        {/* "All" Link with Hamburger Icon */}
        <Link href="/all" className="mr-4 flex items-center hover:underline">
          {/* Hamburger Icon */}
          <svg
            className="h-5 w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          All
        </Link>

        {/* Other Navigation Links */}
        <Link href="/medicines" className="mr-4 hover:underline">
          Medicines
        </Link>
        <Link href="/health-devices" className="mr-4 hover:underline">
          Health Devices
        </Link>
        <Link href="/personal-care" className="mr-4 hover:underline">
          Personal Care
        </Link>
        <Link href="/vitamins-supplements" className="mr-4 hover:underline">
          Vitamins & Supplements
        </Link>
        <Link href="/health-blog" className="mr-4 hover:underline">
          Health Blog
        </Link>
        {/* Add more links as needed */}
      </div>

    </nav>
  );
};

export default NavBar;

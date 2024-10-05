import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-start px-8 py-4 gap-8">
      <Link href={"/"} className="flex gap-2 items-center justify-center">
        <Image src={"/icon.png"} width={50} height={50} alt="logo" />

        <h1 className="font-semibold text-3xl">MedXpress</h1>
      </Link>
      <div className="flex items-baseline justify-center gap-4">
        <p>Page 1</p>
        <p>Page 2</p>
        <p>Page 3</p>
      </div>
      <Link href={"/signin"} className="ml-auto">
        Sign In
      </Link>
    </nav>
  );
};

export default NavBar;

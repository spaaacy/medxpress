import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-4 text-sm flex flex-col items-center justify-center">
      <div className="flex items-center">
        <Image
          src="/icon.png" // Update the path to your logo image
          alt="MedXpress Logo"
          width={50} // Adjust the width as needed
          height={20} // Adjust the height as needed
        />
      </div>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} MedXpress. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

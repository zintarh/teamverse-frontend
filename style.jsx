// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-4 px-12 border-b border-gray-600 bg-black">
      {/* Logo */}
      <div className="w-[216px] h-[58px]">
        <a href="#">
          <img src="/logo.svg" alt="Logo" className="h-full" />
        </a>
      </div>

      {/* Call-to-Action Button */}
      <div>
        <a
          href="#"
          className="px-4 py-3 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-red-500"
        >
          Connect to Wallet
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

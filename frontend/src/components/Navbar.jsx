import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 fixed top-0
    left=0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-4">
        
        {/* Logo / Website Name */}
        <h1 className="bg-orange-400 px-3 py-1 transition-colors duration-300 hover:bg-yellow-700 hover:text-black">
          My Website
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-yellow-600"
          >
            Home
          </Link>

          <Link
            to="/withAxios"
            className="transition-colors duration-300 hover:text-yellow-600"
          >
            Axios
          </Link>

          <Link
            to="/contact"
            className="transition-colors duration-300 hover:text-yellow-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          {isOpen ? "❎" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 bg-gray-500 px-4 py-4 md:hidden">
          <Link
            to="/"
            className="rounded px-3 py-2 transition-colors duration-300 hover:bg-black hover:text-yellow-600"
          >
            Home
          </Link>

          <Link
            to="/withAxios"
            className="rounded px-3 py-2 transition-colors duration-300 hover:bg-black hover:text-yellow-600"
          >
            Axios
          </Link>

          <Link
            to="/contact"
            className="rounded px-3 py-2 transition-colors duration-300 hover:bg-black hover:text-yellow-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


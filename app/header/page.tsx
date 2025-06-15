"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Courses", path: "/courses" },
  { name: "Posts", path: "/posts" },
  { name: "Article", path: "/article" },
  { name: "About Us", path: "/about" },
  { name: "My Profile", path: "/AccountPage" },

];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          ConnectEDU
        </Link>

        {/* Mobile Menu Button */}
        <button
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden text-white focus:outline-none"
  title="Toggle menu"
>
  {isOpen ? (
    // When open, show X icon using two spans
    <div className="relative w-6 h-6">
      <span className="absolute block bg-white w-6 h-0.5 transform rotate-45 top-3"></span>
      <span className="absolute block bg-white w-6 h-0.5 transform -rotate-45 top-3"></span>
    </div>
  ) : (
    // When closed, show hamburger icon with three lines
    <div className="flex flex-col justify-between h-6">
      <span className="bg-white w-6 h-0.5"></span>
      <span className="bg-white w-6 h-0.5"></span>
      <span className="bg-white w-6 h-0.5"></span>
    </div>
  )}
</button>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path
                    ? "text-white font-semibold border-b-2 border-white"
                    : "text-white hover:text-gray-300"
                } transition-all px-3 py-2`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="lg:hidden py-2 px-4">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path
                    ? "text-white font-semibold border-b-2 border-white"
                    : "text-white hover:text-gray-300"
                } transition-all block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

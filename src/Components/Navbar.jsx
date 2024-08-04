import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import Home from "../Pages/Home";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Services", path: "/services" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
    { link: "Contact Us", path: "/contactus" },
  ];

  return (
    <>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
        <nav
          className={`flex items-center justify-between p-2 md:px-8 ${
            isSticky ? "border-b bg-white duration-300" : ""
          }`}
        >
          <div>
            <Link to="/">
              <img className="w-30 h-20" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="hidden md:flex md:items-center md:gap-4">
            {navItems.map(({ link, path }) => (
              <li key={path} className="py-2 md:py-0">
                <Link
                  to={path}
                  className="text-gray-800 font-bold text-xl hover:text-cyan-700" // Increase font size for desktop
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-x-5 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-neutralPrimary hover:text-gray-900 text-lg font-bold"
            >
              Login
            </a>
            <button className="bg-neutralPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:text-gray-900 text-lg font-bold">
              Sign up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-gray-700" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block fixed top-0 right-0 left-0 mt-24" : "hidden"
          } md:hidden space-y-4 px-4 py-7 bg-neutralPrimary`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block py-2 text-gray-800  text-xl" // Increase font size for mobile
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </header>
      <main className="mt-[30px]">
        <Home />
      </main>
    </>
  );
};

export default Navbar;

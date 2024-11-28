import logo from "../assets/images/planet-tutors-high-resolution-logo-transparent (2).png";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col">
      {/* Main Header */}
      <div className="flex items-center justify-between bg-gray-800 text-white p-6">
        {/* Logo */}
        <div>
          <Link className="no-underline" to="/Home">
            <img src={logo} width={150} alt="Planet Tutors" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {[
              "Home",
              "Our Services",
              "About Us",
              "Blog",
              "Contact",
              "Resources",
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.replace(/\s+/g, "")}`}
                  className={({ isActive }) =>
                    isActive ? "border-2 border-white p-2 rounded" : "p-2"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Sign-In Button */}
        <button
          type="submit"
          className="hidden lg:flex justify-center bg-blue-500 p-2 rounded"
        >
          <Link className="text-white no-underline" to="/Signin">
            Sign in
          </Link>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-3/4 h-screen bg-gray-800 text-white p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 999 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
        >
          &times;
        </button>

        {/* Mobile Navigation */}
        <ul className="flex flex-col items-start gap-6 mt-12">
          {[
            "Home",
            "Our Services",
            "About Us",
            "Blog",
            "Contact",
            "Resources",
          ].map((item, index) => (
            <li key={index} className="w-full">
              <NavLink
                to={`/${item.replace(/\s+/g, "")}`}
                className={({ isActive }) =>
                  isActive
                    ? "block w-full border-2 border-white p-2 rounded text-center"
                    : "block w-full p-2 text-center"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="w-full">
            <Link
              to="/Signin"
              className="block bg-blue-500 p-2 rounded text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom Banner */}
      <div className="bg-tealCustom text-center">
        <h3 className="text-lg font-bold text-white p-2">
          <span className="animated-text">Call Us Now:</span> 09-39-21-49-32
        </h3>
      </div>
    </div>
  );
}

export default Header;

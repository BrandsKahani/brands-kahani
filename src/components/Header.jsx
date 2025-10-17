import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // <-- your logo path

// ✅ Updated links with Profile added under About dropdown
const links = [
  { name: "Home", to: "/" },
  {
    name: "About",
    dropdown: [
      { name: "About Us", to: "/about" },
      { name: "Founder & CEO", to: "/founder" },
      { name: "Profile", to: "/profile" }, // ✅ new profile link
    ],
  },
  { name: "Services", to: "/services" },
  { name: "Franchise", to: "/franchise" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Brands Kahani Logo"
            className="w-24 h-24 md:w-28 md:h-28 rounded-md object-contain"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Brands Kahani</div>
            <div className="text-xs text-gray-500">
              Premium Brand Experience
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className="px-4 py-2 rounded-md text-brand-black hover:text-brand-red transition-all duration-300">
                  {link.name}
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-black/10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-50">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-gray-800 hover:bg-brand-red/10 hover:text-brand-red"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-brand-red text-white"
                      : "text-brand-black hover:bg-brand-red/10 hover:text-brand-red"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden relative" ref={menuRef}>
          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 bg-brand-red text-white rounded-full shadow-lg focus:outline-none transition-transform active:scale-95"
          >
            {mobileMenuOpen ? (
              <span className="text-2xl font-bold">×</span>
            ) : (
              <span className="text-2xl font-bold">☰</span>
            )}
          </button>

          {/* Overlay + Menu */}
          <div
            className={`fixed inset-0 z-40 transition-all duration-300 ${
              mobileMenuOpen
                ? "bg-black/20 pointer-events-auto"
                : "bg-transparent pointer-events-none"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div
            className={`absolute top-14 right-0 z-50 w-56 bg-white rounded-2xl shadow-lg border border-black/10 p-4 flex flex-col gap-3 transform transition-transform duration-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-[-20px] opacity-0"
            }`}
          >
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <div className="font-semibold text-brand-red mb-2">
                    {link.name}
                  </div>
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-brand-red/10 hover:text-brand-red rounded-lg"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-brand-red text-white"
                        : "text-gray-800 hover:bg-brand-red/10 hover:text-brand-red"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

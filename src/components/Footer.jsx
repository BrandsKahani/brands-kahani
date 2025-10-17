import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/whitelogo.png";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Left: Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Brands Kahani Logo"
              className="w-20 h-15 rounded-md object-contain"
            />
            <h2 className="text-lg font-semibold text-white">Brands Kahani</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            We build premium brand & franchise experiences — connecting stories,
            strategy, and style for next-generation businesses.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-red">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-red">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-red">Services</Link></li>
            <li><Link to="/franchise" className="hover:text-brand-red">Franchise</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <p className="text-sm text-gray-400">
            Office 106, 1st Floor, Al-Hafeez Heights, Ghalib Road, Gulberg 3, Lahore
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <a
              href="mailto:info@brandskahani.com"
              className="block hover:text-brand-red"
            >
              info@brandskahani.com
            </a>
            <a href="tel:+923041118000" className="block hover:text-brand-red">
              +92 304 111 8000
            </a>
          </div>

          {/* ✅ Social Icons with real links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/BrandsKahaani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-brand-red"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/brandskahani/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-brand-red"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/brands-kahani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-brand-red"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Brands Kahani. All rights reserved.
      </div>
    </footer>
  );
}

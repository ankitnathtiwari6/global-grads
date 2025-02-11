"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Menu } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - visible on all screens */}
          <Link
            href="/"
            className="text-xl flex items-center text-[#dd1d2d] font-bold"
          >
            Global Grads
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/countries"
              className="text-text hover:text-primary transition-colors"
            >
              Countries
            </Link>
            <Link
              href="/universities"
              className="text-text hover:text-primary transition-colors"
            >
              Universities
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Contact Info - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919696902475"
              className="flex items-center text-primary"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 9696902475</span>
            </a>

            <a
              href="https://wa.me/919696902475"
              className="bg-primary text-background px-4 py-2 rounded-full flex items-center hover:bg-primary-hover transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Phone and Menu - visible only on mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href="tel:+919696902475"
              className="flex items-center text-primary"
            >
              <Phone className="h-5 w-5" />
              <span className="mx-2">+91 9696902475</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - slides down when menu is open */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center space-y-4 pb-4">
            <Link
              href="/"
              className="text-text hover:text-primary transition-colors text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/countries"
              className="text-text hover:text-primary transition-colors text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Countries
            </Link>
            <Link
              href="/universities"
              className="text-text hover:text-primary transition-colors text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Universities
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-primary transition-colors text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/919696902475"
              className="bg-primary text-background px-4 py-2 rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors w-32"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";

const pages = [
  { title: "Cars", path: "/cars" },
  { title: "About Us", path: "/about" },
  { title: "Support", path: "/support" },
  { title: "Blog", path: "/blog" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  useClickOutside(navRef, closeMenu);

  return (
    <nav
      className="py-4 border-b border-gray-200 bg-white sticky top-0 z-10"
      ref={navRef}
    >
      <div className="container flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Cayenne Car Rental"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-900">
          {pages.map(({ title, path }, index) => (
            <li key={index}>
              <Link
                href={path}
                className={cn("hover:text-orange-500", {
                  "text-orange-700": pathname === path,
                })}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Links (Always Visible) */}
        <div className="flex space-x-4 items-center">
          <Link href="/login" className="text-green-600 hover:text-green-800">
            Log In
          </Link>
          <Link href="/signup" className="text-gray-900 hover:text-gray-600">
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:text-gray-600"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white border-t border-gray-200">
          {pages.map(({ title, path }, index) => (
            <li key={index}>
              <Link
                href={path}
                className="text-gray-900 hover:text-orange-700 border-b border-gray-200 hover:border-gray-900 px-4 py-2"
                onClick={closeMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

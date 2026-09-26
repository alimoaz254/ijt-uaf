"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiUser, FiLogIn } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`site-header fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="site-header__inner flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="site-header__mark flex items-center justify-center"
              >
                <span className="font-bold text-xl">I</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="site-header__name font-bold text-xl text-[var(--color-primary)] transition-colors">
                  IJT-UAF
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  Islamic Student Organization
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Pill Style */}
            <nav className="hidden lg:flex items-center">
              <div className="site-header__nav-wrap">
                <ul className="flex items-center gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavLink href={link.href} isActive={pathname === link.href}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="site-header__login flex items-center gap-2 px-4 py-2.5 font-medium border transition-all duration-300"
              >
                <FiLogIn className="text-lg" />
                Login
              </Link>
              <Link
                href="/register"
                className="site-header__join flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-300"
              >
                <FiUser className="text-lg" />
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="site-header__menu lg:hidden p-2 border border-[var(--color-border)]"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-xl text-[var(--color-primary)]" />
              ) : (
                <FiMenu className="text-xl text-[var(--color-primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="site-header__mobile lg:hidden border-t border-[var(--color-border)]"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                      pathname === link.href
                        ? "bg-[var(--color-primary)] text-white"
                        : "text-[var(--color-primary)] hover:bg-[var(--color-background-alt)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium border-2 border-[var(--color-primary)] text-[var(--color-primary)]"
                  >
                    <FiLogIn className="text-lg" />
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
                  >
                    <FiUser className="text-lg" />
                    Join Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
        isActive
            ? "is-active"
            : ""
      }`}
          aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowBackToTop(offset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSearch = () => setShowSearch((prev) => !prev);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar-container">
          {/* Left: Company Name */}
          <div className="navbar-left">
            <Link href="/" className="navbar-logo">
              Doon Blogs
            </Link>
          </div>
          {/* Right: Search Icon & Hamburger Menu Button */}
          <div className="navbar-right">
            <button className="navbar-search-btn" onClick={toggleSearch}>
              <FaSearch />
            </button>
            <button className="navbar-menu-btn" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Top colleges in Dehradun
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  Top Schools in Dehradun
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Top Coaching Institutes in Dehradun
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Top Hospitals in Dehradun
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="search-container"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="close-search"
                onClick={() => setShowSearch(false)}
              >
                <FaTimes />
              </button>
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

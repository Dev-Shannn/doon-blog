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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowBackToTop(offset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuOpen && !(event.target as HTMLElement).closest(".mobile-menu, .navbar-menu-btn")) {
        setMenuOpen(false);
      }
      if (showSearch && !(event.target as HTMLElement).closest(".search-bar, .navbar-search-btn")) {
        setShowSearch(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen, showSearch]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSearch((prev) => !prev);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
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
          <div className="navbar-left">
            <Link href="/" className="navbar-logo">
              Doon Blogs
            </Link>
          </div>
          <div className="navbar-center">
            <AnimatePresence>
              {showSearch && (
                <motion.form
                  className="search-bar"
                  onSubmit={handleSearchSubmit}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "220px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          <div className="navbar-right">
            <button className="navbar-search-btn" onClick={toggleSearch}>
              <FaSearch />
            </button>
            <button className="navbar-menu-btn" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

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
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Top colleges in Dehradun</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>Top Schools in Dehradun</Link></li>
              <li><Link href="/services" onClick={() => setMenuOpen(false)}>Top Coaching Institutes in Dehradun</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Top Hospitals in Dehradun</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

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

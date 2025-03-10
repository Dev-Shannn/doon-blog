"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <motion.nav className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">Doon Blogs</Link>
          
          <div className="navbar-icons">
           
            <button className="nav-btn" onClick={toggleMenu}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            <Link href="/colleges" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Colleges</Link>
            <Link href="/schools" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Schools</Link>
            <Link href="/coaching" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Coaching</Link>
            <Link href="/hospitals" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Hospitals</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSearch && (
          <motion.div className="search-bar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <input type="text" placeholder="Search..." autoFocus className="search-input" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

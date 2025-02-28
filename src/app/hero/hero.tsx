"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Elevate Your Knowledge
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Explore in-depth insights, trends, and inspiration from industry experts.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          <Link href="/blog" className="hero-btn primary">Start Reading</Link>
          <Link href="/about" className="hero-btn secondary">Discover More</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterReveal = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ================= ANIMATED TEXT ================= */

function AnimatedText({ text, className, gradient = false }) {
  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterReveal}
          animate={{
            y: [0, -6, 0],
            backgroundPosition: gradient
              ? ["0% 50%", "100% 50%", "0% 50%"]
              : "0%",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className={`inline-block ${
            gradient
              ? "bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

/* ================= HERO ================= */

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-24">

        {/* NAME */}
        <AnimatedText
          text="ALPHAA"
          className="text-[80px] md:text-[120px] font-extrabold leading-none"
        />

        {/* BRAND / HIGHLIGHT */}
        <AnimatedText
          text="DESIGNSTUDIO"
          gradient
          className="text-[90px] md:text-[140px] font-extrabold leading-none"
        />

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg"
        >
          <h1>Freelance Designer / UI UX / Developer</h1>
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 max-w-xl text-gray-400 leading-relaxed"
        >
          Crafting bold visual experiences that elevate brands and captivate audiences. Let's create something unforgettable.
          Crafting bold visual experiences that elevate brands and captivate audiences. Let's create something unforgettable.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center gap-6 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-7 py-3 rounded-full font-medium"
          >
            View Works <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-full border border-gray-600 hover:border-white transition font-medium"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-20 text-gray-400 text-xs tracking-widest"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        SCROLL
        <div className="w-[1px] h-12 bg-purple-500 mx-auto mt-2"></div>
      </motion.div>

    </section>
  );
}

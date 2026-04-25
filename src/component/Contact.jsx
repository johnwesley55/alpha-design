"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

/* 🔤 Letter animation */
const sentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactCTA() {
  const title = "Something Meaningful";

  return (
    <section className="relative bg-black text-white py-44 overflow-hidden">
      {/* 🌌 Soft Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block mb-10 tracking-[0.4em] text-sm text-purple-400"
        >
          GET IN TOUCH
        </motion.span>

        {/* 🧠 Heading with LETTER animation */}
        <motion.h2
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          Let’s Create <br />
          <span className="inline-block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Have an idea or project in mind? Let’s collaborate and craft something
          that feels intentional, elegant, and impactful.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col sm:flex-row justify-center gap-8"
        >
          <motion.a
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.96 }}
  href="thumbnails.alphadesigns360.com"
  target="_blank"
  className="inline-flex items-center gap-3 px-12 py-5 rounded-full
  bg-gradient-to-r from-purple-500 to-fuchsia-500 text-black font-semibold text-lg
  shadow-[0_0_30px_rgba(168,85,247,0.35)]"
>
  View Thumbnail Work
  <ArrowUpRight />
</motion.a>
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:hello@alexmorgan.design"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full
            bg-purple-500 text-black font-semibold text-lg
            shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            Start a Conversation
            <ArrowUpRight />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/918870118125"
            target="_blank"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full
            border border-white/20 text-white text-lg
            hover:border-purple-400 hover:text-purple-400 transition backdrop-blur"
          >
            <MessageCircle />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* 🌐 REAL Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-28 flex justify-center gap-10"
        >
          {[
            { icon: Instagram, link: "https://www.instagram.com/alphadesigns360.in?igsh=aXF5aWN1YXFpMngx&utm_source=qr" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/alphadesignstudio?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
            { icon: Twitter, link: "https://twitter.com" },
          ].map(({ icon: Icon, link }, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              href={link}
              target="_blank"
              className="w-14 h-14 rounded-full flex items-center justify-center
              border border-white/15 text-gray-400
              hover:text-purple-400 hover:border-purple-400 transition"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

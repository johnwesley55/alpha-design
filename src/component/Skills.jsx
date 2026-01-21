"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Sparkles,
  Palette,
  Globe,
  Video,
  Layers,
  Type,
  Brush,
  Figma,
  Image,
  Pen,
  Film,
  Box,
} from "lucide-react";

const skills = [
  { name: "UI/UX Design", icon: Layout },
  { name: "Brand Identity", icon: Sparkles },
  { name: "Visual Design", icon: Palette },
  { name: "Web Design", icon: Globe },
  { name: "Motion Graphics", icon: Video },
  { name: "Art Direction", icon: Layers },
  { name: "Typography", icon: Type },
  { name: "Illustration", icon: Brush },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Photoshop", icon: Image },
  { name: "Illustrator", icon: Pen },
  { name: "After Effects", icon: Film },
  { name: "Blender", icon: Box },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black text-white py-40 overflow-hidden">

      {/* Subtle background grid (barely visible) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Soft ambient light */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-purple-400 tracking-[0.45em] text-xs mb-6 uppercase"
        >
          Expertise
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl xl:text-7xl font-semibold mb-24"
        >
          Skills &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            Tools
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-32">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-7 py-7 text-left hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.04] text-purple-400">
                  <skill.icon className="w-5 h-5" />
                </div>

                <span className="text-lg font-medium tracking-wide">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Tools */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 tracking-[0.4em] text-xs mb-12 uppercase"
        >
          Tools I Use
        </motion.p>

        <div className="flex flex-wrap justify-center gap-16 text-gray-300 text-lg">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 hover:text-purple-400 transition-colors"
            >
              <tool.icon className="w-5 h-5" />
              {tool.name}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

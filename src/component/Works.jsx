"use client";

import { motion } from "framer-motion";

const works = [
  {
    title: "Neon Dreams",
    subtitle: "Futuristic visual identity",
    image: "/images/i1.png",
  },
  {
    title: "Cyber Pulse",
    subtitle: "Retro tech experience",
    image: "/images/img2.png",
  },
  {
    title: "Aurora",
    subtitle: "Gradient motion design",
    image: "/images/img3.png",
  },
  {
    title: "Midnight Protocol",
    subtitle: "Developer focused system",
    image: "/images/img4.png",
  },
  {
    title: "Void",
    subtitle: "Minimal abstract concept",
    image: "/images/img5.png",
  },
  {
    title: "Spectrum",
    subtitle: "Color driven interface",
    image: "/images/img6.png",
  },
];

export default function SelectedWorks() {
  return (
    <section className="bg-black text-white py-24 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          <span className="text-white">PROFESSIONAL </span>
          <span className="text-purple-500">Design Services :</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group relative h-[360px] rounded-2xl overflow-hidden bg-neutral-900"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-purple-500/40 transition duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-semibold tracking-wide">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {work.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

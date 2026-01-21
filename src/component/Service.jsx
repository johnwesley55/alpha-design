import { motion } from "framer-motion";
import {
  Palette,
  LayoutGrid,
  Smartphone,
  Layers,
  Rocket,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    desc: "Complete visual identity systems that make your brand unforgettable.",
    icon: Palette,
    points: ["Logo Design", "Color Systems", "Typography", "Brand Guidelines"],
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive interfaces that convert visitors into loyal customers.",
    icon: LayoutGrid,
    points: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    title: "Web & Mobile",
    desc: "Responsive designs that work flawlessly across all devices.",
    icon: Smartphone,
    points: ["Responsive Design", "App Design", "Design Systems", "Handoff"],
  },
  {
    title: "Visual Design",
    desc: "Stunning visuals that capture attention and tell your story.",
    icon: Layers,
    points: ["Illustrations", "Iconography", "Motion Graphics", "Infographics"],
  },
  {
    title: "Creative Direction",
    desc: "Strategic vision that elevates your brand above the competition.",
    icon: Rocket,
    points: ["Art Direction", "Campaign Design", "Visual Strategy", "Consulting"],
  },
  {
    title: "Rapid Prototyping",
    desc: "Quick iterations to validate ideas before full development.",
    icon: Zap,
    points: ["MVP Design", "Interactive Demos", "User Testing", "Fast Delivery"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-500/40 text-purple-400 text-sm tracking-wide">
            WHAT I OFFER
          </span>

          <h2 className="text-6xl md:text-7xl font-extrabold">
            Services<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            End-to-end design solutions crafted with precision and passion
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent" />

                {/* Corner Dot */}
                <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-purple-500/80" />

                {/* Icon */}
                <div className="relative z-10 mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="relative z-10 text-gray-400 mb-6">
                  {service.desc}
                </p>

                <ul className="relative z-10 space-y-2 text-gray-300">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-8 tracking-[0.3em] text-sm text-purple-400"
        >
          GET IN TOUCH
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          Let&apos;s Create <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s
          discuss how we can work together to bring your vision to life.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          href="mailto:hello@alexmorgan.design"
          className="inline-flex items-center gap-3 mt-16 px-10 py-5 rounded-full
          bg-purple-500 text-black font-semibold text-lg
          hover:bg-purple-400 transition shadow-lg shadow-purple-500/30"
        >
          hello@alexmorgan.design
          <ArrowUpRight />
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center gap-10 text-gray-500"
        >
          {["Dribbble", "Behance", "LinkedIn", "Twitter"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

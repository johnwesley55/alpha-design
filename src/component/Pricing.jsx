import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for small projects",
    price: "1,500",
    desc: "Essential design services for startups and small businesses getting started.",
    features: [
      "1 Design Concept",
      "2 Revision Rounds",
      "Source Files Included",
      "5 Day Delivery",
      "Email Support",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    subtitle: "Most popular choice",
    price: "3,500",
    desc: "Comprehensive design package for growing brands that need impact.",
    features: [
      "3 Design Concepts",
      "Unlimited Revisions",
      "Source Files + Assets",
      "Priority Delivery",
      "Brand Guidelines",
      "1 Month Support",
    ],
    button: "Start Project",
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For established brands",
    price: "7,500",
    desc: "Full-scale design partnership for enterprises requiring excellence.",
    features: [
      "5 Design Concepts",
      "Unlimited Revisions",
      "Complete Asset Library",
      "Rush Delivery Available",
      "Full Brand System",
      "3 Month Support",
      "Strategy Consultation",
    ],
    button: "Contact Me",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-500/40 text-purple-400 text-sm">
            INVESTMENT
          </span>

          <h2 className="text-6xl md:text-7xl font-extrabold">
            Pricing<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Transparent pricing for exceptional design. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl border backdrop-blur-xl p-10 pt-14
                ${
                  plan.highlight
                    ? "border-purple-500 bg-gradient-to-br from-purple-500/20 to-black"
                    : "border-white/10 bg-gradient-to-br from-white/5 to-white/0"
                }`}
            >
              {/* MOST POPULAR – INSIDE CARD (NO CUT) */}
              {plan.highlight && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-purple-500 text-black text-xs font-semibold shadow-md">
                    ✦ MOST POPULAR
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-1 mt-4">
                {plan.name}
              </h3>

              <p className="text-gray-400 mb-8">{plan.subtitle}</p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">
                <span className="text-gray-400">$</span>
                <span
                  className={`text-6xl font-extrabold ${
                    plan.highlight ? "text-purple-400" : ""
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-gray-400">/ project</span>
              </div>

              <p className="text-gray-400 mb-8">{plan.desc}</p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition
                  ${
                    plan.highlight
                      ? "bg-purple-500 text-black hover:bg-purple-400"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
              >
                {plan.button} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 text-gray-400">
          Need a custom solution? Let's discuss your project requirements.
          <div className="mt-4">
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Schedule a free consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

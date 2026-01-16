import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

      

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-24">
        <h2 className="text-[80px] md:text-[120px] font-extrabold leading-none">
          ALPHAA
        </h2>

        <h2 className="text-[90px] md:text-[140px] font-extrabold leading-none bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          DESIGNS
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Freelance Designer / UI UX / Graphic Designer
        </p>

        <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
          Crafting bold visual experiences that elevate brands and captivate
          audiences. Let’s create something unforgettable.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-10">
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-7 py-3 rounded-full font-medium">
            View Works <ArrowRight size={18} />
          </button>

          <button className="px-7 py-3 rounded-full border border-gray-600 hover:border-white transition font-medium">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-20 text-gray-400 text-xs tracking-widest">
        SCROLL
        <div className="w-[1px] h-12 bg-purple-500 mx-auto mt-2"></div>
      </div>
    </section>
  );
}

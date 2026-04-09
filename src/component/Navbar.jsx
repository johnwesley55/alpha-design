import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        
        {/* Logo */}
        <div className="leading-none">
          <h1 className="text-lg font-semibold tracking-wide text-white">
            JOHN
          </h1>
          <p className="text-[10px] tracking-[0.35em] text-gray-400 mt-1">
            ALPHA DESIGNS 360
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-300">
          <a href="#works" className="hover:text-white">Works</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>

          <button className="ml-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-[13px] font-medium">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-6 pt-4 text-sm text-gray-300 space-y-4">
          <a onClick={() => setOpen(false)} href="#works" className="block hover:text-white">Works</a>
          <a onClick={() => setOpen(false)} href="#about" className="block hover:text-white">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block hover:text-white">Skills</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-white">Contact</a>

          <button className="mt-3 w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-sm">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}

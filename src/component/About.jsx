export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-32 overflow-hidden">

      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-fuchsia-600/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT – TITLE */}
          <div className="pt-4">

            {/* ABOUT LABEL – IMPROVED */}
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-12 bg-purple-500/70"></span>
              <p className="text-purple-400 text-sm font-semibold tracking-[0.4em] uppercase">
                About Me
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05]">
              Design is not just <br />
              what it looks like. <br />
              <span className="block mt-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">
                Design is how it works.
              </span>
            </h2>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="max-w-xl space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a freelance designer with over 8 years of experience crafting
              digital experiences that leave lasting impressions. My approach
              blends bold aesthetics with strategic clarity.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              From startups to Fortune 500 companies, I help brands shape strong
              visual identities and build meaningful connections with their
              audiences.
            </p>

            {/* Divider */}
            <div className="pt-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "8+", label: "Years Experience" },
                { value: "150+", label: "Projects Done" },
                { value: "50+", label: "Happy Clients" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-7 text-center transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]"
                >
                  <h3 className="text-4xl font-bold text-purple-400 leading-none">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

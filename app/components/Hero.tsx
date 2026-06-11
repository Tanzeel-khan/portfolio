import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Stronger grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(246,232,248,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(246,232,248,0.07)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* Radial spotlight from top-center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(246,232,248,0.10)_0%,transparent_70%)]" />

      {/* Ambient side glows */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#F6E8F8]/8 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[#F6E8F8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#F6E8F8]/25 bg-[#F6E8F8]/8 badge-glow animate-border-pulse">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#F6E8F8] text-sm font-medium tracking-wide">
                Open to new opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-nowrap">
              <span className="shimmer-text">Tanzeel </span>
              <span className="text-white">ur Rehman</span>
            </h1>

            {/* Role */}
            <p className="text-xl text-[#F6E8F8] font-semibold font-mono tracking-widest subtle-glow">
              Senior Software Engineer
            </p>

            {/* Bio */}
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              5+ years crafting high-quality, secure web applications with React,
              Next.js &amp; TypeScript. Frontend-focused, AI-enhanced — building
              products that scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-[#F6E8F8] text-black font-bold text-sm tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(246,232,248,0.30)]"
              >
                View Projects ↗
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-white/25 text-white text-sm font-semibold tracking-wide hover:border-[#F6E8F8]/70 hover:text-[#F6E8F8] hover:shadow-[0_0_20px_rgba(246,232,248,0.15)] transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-7 pt-2">
              {[
                { label: "GitHub", href: "https://github.com/Tanzeel-khan", ext: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/tanzeel-ur-rehman-0b6150171/", ext: true },
                { label: "Email", href: "mailto:ktanzeel184@gmail.com", ext: false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.ext ? "_blank" : undefined}
                  rel={s.ext ? "noopener noreferrer" : undefined}
                  className="text-white/40 hover:text-[#F6E8F8] transition-colors text-sm font-medium tracking-wide"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* ── Right visual ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[360px] h-[360px]">

              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-[#F6E8F8]/12 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F6E8F8] shadow-[0_0_12px_#F6E8F8]" />
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F6E8F8]/50" />
              </div>

              {/* Middle ring */}
              <div className="absolute inset-10 rounded-full border border-[#F6E8F8]/20 animate-spin-reverse">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F6E8F8]/70 shadow-[0_0_8px_#F6E8F8]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F6E8F8]/30" />
              </div>

              {/* Glow ring behind photo */}
              <div className="absolute inset-16 rounded-full shadow-[0_0_50px_rgba(246,232,248,0.18),0_0_100px_rgba(246,232,248,0.08)]" />

              {/* Profile picture (head to tie) */}
              <div className="absolute inset-16 rounded-full border border-[#F6E8F8]/35 overflow-hidden bg-black">
                <Image
                  src="/projects/me.png"
                  alt="Tanzeel ur Rehman"
                  fill
                  className="object-cover object-[center_8%] scale-[1.15] mt-[18px] ml-1"
                  sizes="192px"
                  priority
                />
              </div>

              {/* Floating tech badges */}
              {[
                { label: "React",      pos: "top-2 right-4",    delay: "0s"   },
                { label: "Next.js",    pos: "bottom-8 right-2", delay: "0.6s" },
                { label: "TypeScript", pos: "bottom-2 left-6",  delay: "1.2s" },
                { label: "AI/n8n",     pos: "top-10 left-0",    delay: "1.8s" },
              ].map((b) => (
                <span
                  key={b.label}
                  className={`absolute ${b.pos} px-3 py-1.5 rounded-full bg-black border border-[#F6E8F8]/30 text-[#F6E8F8] text-xs font-mono animate-float shadow-[0_0_10px_rgba(246,232,248,0.12)]`}
                  style={{ animationDelay: b.delay }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.35em] font-mono">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

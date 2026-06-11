const links = [
  {
    label: "GitHub",
    href: "https://github.com/Tanzeel-khan",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tanzeel-khan",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:ktanzeel184@gmail.com",
    external: false,
  },
  {
    label: "+92 301 2952321",
    href: "tel:+923012952321",
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-5">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Work{" "}
            <span className="text-[#F6E8F8]">Together</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind, want to collaborate, or just want to say hi —
            my inbox is always open.
          </p>

          <a
            href="mailto:ktanzeel184@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#F6E8F8] text-black font-bold text-base tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 mb-16"
          >
            Say Hello ↗
          </a>

          {/* Divider */}
          <div className="border-t border-white/8 pt-10">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-white/35 hover:text-[#F6E8F8] transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

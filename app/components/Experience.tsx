const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Ehsaan Technologies",
    period: "Apr 2021 — Present",
    type: "Hybrid · Karachi, Pakistan",
    current: true,
    highlights: [
      "Translated complex product requirements into scalable React and Next.js applications with 90%+ unit test coverage using Jest and React Testing Library.",
      "Built consistent, accessible UIs with Material-UI and Tailwind CSS, following WCAG accessibility standards across all client applications.",
      "Tuned performance via code splitting, lazy loading, and memoization — improving page load time by 25% and Core Web Vitals scores.",
      "Built and launched AI voice assistants with OpenAI, Deepgram, and ElevenLabs — reducing response time by 80% and increasing engagement 5×.",
      "Maintained CI/CD pipelines via GitHub Actions and led peer code reviews.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Beam AI",
    period: "2022 — 2023",
    type: "Full-Time Remote Contract · beam.ai",
    current: false,
    highlights: [
      "Developed core SaaS dashboard and onboarding platform using React.js and TypeScript.",
      "Wrote clean, reusable components with strong focus on UX and cross-browser compatibility.",
      "Collaborated directly with client teams across design and backend to ship polished, accessible experiences.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Deskwork Solutions",
    period: "Oct 2020 — Mar 2021",
    type: "Full-Time · Karachi, Pakistan",
    current: false,
    highlights: [
      "Developed React Native mobile applications with REST API integrations for consistent cross-platform experiences on iOS and Android.",
      "Estimated tasks, tracked progress in JIRA, and collaborated with backend engineers and designers in agile cycles.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-[#F6E8F8] text-sm font-mono font-semibold tracking-[0.25em] mb-5 subtle-glow">
            WHERE I&apos;VE WORKED
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Work <span className="text-[#F6E8F8] heading-glow">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#F6E8F8]/40 via-[#F6E8F8]/15 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal relative pl-16 md:pl-24"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-6 w-9 h-9 rounded-full border border-[#F6E8F8]/30 bg-black flex items-center justify-center shadow-[0_0_16px_rgba(246,232,248,0.12)]">
                  {exp.current
                    ? <span className="w-2.5 h-2.5 rounded-full bg-[#F6E8F8] animate-pulse shadow-[0_0_8px_#F6E8F8]" />
                    : <span className="w-2 h-2 rounded-full bg-[#F6E8F8]/40" />}
                </div>

                <div className="p-7 rounded-2xl border border-[#F6E8F8]/12 bg-[#F6E8F8]/[0.02] hover:border-[#F6E8F8]/28 hover:bg-[#F6E8F8]/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(246,232,248,0.07)]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-white text-xl font-bold">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#F6E8F8]/10 border border-[#F6E8F8]/25 text-[#F6E8F8] text-xs font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#F6E8F8] font-semibold mt-1 subtle-glow">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white/50 text-sm font-mono">{exp.period}</p>
                      <p className="text-white/30 text-xs mt-0.5">{exp.type}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                        <span className="text-[#F6E8F8]/70 flex-shrink-0 mt-0.5 text-xs">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-12 p-6 rounded-2xl border border-[#F6E8F8]/12 bg-[#F6E8F8]/[0.02] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-white font-semibold text-lg">
              Bachelor of Engineering — Computer Systems Engineering
            </p>
            <p className="text-white/40 text-sm mt-0.5">
              Sir Syed University of Engineering &amp; Technology, Karachi
            </p>
          </div>
          <p className="text-[#F6E8F8] font-mono text-sm flex-shrink-0 subtle-glow">2018 — 2022</p>
        </div>
      </div>
    </section>
  );
}

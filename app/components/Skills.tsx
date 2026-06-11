const skillGroups = [
  { category: "Languages",             skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks & Libraries", skills: ["React.js", "Next.js", "Redux Toolkit", "Context API", "Zustand"] },
  { category: "Design Systems & UI",    skills: ["Material-UI (MUI)", "Tailwind CSS v4", "Ant Design", "Styled Components"] },
  { category: "Testing",                skills: ["Jest", "React Testing Library", "Unit Tests", "Integration Tests"] },
  { category: "State & Data Fetching",  skills: ["TanStack Query v5", "Redux Toolkit", "Axios Interceptors", "REST APIs"] },
  { category: "Forms & Validation",     skills: ["React Hook Form", "Zod", "Type-safe Submissions"] },
  { category: "AI & Automation",        skills: ["OpenAI API", "n8n", "VAPI", "Voiceflow", "Deepgram", "ElevenLabs"] },
  { category: "Tools & DevOps",         skills: ["Git / GitHub", "GitHub Actions", "Bitbucket Pipelines", "JIRA", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(246,232,248,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(246,232,248,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#F6E8F8] text-sm font-mono font-semibold tracking-[0.25em] mb-5 subtle-glow">
            WHAT I WORK WITH
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Technical <span className="text-[#F6E8F8] heading-glow">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="reveal reveal-scale p-6 rounded-2xl border border-[#F6E8F8]/12 bg-[#F6E8F8]/[0.02] hover:border-[#F6E8F8]/30 hover:bg-[#F6E8F8]/5 transition-all duration-300 group hover:shadow-[0_0_24px_rgba(246,232,248,0.07)]"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <h3 className="text-[#F6E8F8] text-xs font-mono font-bold tracking-widest mb-4 group-hover:text-white transition-colors uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/55 hover:border-[#F6E8F8]/35 hover:text-[#F6E8F8] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

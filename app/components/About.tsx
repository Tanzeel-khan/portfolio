import CountUp from "./CountUp";

const stats = [
  { value: "5+",   label: "Years of Experience"   },
  { value: "3",    label: "Companies"              },
  { value: "90%+", label: "Test Coverage"          },
  { value: "25%",  label: "Load Time Improvement"  },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — bio */}
          <div className="reveal">
            <p className="text-[#F6E8F8] text-sm font-mono font-semibold tracking-[0.25em] mb-5 subtle-glow">
              WHO I AM
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Frontend Engineer,
              <br />
              <span className="text-[#F6E8F8] heading-glow">AI Enthusiast</span>
            </h2>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                I&apos;m a Senior Software Engineer based in Karachi, Pakistan,
                with 5+ years building high-quality, secure, and performant
                front-end web applications — from SaaS dashboards and fintech
                platforms to AI-powered products.
              </p>
              <p>
                My core stack is React, Next.js, and TypeScript, paired with
                deep expertise in Redux Toolkit, TanStack Query, Material-UI,
                and Tailwind CSS. I write tests first and ship with confidence —
                90%+ coverage is the baseline, not the goal.
              </p>
              <p>
                Beyond traditional frontend, I build AI-powered systems using
                OpenAI, n8n, VAPI, and ElevenLabs — reducing response times by
                80% and multiplying user engagement.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:ktanzeel184@gmail.com"
                className="px-5 py-2.5 rounded-full border border-[#F6E8F8]/35 text-[#F6E8F8] text-sm font-medium hover:bg-[#F6E8F8] hover:text-black transition-all duration-300"
              >
                ktanzeel184@gmail.com
              </a>
              <span className="px-5 py-2.5 rounded-full border border-white/10 text-white/40 text-sm font-medium">
                Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="reveal reveal-scale p-7 rounded-2xl border border-[#F6E8F8]/12 bg-[#F6E8F8]/[0.02] hover:border-[#F6E8F8]/35 hover:bg-[#F6E8F8]/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(246,232,248,0.08)]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="text-5xl font-bold text-[#F6E8F8] mb-2 heading-glow">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-white/50 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

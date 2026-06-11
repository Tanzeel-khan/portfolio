import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const featured = projects.slice(0, 4);

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(246,232,248,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(246,232,248,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#F6E8F8] text-sm font-mono font-semibold tracking-[0.25em] mb-5 subtle-glow">
            WHAT I&apos;VE BUILT
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="text-[#F6E8F8] heading-glow">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="reveal reveal-scale group flex flex-col rounded-2xl border border-[#F6E8F8]/12 bg-[#F6E8F8]/[0.02] hover:border-[#F6E8F8]/35 hover:bg-[#F6E8F8]/5 transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_rgba(246,232,248,0.08)]"
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className={`relative h-52 w-full bg-gradient-to-br ${project.cardGradient} flex-shrink-0`}>
                {project.image ? (
                  <div className="absolute inset-0 p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <p className="font-bold text-6xl font-mono opacity-10 relative z-10" style={{ color: project.cardAccent }}>
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </p>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-15" style={{ backgroundColor: project.cardAccent }} />
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-mono">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 text-sm group-hover:bg-[#F6E8F8] group-hover:text-black group-hover:border-[#F6E8F8] transition-all duration-300">
                  ↗
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-[#F6E8F8] text-xl font-bold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/35 text-sm mt-0.5">{project.subtitle}</p>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                  {project.overview.slice(0, 130)}…
                </p>
                <div className="px-3.5 py-2.5 rounded-xl bg-[#F6E8F8]/5 border border-[#F6E8F8]/12 mb-4">
                  <span className="text-[#F6E8F8] text-xs font-mono">✦ {project.highlight}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/45 font-mono">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/30 font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="reveal mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-[#F6E8F8]/30 text-[#F6E8F8] font-semibold text-sm tracking-wide hover:bg-[#F6E8F8] hover:text-black hover:border-[#F6E8F8] hover:scale-105 hover:shadow-[0_0_30px_rgba(246,232,248,0.25)] transition-all duration-300"
          >
            View All Projects <span className="text-base">→</span>
          </Link>
          <p className="text-white/20 text-xs mt-3 font-mono">{projects.length} projects total</p>
        </div>
      </div>
    </section>
  );
}

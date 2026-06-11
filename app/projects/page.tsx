import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects · Tanzeel ur Rehman",
  description:
    "All projects by Tanzeel ur Rehman — React, Next.js, TypeScript, AI Automation and more.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#F6E8F8]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#F6E8F8] font-mono font-bold text-lg tracking-wider hover:opacity-75 transition-opacity"
          >
            TANZEEL.DEV
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-[#F6E8F8] transition-colors text-sm font-medium"
          >
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,232,248,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(246,232,248,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F6E8F8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-5">
            ALL PROJECTS
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Things I&apos;ve{" "}
            <span className="text-[#F6E8F8]">Built</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {projects.length} projects across fintech, AI, mobile, SaaS, and automation.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-[#F6E8F8]/10 bg-[#F6E8F8]/[0.02] hover:border-[#F6E8F8]/30 hover:bg-[#F6E8F8]/5 transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className={`relative h-44 w-full bg-gradient-to-br ${project.cardGradient} flex-shrink-0`}
              >
                {project.image ? (
                  <div className="absolute inset-0 p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <p
                      className="font-bold text-5xl font-mono opacity-10 relative z-10"
                      style={{ color: project.cardAccent }}
                    >
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </p>
                    <div
                      className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-15"
                      style={{ backgroundColor: project.cardAccent }}
                    />
                  </div>
                )}

                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-mono">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 text-xs group-hover:bg-[#F6E8F8] group-hover:text-black group-hover:border-[#F6E8F8] transition-all duration-300">
                  ↗
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#F6E8F8] text-lg font-bold group-hover:text-white transition-colors mb-0.5">
                  {project.title}
                </h3>
                <p className="text-white/30 text-xs mb-3">{project.subtitle}</p>

                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  {project.overview.slice(0, 110)}…
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/40 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/25 font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-white/25 text-xs font-mono flex-shrink-0 ml-2">
                    {project.period}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F6E8F8] font-mono font-bold text-sm tracking-wider">
            TANZEEL.DEV
          </p>
          <Link
            href="/#contact"
            className="text-white/30 hover:text-[#F6E8F8] transition-colors text-sm"
          >
            Get in touch →
          </Link>
        </div>
      </footer>
    </div>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "../../data/projects";
import CountUp from "../../components/CountUp";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Tanzeel ur Rehman`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#F6E8F8]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#F6E8F8] font-mono font-bold text-lg tracking-wider hover:opacity-75 transition-opacity"
          >
            TANZEEL.DEV
          </Link>
          <Link
            href="/#projects"
            className="text-white/50 hover:text-[#F6E8F8] transition-colors text-sm font-medium flex items-center gap-2"
          >
            ← All Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,232,248,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(246,232,248,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at 60% 0%, ${project.cardAccent}15 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Meta row */}
          <div className="flex flex-wrap gap-3 mb-7">
            <span className="px-3 py-1 rounded-full border border-[#F6E8F8]/20 bg-[#F6E8F8]/5 text-[#F6E8F8] text-xs font-mono">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-xs font-mono">
              {project.client}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-xs font-mono">
              {project.period}
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-[#F6E8F8]">{project.title}</span>
          </h1>
          <p className="text-white/50 text-xl mb-8">{project.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#F6E8F8] text-black font-bold text-sm tracking-wide hover:bg-white hover:scale-105 transition-all duration-300"
              >
                View Live Site ↗
              </a>
            )}
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-[#F6E8F8]/60 hover:text-[#F6E8F8] transition-all duration-300"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      {/* Project image */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div
          className={`relative w-full h-64 md:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br ${project.cardGradient} border border-[#F6E8F8]/10`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <p
                className="font-bold text-7xl font-mono opacity-10"
                style={{ color: project.cardAccent }}
              >
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </p>
              <div
                className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-15"
                style={{ backgroundColor: project.cardAccent }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-[#F6E8F8]/10 bg-[#F6E8F8]/[0.02] text-center"
            >
              <p className="text-4xl font-bold text-[#F6E8F8] mb-1 heading-glow">
                <CountUp value={m.value} />
              </p>
              <p className="text-white/40 text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — narrative */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-4">
                OVERVIEW
              </p>
              <p className="text-white/65 text-lg leading-relaxed">{project.overview}</p>
            </div>

            {/* Problem */}
            <div>
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-4">
                THE PROBLEM
              </p>
              <p className="text-white/65 text-base leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-4">
                THE SOLUTION
              </p>
              <p className="text-white/65 text-base leading-relaxed">{project.solution}</p>
            </div>

            {/* Features */}
            <div>
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.25em] mb-5">
                KEY FEATURES
              </p>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                    <span className="text-[#F6E8F8]/70 flex-shrink-0 mt-0.5">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">
            {/* Project info */}
            <div className="p-6 rounded-2xl border border-[#F6E8F8]/10 bg-[#F6E8F8]/[0.02] space-y-5">
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.2em]">
                PROJECT INFO
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/35 text-xs mb-1">Role</p>
                  <p className="text-white text-sm font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-white/35 text-xs mb-1">Client</p>
                  <p className="text-white text-sm font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-white/35 text-xs mb-1">Year</p>
                  <p className="text-white text-sm font-medium">{project.period}</p>
                </div>
                {project.liveUrl && (
                  <div>
                    <p className="text-white/35 text-xs mb-1">Live Site</p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F6E8F8] text-sm font-medium hover:underline break-all"
                    >
                      {project.liveUrl.replace("https://", "")}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Tech stack */}
            <div className="p-6 rounded-2xl border border-[#F6E8F8]/10 bg-[#F6E8F8]/[0.02]">
              <p className="text-[#F6E8F8] text-xs font-mono font-semibold tracking-[0.2em] mb-4">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/55 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next project nav */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-white/8 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs font-mono mb-1">NEXT PROJECT</p>
            {(() => {
              const idx = projects.findIndex((p) => p.slug === slug);
              const next = projects[(idx + 1) % projects.length];
              return (
                <Link
                  href={`/projects/${next.slug}`}
                  className="text-white text-xl font-bold hover:text-[#F6E8F8] transition-colors"
                >
                  {next.title} →
                </Link>
              );
            })()}
          </div>
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-full border border-white/15 text-white/50 text-sm font-medium hover:border-[#F6E8F8]/40 hover:text-[#F6E8F8] transition-all duration-300"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <p className="text-[#F6E8F8] font-mono font-bold text-sm tracking-wider">
            TANZEEL.DEV
          </p>
          <p className="text-white/25 text-sm">
            © 2025 Muhammad Tanzeel ur Rehman
          </p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { categories, projects, smallProjects, type Project } from "@/content/projects";
import ProjectArt from "./Art";
import { ArrowIcon, GitHubIcon } from "./Icons";

function Buttons({ p }: { p: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {p.repo && (
        <a
          href={p.repo}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full border-2 border-blue px-4 py-2 text-sm font-extrabold text-blue-deep hover:bg-blue hover:text-paper"
        >
          <GitHubIcon className="h-4 w-4" /> Code<span className="sr-only"> for {p.title}</span>
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-blue px-4 py-2 text-sm font-extrabold text-paper hover:bg-blue-deep"
        >
          Live demo<span className="sr-only"> of {p.title}</span> <ArrowIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech used">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-bold text-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="grid overflow-hidden rounded-card border-2 border-ink bg-paper text-ink md:col-span-2 md:grid-cols-2">
      <ProjectArt art={p.art} className="h-56 w-full bg-paper md:h-full md:border-r-2 md:border-ink" />
      <div className="flex flex-col p-6 md:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-deep">{p.tag}</p>
        <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-blue-deep md:text-5xl">{p.title}</h3>
        <p className="mt-4 text-[15px] leading-relaxed">{p.description}</p>
        {p.metrics && (
          <dl className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-blue p-3 text-paper">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-3xl font-black text-cream">{m.value}</dd>
                <dd className="text-[10px] font-extrabold uppercase tracking-wider" aria-hidden>
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <Chips items={p.tech} />
        <Buttons p={p} />
      </div>
    </article>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border-2 border-ink bg-paper text-ink">
      <ProjectArt art={p.art} className="h-44 w-full border-b-2 border-ink bg-paper" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-deep">{p.tag}</p>
        <h3 className="mt-2 font-display text-3xl font-black uppercase leading-none text-blue-deep">{p.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed">{p.description}</p>
        <Chips items={p.tech} />
        <Buttons p={p} />
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 bg-blue text-paper">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-24">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.25em]">My Work</p>
        <h2 id="work-title" className="mt-3 text-center font-display text-5xl font-black uppercase leading-poster text-cream md:text-8xl">
          Real Projects
          <span className="block text-3xl md:text-5xl">Built with purpose</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center">
          Risk engines, market tools, ML and full-stack apps. Each one is open source, and most have a live demo.
        </p>

        <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border-2 border-cream px-4 py-1.5 text-sm font-extrabold transition-colors ${
                filter === c ? "bg-cream text-ink" : "text-paper hover:bg-blue-deep"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((p) => (p.featured ? <FeaturedCard key={p.slug} p={p} /> : <Card key={p.slug} p={p} />))}
        </div>

        <h3 className="mt-14 font-display text-3xl font-black uppercase text-cream">More on GitHub</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {smallProjects.map((s) => (
            <li key={s.title}>
              <a
                href={s.repo}
                target="_blank"
                rel="noopener"
                className="group flex h-full items-start justify-between gap-3 rounded-2xl border-2 border-cream p-4 hover:bg-blue-deep"
              >
                <span>
                  <span className="block font-extrabold">{s.title}</span>
                  <span className="mt-1 block text-sm">{s.text}</span>
                </span>
                <ArrowIcon className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-card bg-cream p-6 text-ink md:flex-row md:p-8">
          <p className="font-display text-2xl font-extrabold uppercase leading-tight text-blue-deep md:text-3xl">
            Want the code behind any of these, or a walkthrough of the risk maths?
          </p>
          <a href="#contact" className="shrink-0 rounded-full bg-blue px-6 py-3 font-extrabold uppercase tracking-wider text-paper hover:bg-blue-deep">
            Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}

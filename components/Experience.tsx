import { education, experience, extras, impact } from "@/content/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="scroll-mt-16 bg-cream text-ink">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-24">
        <h2 id="exp-title" className="font-display text-6xl font-black uppercase leading-poster text-blue md:text-9xl">
          Experience
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative space-y-6 border-l-2 border-blue pl-6">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span
                  className={`absolute -left-[33px] top-6 h-4 w-4 rounded-full border-2 border-blue ${e.current ? "bg-blue" : "bg-cream"}`}
                  aria-hidden
                />
                <Reveal>
                  <article className="rounded-card border-2 border-blue bg-paper p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-deep">{e.dates}</p>
                    <h3 className="mt-2 font-display text-3xl font-black uppercase leading-none text-blue-deep">{e.role}</h3>
                    <p className="mt-1 font-bold">
                      {e.org} · {e.team}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.08}>
            <aside aria-labelledby="impact-title" className="rounded-card bg-blue p-6 text-paper">
              <h3 id="impact-title" className="font-display text-3xl font-black uppercase text-cream">
                Automation Impact
              </h3>
              <p className="mt-1 text-sm">Time to produce, indexed to 100 before automation.</p>
              <div className="mt-6 space-y-6">
                {impact.map((m) => (
                  <figure key={m.label}>
                    <figcaption className="text-sm font-extrabold uppercase tracking-wider">{m.label}</figcaption>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="w-14 text-xs font-bold">Before</span>
                        <div className="h-5 flex-1 rounded-full bg-blue-deep">
                          <div className="h-5 rounded-full bg-paper/80" style={{ width: `${m.before}%` }} />
                        </div>
                        <span className="w-8 text-right font-display text-xl font-black">{m.before}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-14 text-xs font-bold">After</span>
                        <div className="h-5 flex-1 rounded-full bg-blue-deep">
                          <div className="h-5 rounded-full bg-cream" style={{ width: `${m.after}%` }} />
                        </div>
                        <span className="w-8 text-right font-display text-xl font-black text-cream">{m.after}</span>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-black uppercase text-blue-deep">Education</h3>
            <ul className="mt-4 space-y-3">
              {education.map((ed) => (
                <li key={ed.title} className="rounded-2xl border-2 border-blue bg-cream-2 p-4">
                  <p className="font-extrabold">{ed.title}</p>
                  <p className="text-sm">
                    {ed.org} · {ed.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-3xl font-black uppercase text-blue-deep">Beyond work</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {extras.map((x) => (
                <li key={x} className="rounded-full bg-blue px-4 py-2 text-sm font-bold text-paper">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

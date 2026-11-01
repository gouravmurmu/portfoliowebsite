import { about } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section aria-labelledby="about-title" className="bg-blue text-paper">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.25fr_1fr] md:py-24">
        <Reveal>
          <h2 id="about-title" className="font-display text-6xl font-black uppercase leading-poster text-cream md:text-8xl">
            Hi, I&apos;m Gourav
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed md:text-lg">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-card border-2 border-ink bg-cream p-5 text-ink">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-deep">
              <span className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-[#22A05A] motion-reduce:animate-none" aria-hidden />
              Currently
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight md:text-3xl">
              {about.current.title}
            </p>
            <p className="mt-1 text-sm font-semibold">
              {about.current.org} · {about.current.detail}
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="border-l-2 border-cream pl-3">
                <dt className="sr-only">
                  {s.label} {s.sub}
                </dt>
                <dd className="font-display text-5xl font-black leading-none text-cream">{s.value}</dd>
                <dd className="mt-1 text-[11px] font-extrabold uppercase leading-snug tracking-wider" aria-hidden>
                  {s.label}
                  <br />
                  {s.sub}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Toolkit</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.toolkit.map((t) => (
                <li key={t} className="rounded-full border-2 border-cream px-3 py-1 text-sm font-bold">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm self-start md:mt-4">
          <div className="relative rotate-1 rounded-card border-2 border-cream bg-cream p-3">
            <picture>
              <source srcSet="/images/gourav.webp 1x, /images/gourav@2x.webp 2x" type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gourav.webp"
                alt="Portrait of Gourav Murmu"
                width={480}
                height={614}
                loading="lazy"
                className="w-full rounded-[14px]"
              />
            </picture>
            <div className="pointer-events-none absolute inset-3 rounded-[14px] bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
            <p className="absolute bottom-6 right-6 -rotate-6 font-hand text-4xl text-cream" aria-hidden>
              get to know me
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

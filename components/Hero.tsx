import { site } from "@/content/site";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-site px-4 pt-6 sm:px-6 md:pt-10">
        <div className="flex flex-col justify-between gap-2 text-blue-deep sm:flex-row sm:items-start">
          <p className="font-display text-xl font-extrabold uppercase leading-none tracking-wide sm:text-2xl">
            Risk Analyst
            <br />& Builder
          </p>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] sm:text-right">
            JPMorganChase · EMEA
            <br />
            Market & Credit Risk
          </p>
        </div>

        <div className="relative flex justify-center pt-[30vw] sm:pt-[min(16vw,220px)]">
          <h1 className="relative z-10 select-none text-center font-display text-[27vw] font-black sm:text-[23vw] uppercase leading-poster tracking-tight text-blue xl:text-[17rem]">
            Gourav
            <span className="sr-only"> Murmu, {site.role}</span>
          </h1>
          <picture>
            <source srcSet="/images/gourav-cutout.webp 1x, /images/gourav-cutout@2x.webp 2x" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gourav-cutout.webp"
              alt="Gourav Murmu in a navy suit and light-blue tie"
              width={520}
              height={665}
              fetchPriority="high"
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[44vw] max-w-[380px] -translate-x-1/2 sm:w-[28vw]"
            />
          </picture>
        </div>
      </div>

      <div className="relative border-t-2 border-ink bg-cream-2">
        <div className="mx-auto flex max-w-site flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-base font-semibold text-ink md:text-lg">{site.pitch}</p>
          <Socials />
        </div>
      </div>
    </section>
  );
}

import { site } from "@/content/site";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-site items-end gap-6 px-4 pt-8 sm:px-6 md:grid-cols-[1fr_1.15fr] md:gap-4 md:pt-12">
        <div className="pb-2 md:order-2 md:pb-14 md:pl-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-deep">{site.employerLine}</p>
          <h1 className="mt-4 font-display font-black uppercase leading-poster tracking-tight text-blue">
            <span className="block text-[26vw] md:text-[11.5vw] xl:text-[9.5rem]">Gourav</span>
            <span className="block text-[26vw] text-blue-deep md:text-[11.5vw] xl:text-[9.5rem]">Murmu</span>
          </h1>
          <p className="mt-5 inline-block rounded-full bg-blue px-5 py-2 font-display text-lg font-extrabold uppercase tracking-wider text-paper md:text-xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-md text-base font-semibold text-ink md:text-lg">{site.pitch}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-blue-deep px-6 py-3 font-extrabold uppercase tracking-wider text-paper hover:bg-ink"
            >
              See my work
            </a>
            <Socials />
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[460px] justify-center self-end md:order-1 md:max-w-none">
          <div
            className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-t-full bg-blue"
            aria-hidden
          />
          <picture>
            <source srcSet="/images/gourav-cutout.webp 1x, /images/gourav-cutout@2x.webp 2x" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gourav-cutout.webp"
              alt="Gourav Murmu in a navy suit and light-blue tie"
              width={520}
              height={665}
              fetchPriority="high"
              className="relative block w-[86%] max-w-[440px] md:w-full"
              style={{ marginInline: "auto" }}
            />
          </picture>
        </div>
      </div>
      <div className="h-0.5 bg-ink" aria-hidden />
    </section>
  );
}

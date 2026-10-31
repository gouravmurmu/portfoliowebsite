"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { CheckIcon, CopyIcon, FileIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const btn =
    "inline-flex items-center gap-2 rounded-full border-2 border-cream px-5 py-2.5 font-extrabold text-paper hover:bg-cream hover:text-ink";

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-blue text-paper">
      <div className="mx-auto max-w-site px-4 py-20 text-center sm:px-6 md:py-28">
        <h2 id="contact-title" className="font-display text-6xl font-black uppercase leading-poster text-cream md:text-9xl">
          Let&apos;s work
          <br />
          together
        </h2>
        <p className="mx-auto mt-6 max-w-lg">
          Hiring for risk, quant or data roles, or curious about one of my projects? Send me a note.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 rounded-3xl bg-cream sm:rounded-full p-2 pl-6 text-ink sm:flex-row sm:justify-between">
          <a href={`mailto:${site.email}`} className="select-all break-all font-display text-2xl font-extrabold md:text-3xl">
            {site.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue px-5 py-2.5 font-extrabold text-paper hover:bg-blue-deep"
          >
            {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={site.links.github} target="_blank" rel="noopener" className={btn}>
            <GitHubIcon className="h-5 w-5" /> GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener" className={btn}>
            <LinkedInIcon className="h-5 w-5" /> LinkedIn
          </a>
          <a href={site.links.resume} target="_blank" rel="noopener" className={btn}>
            <FileIcon className="h-5 w-5" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

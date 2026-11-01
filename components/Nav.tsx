"use client";

import { useState } from "react";
import { nav, site } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-site items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-1 font-display text-3xl font-black text-blue-deep" aria-label="Gourav Murmu, back to top">
          GM
          <span className="inline-block h-3 w-3 rounded-[4px] bg-blue" aria-hidden />
        </a>
        <button
          type="button"
          className="rounded-full border-2 border-blue px-4 py-1.5 text-sm font-bold text-blue-deep md:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul
          id="nav-menu"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b-2 border-ink bg-cream px-4 pb-4 pt-2 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-extrabold uppercase tracking-wider text-blue-deep hover:text-ink md:py-0"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.links.resume}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block rounded-full bg-blue px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-paper hover:bg-blue-deep md:mt-0"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

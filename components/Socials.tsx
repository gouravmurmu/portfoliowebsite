import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Socials({ tone = "light" }: { tone?: "light" | "dark" }) {
  const cls =
    tone === "light"
      ? "border-blue bg-paper text-blue-deep hover:bg-blue hover:text-paper"
      : "border-cream bg-blue text-paper hover:bg-cream hover:text-ink";
  const items = [
    { href: site.links.github, label: "GitHub", Icon: GitHubIcon },
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
  ];
  return (
    <ul className="flex gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener"
            aria-label={label}
            className={`grid h-11 w-11 place-items-center rounded-xl border-2 transition-colors ${cls}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

type P = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function GitHubIcon({ className }: P) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.03c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: P) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CopyIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function CheckIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function FileIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function FocusIcon({ name, className }: P & { name: string }) {
  switch (name) {
    case "chart":
      return (
        <svg {...base} className={className}>
          <path d="M3 3v18h18" />
          <path d="m7 15 4-4 3 3 5-6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base} className={className}>
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "pipe":
      return (
        <svg {...base} className={className}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "brain":
      return (
        <svg {...base} className={className}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="m7.5 7.5 3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" />
        </svg>
      );
    default:
      return (
        <svg {...base} className={className}>
          <rect x="4" y="8" width="16" height="12" rx="3" />
          <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
        </svg>
      );
  }
}

// lucide-react (v1) n'inclut plus les icônes de marques (Facebook, Pinterest) :
// icônes SVG minimales en inline plutôt que d'ajouter une dépendance dédiée.
function FacebookIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" />
    </svg>
  );
}

function PinterestIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.17-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.056-4.869-4.992-4.869-3.402 0-5.399 2.554-5.399 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.398.164-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.749-1.372l-.748 2.845c-.271 1.043-1.004 2.352-1.494 3.146 1.126.345 2.317.535 3.559.535 6.621 0 11.985-5.367 11.985-11.987C23.97 5.367 18.607 0 11.985 0z" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function XIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsappIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.35-.5.05-.99.24-3.32-.69-2.83-1.13-4.6-4.02-4.74-4.2-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.26.54-.33.71-.33h.53c.17 0 .4-.03.61.47.24.57.79 1.98.86 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.15.48.13.65-.08.17-.2.73-.85.93-1.14.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.21.55.33.07.12.07.71-.17 1.39z" />
    </svg>
  );
}

function EmailIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function ShareButtons({
  url,
  title,
  image,
}: {
  url: string;
  title: string;
  image: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: FacebookIcon,
    },
    {
      label: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(image)}&description=${encodedTitle}`,
      Icon: PinterestIcon,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedinIcon,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XIcon,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      Icon: WhatsappIcon,
    },
    {
      label: "email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      Icon: EmailIcon,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-stone-500">Partager :</span>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "email" ? undefined : "_blank"}
          rel={label === "email" ? undefined : "noopener noreferrer"}
          aria-label={label === "email" ? "Partager par email" : `Partager sur ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition hover:border-gold-600 hover:text-gold-700"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

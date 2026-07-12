import Image from "next/image";

export default function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Guido"
      width={640}
      height={210}
      priority
      className={`w-auto ${className}`}
    />
  );
}

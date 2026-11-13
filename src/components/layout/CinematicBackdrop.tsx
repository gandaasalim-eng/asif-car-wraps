"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function CinematicBackdrop() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <Image
        src="/images/backgrounds/cinematic.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(255,0,110,0.16),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(0,123,255,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </div>
  );
}

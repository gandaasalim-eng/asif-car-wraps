import Image from "next/image";
import type { NavItem } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  crumbs: NavItem[];
}) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-14 pt-32 sm:px-8 md:pt-36">
        <Breadcrumbs items={crumbs} />
        <p className="font-grotesk text-[11px] font-semibold uppercase tracking-[0.32em] text-pink">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow ? (
        <p className="mb-4 font-grotesk text-[11px] font-semibold uppercase tracking-[0.32em] text-pink">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl md:text-6xl">
        {title}
      </Tag>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

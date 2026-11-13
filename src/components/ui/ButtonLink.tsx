import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-pink text-ink shadow-[0_0_0_rgba(255,0,110,0)] hover:bg-[#ff3d8e] hover:shadow-[0_0_32px_rgba(255,0,110,0.35)]",
  blue: "bg-blue text-ink hover:bg-[#2b92ff] hover:shadow-[0_0_32px_rgba(0,123,255,0.35)]",
  ghost:
    "border border-white/25 bg-ink/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-center font-grotesk text-[11px] font-semibold uppercase tracking-[0.22em] transition duration-300",
    variants[variant],
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

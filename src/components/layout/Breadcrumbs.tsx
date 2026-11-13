import Link from "next/link";
import type { NavItem } from "@/types";

export function Breadcrumbs({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-grotesk text-[11px] uppercase tracking-[0.18em] text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-white">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              )}
              {last ? null : (
                <span aria-hidden className="text-white/30">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

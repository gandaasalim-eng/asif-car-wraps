"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryFilters, galleryItems, type GalleryFilter } from "@/data/gallery";
import { cn } from "@/lib/utils";

const aspects = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export function GalleryExplorer() {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const items = galleryItems.filter((item) => filter === "all" || item.category === filter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? current : (current + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + items.length) % items.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  const current = active === null ? null : items[active];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Gallery categories">
        {galleryFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => {
              setFilter(item.id);
              setActive(null);
            }}
            className={cn(
              "min-h-11 border px-4 font-grotesk text-[11px] uppercase tracking-[0.16em] transition",
              filter === item.id ? "border-pink bg-pink text-ink" : "border-white/15 text-white/75 hover:border-white",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <figure key={`${item.src}-${item.title}`} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full overflow-hidden border border-white/10 text-left"
            >
              <span className={cn("relative block", aspects[item.aspect])}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <span className="absolute left-3 top-3 border border-lime/40 bg-ink/70 px-2 py-1 font-grotesk text-[10px] uppercase tracking-[0.16em] text-lime">
                Sample
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="block font-display text-2xl uppercase">{item.title}</span>
              </span>
            </button>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image preview"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchX.current === null || active === null) return;
          const delta = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
          if (delta > 50) setActive((active - 1 + items.length) % items.length);
          if (delta < -50) setActive((active + 1) % items.length);
          touchX.current = null;
        }}
      >
        {current ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <p className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-muted">
                {active! + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="flex h-11 w-11 items-center justify-center border border-white/20"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative mx-auto min-h-0 w-full flex-1">
              <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="100vw" />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => setActive((active! - 1 + items.length) % items.length)}
                className="flex h-11 w-11 items-center justify-center border border-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="max-w-xl text-center text-sm text-muted">{current.caption}</p>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setActive((active! + 1) % items.length)}
                className="flex h-11 w-11 items-center justify-center border border-white/20"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

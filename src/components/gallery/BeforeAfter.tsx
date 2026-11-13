"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({
  src = "/images/services/wrapping.jpg",
  alt = "Sample photograph of a blue sports coupe used to demonstrate the comparison slider",
}: {
  src?: string;
  alt?: string;
}) {
  const [value, setValue] = useState(56);

  return (
    <figure className="overflow-hidden border border-white/10 bg-surface">
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" />
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover grayscale contrast-75"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${value}%` }}>
          <div className="h-full w-px bg-white" />
        </div>
        <div className="pointer-events-none absolute left-4 top-4 bg-ink/75 px-2 py-1 font-grotesk text-[10px] uppercase tracking-[0.18em]">
          Flat grade
        </div>
        <div className="pointer-events-none absolute right-4 top-4 bg-ink/75 px-2 py-1 font-grotesk text-[10px] uppercase tracking-[0.18em]">
          Full color
        </div>
        <label className="absolute inset-x-0 bottom-4 px-6">
          <span className="sr-only">Drag to compare the flat grade and the full-color sample</span>
          <input
            className="compare w-full"
            type="range"
            min={5}
            max={95}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </label>
      </div>
      <figcaption className="space-y-2 px-5 py-4 text-sm leading-relaxed text-muted">
        <p className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-lime">Illustrative comparison</p>
        <p>
          One sample photograph, shown flat and in full color, so the slider can be tried. This is not a before-and-after of a customer vehicle.
        </p>
      </figcaption>
    </figure>
  );
}

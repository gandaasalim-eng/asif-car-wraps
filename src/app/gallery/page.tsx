import { PageHero } from "@/components/layout/PageHero";
import { BeforeAfter } from "@/components/gallery/BeforeAfter";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Gallery",
  "Browse sample automotive photography for wraps, PPF, custom finishes, and styling. These images are not documented Asif Car Wraps projects.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference imagery"
        title="Gallery"
        description="Filter the grid, open a lightbox, and try the comparison slider. Every photo here is sample imagery until real studio work is supplied."
        image="/images/hero/slide-3.jpg"
        imageAlt="Sample photograph of a sports car at night"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="mb-8 max-w-3xl border border-lime/30 bg-lime/10 p-4 text-sm leading-relaxed text-white">
            Sample photography only. These pictures were not taken of Asif Car Wraps installations. Verified project photos will replace them when the owner provides them.
          </p>
          <GalleryExplorer />
          <div className="mt-16">
            <h2 className="mb-6 font-display text-4xl uppercase">Comparison preview</h2>
            <BeforeAfter />
          </div>
        </div>
      </section>
    </>
  );
}

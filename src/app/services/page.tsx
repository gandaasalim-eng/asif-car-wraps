import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Services",
  "Car wrapping, paint protection film, custom wraps, and styling consultations from Asif Car Wraps. Each service links to a detailed page.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services"
        description="Four ways to change or protect the car. Open a service to see finishes, process, and how to ask for a quotation."
        image="/images/backgrounds/cinematic.jpg"
        imageAlt="Sample photograph of a Porsche on an open road"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <section className="bg-ink">
        {services.map((service, index) => (
          <article key={service.slug} className="border-b border-white/10">
            <div className={`mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative min-h-[320px] overflow-hidden">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-pink">0{index + 1}</p>
                <h2 className="mt-3 font-display text-5xl uppercase">{service.title}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{service.cardText}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center font-grotesk text-[11px] uppercase tracking-[0.2em] underline decoration-pink underline-offset-4"
                >
                  Explore Service
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

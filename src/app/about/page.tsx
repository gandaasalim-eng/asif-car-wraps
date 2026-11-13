import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = pageMetadata(
  "About Us",
  "Asif Car Wraps focuses on car wrapping, paint protection film, and styling consultations planned around each vehicle.",
  "/about",
);

const principles = [
  ["Craft before spectacle", "A finish is only as good as the preparation under it. Edges and panel gaps are part of the work, not a detail to rush."],
  ["Protection with the style", "Color and film are chosen together. A wrap that ignores how the car is used, or a PPF plan that ignores the paint, is an incomplete brief."],
  ["A straight consultation", "If a finish is out of stock, or a panel is not ready, that is said before a date is treated as confirmed."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title="About Asif Car Wraps"
        description="A focused practice for drivers who want the car to look considered, and the paint to be treated with the same care."
        image="/images/gallery/workshop.jpg"
        imageAlt="Sample photograph of a vehicle in a studio bay"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Style, protection, and a clear brief.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Asif Car Wraps works on car wrapping, paint protection film, custom finishes, and exterior styling consultations. The work starts with the vehicle you have, not with a story about how long a shop has been open.
              </p>
              <p>
                Vinyl is for appearance. Paint protection film is for helping the paint survive daily use. They are different materials, and they are only combined when that combination actually suits the car.
              </p>
              <p>
                This site does not invent awards, a fleet count, or a warranty that has not been put in writing for your job. What you can expect is a direct conversation, a defined scope, and installation that respects the paint underneath.
              </p>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden border border-white/10">
            <Image
              src="/images/about/detail.jpg"
              alt="Sample photograph of hands working on a vehicle"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display text-4xl uppercase">How a consultation runs</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "You send the car", "Make, model, a few photos, and the change you want. A roof wrap and a full color change are different jobs."],
              ["02", "The limits are named", "Paint condition, film stock, and panel shape decide what is realistic. Unavailable options are dropped, not implied."],
              ["03", "The scope is agreed", "Coverage, finish, and timing are confirmed on WhatsApp or by phone before work is booked."],
            ].map(([number, title, text]) => (
              <li key={number} className="border border-white/10 bg-ink p-6">
                <p className="font-display text-pink">{number}</p>
                <h3 className="mt-3 font-grotesk text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-ink py-20">
        <div className="mx-auto grid max-w-[1240px] gap-4 px-5 sm:px-8 md:grid-cols-3">
          {principles.map(([title, text]) => (
            <article key={title} className="border-t border-pink pt-6">
              <h2 className="font-grotesk text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1240px] px-5 sm:px-8">
          <ButtonLink href={whatsappHref(whatsappMessages.book)} external>
            Start on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

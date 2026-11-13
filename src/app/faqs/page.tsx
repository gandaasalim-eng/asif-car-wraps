import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faqCategories } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = pageMetadata(
  "FAQs",
  "Answers about car wrapping, paint protection film, custom finishes, quotations, booking, and maintenance from Asif Car Wraps.",
  "/faqs",
);

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Answers"
        title="Frequently Asked Questions"
        description="Durability and results depend on materials, paint condition, installation, maintenance, and the environment the car lives in."
        image="/images/gallery/silver.jpg"
        imageAlt="Sample photograph of a silver performance car"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs", href: "/faqs" },
        ]}
      />
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[860px] space-y-14 px-5 sm:px-8">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="mb-4 font-display text-3xl uppercase">{category.title}</h2>
              <Accordion items={category.items} />
            </div>
          ))}
          <ButtonLink href={whatsappHref(whatsappMessages.quote)} external>
            Ask for a quotation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

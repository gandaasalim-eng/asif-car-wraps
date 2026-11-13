import { PageHero } from "@/components/layout/PageHero";
import { business } from "@/config/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "Draft terms for the Asif Car Wraps website. Quotations, durability, and offers are confirmed directly and are not guaranteed by this site.",
  "/terms-and-conditions",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Draft"
        title="Terms & Conditions"
        description="Owner review is required before these terms are treated as final."
        image="/images/gallery/bmw.jpg"
        imageAlt="Sample photograph of a BMW fascia"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />
      <article className="bg-ink py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-sm leading-relaxed text-muted sm:px-8">
          <p className="border border-pink/40 bg-pink/10 p-4 text-white">
            Draft for owner review. This is not legal advice and should be checked before publication. Last drafted 12 November 2026.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Using the website</h2>
          <p>
            The pages describe services offered by {business.name}: car wrapping, paint protection film, custom wrapping, and styling consultations. Browsing the site does not create a contract.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Quotations</h2>
          <p>
            Prices on a message or a form reply are estimates until the vehicle, the coverage, the material, and the paint condition are confirmed. A WhatsApp message started by the form is an enquiry, not a confirmed booking.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Results and durability</h2>
          <p>
            Finish, durability, and the level of protection depend on the material, the condition of the paint, the installation, how the car is maintained, and the environment it lives in. The site does not guarantee a minimum lifespan or complete scratch protection.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Availability</h2>
          <p>
            Finishes and any modification are subject to consultation and stock. Photographs do not mean a specific part, color, or package is available.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Offers</h2>
          <p>
            A promotion applies only when it is confirmed directly with you. The website does not publish an offer as active unless that status has been confirmed, and it does not invent an expiry date.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Images</h2>
          <p>
            Unless a caption says otherwise, automotive photographs on this website are samples for presentation. They are not a portfolio of completed shop work.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Site content</h2>
          <p>
            Text and layout on this website belong to {business.name} unless a photograph is credited as sample stock imagery. Do not copy the site design and present it as another business.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Liability</h2>
          <p>
            Information is provided to explain the services. It is not a promise that every vehicle can take every finish. Decisions about paint, film, and modifications should be confirmed before work starts.
          </p>
        </div>
      </article>
    </>
  );
}

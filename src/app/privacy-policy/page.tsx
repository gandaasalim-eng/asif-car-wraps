import { PageHero } from "@/components/layout/PageHero";
import { business } from "@/config/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Draft privacy notes for the Asif Car Wraps website. Inquiries open WhatsApp and are not stored in a site database.",
  "/privacy-policy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Draft"
        title="Privacy Policy"
        description="Owner review is required before this page is treated as a final legal policy."
        image="/images/gallery/audi.jpg"
        imageAlt="Sample photograph of a premium sedan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <article className="bg-ink py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-sm leading-relaxed text-muted sm:px-8">
          <p className="border border-pink/40 bg-pink/10 p-4 text-white">
            Draft for owner review. This is not legal advice and should be checked before publication. Last drafted 12 November 2026.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Who this describes</h2>
          <p>
            This website is published for {business.name}. The phone number published here is {business.internationalPhone}. No street address or email address is published until one is confirmed.
          </p>
          <h2 className="font-grotesk text-2xl text-white">What the site collects</h2>
          <p>
            The inquiry form runs in your browser. When you submit it, the site opens WhatsApp with the details you typed. It does not send those details to an email inbox, and it does not save them in a database operated by this website.
          </p>
          <h2 className="font-grotesk text-2xl text-white">WhatsApp and phone calls</h2>
          <p>
            If you continue to WhatsApp or call the number, that conversation is handled by your phone provider and by WhatsApp. Their own terms and privacy notices apply to messages, call logs, and anything you choose to send, including photos of a vehicle.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Hosting logs</h2>
          <p>
            The host that serves this website may keep standard technical logs, such as IP address, browser type, and the page requested, for security and operations. This site does not add an advertising tracker or a marketing cookie banner because no advertising cookies are installed by the application itself.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Images</h2>
          <p>
            Sample automotive photographs are used for presentation. They are not customer records. When real project photos are added, they should be used only with permission from the vehicle owner.
          </p>
          <h2 className="font-grotesk text-2xl text-white">Contact about this draft</h2>
          <p>
            Questions about this page can be sent on WhatsApp at {business.displayPhone} until a dedicated privacy contact is confirmed.
          </p>
        </div>
      </article>
    </>
  );
}

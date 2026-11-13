import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { business } from "@/config/business";
import { pageMetadata } from "@/lib/seo";
import { telHref, whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = pageMetadata(
  "Contact",
  "Contact Asif Car Wraps on WhatsApp or by phone for car wrapping, PPF, and styling quotations. The inquiry form opens a WhatsApp message.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Enquire"
        title="Contact"
        description="Call, message on WhatsApp, or send the form. The form prepares a WhatsApp chat. It does not email the studio."
        image="/images/hero/slide-4.jpg"
        imageAlt="Sample photograph of a dark performance car"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <article className="border border-white/10 bg-surface p-6">
              <h2 className="font-display text-3xl uppercase">WhatsApp</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The fastest way to share photos of the vehicle and ask what is currently available.
              </p>
              <a
                href={whatsappHref(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center bg-[#25D366] px-5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                Chat With Us
              </a>
            </article>
            <article className="border border-white/10 bg-surface p-6">
              <h2 className="font-display text-3xl uppercase">Call</h2>
              <p className="mt-3 text-2xl text-white">{business.internationalPhone}</p>
              <p className="mt-1 text-sm text-muted">{business.displayPhone}</p>
              <a
                href={telHref()}
                className="mt-5 inline-flex min-h-11 items-center bg-blue px-5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                Call Now
              </a>
            </article>
            <p className="text-sm leading-relaxed text-muted">
              A studio address, opening hours, and a map will be added only after those details are confirmed. Until then, appointments are arranged by phone or WhatsApp.
            </p>
          </div>
          <div className="border border-white/10 bg-panel p-6 sm:p-8">
            <h2 className="font-display text-3xl uppercase">Inquiry</h2>
            <p className="mt-3 mb-6 text-sm text-muted">
              Tell us the vehicle and the service. You will be taken to WhatsApp with the message filled in.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

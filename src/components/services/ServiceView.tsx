import Image from "next/image";
import { faqsByQuestion } from "@/data/faqs";
import type { ServiceContent } from "@/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappHref } from "@/lib/whatsapp";

export function ServiceView({ service }: { service: ServiceContent }) {
  const faqs = faqsByQuestion(service.faqQuestions);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">{service.introTitle}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display text-4xl uppercase">Why it matters</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="border border-white/10 bg-ink p-6">
                <p className="font-display text-sm tracking-[0.2em] text-pink">0{index + 1}</p>
                <h3 className="mt-3 font-grotesk text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">{service.optionsTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted">{service.optionsIntro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.options.map((item) => (
              <article key={item.title} className="border border-white/10 bg-surface p-6">
                <div className="mb-5 h-px w-10 bg-pink" />
                <h3 className="font-display text-2xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-panel py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase">{service.detailTitle}</h2>
            <div className="mt-6 space-y-4 text-muted">
              {service.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ol className="space-y-4">
            {service.steps.map((step, index) => (
              <li key={step.title} className="border border-white/10 bg-ink p-5">
                <p className="font-display text-sm tracking-[0.2em] text-blue">0{index + 1}</p>
                <h3 className="mt-2 font-grotesk text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display text-4xl uppercase">{service.careTitle}</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.care.map((item) => (
              <li key={item} className="border-l border-pink pl-4 text-sm leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8">
          <h2 className="mb-8 font-display text-4xl uppercase">Questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>
      <section className="bg-ink py-20">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 border border-white/10 bg-surface px-6 py-10 sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl uppercase">Request a quotation</h2>
            <p className="mt-3 max-w-xl text-muted">
              Send the vehicle and the finish you have in mind. Availability, timing, and price are confirmed in the conversation.
            </p>
          </div>
          <ButtonLink href={whatsappHref(service.whatsappMessage)} external>
            WhatsApp this service
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

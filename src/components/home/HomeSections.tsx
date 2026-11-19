
import Link from "next/link";
import Image from "next/image";
import {
  Crosshair,
  Eye,
  Layers,
  MessageCircle,
  Shield,
  Sparkles,
} from "lucide-react";

import { featuredFaqQuestions, faqsByQuestion } from "@/data/faqs";
import { services } from "@/data/services";
import { BeforeAfter } from "@/components/gallery/BeforeAfter";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  telHref,
  whatsappHref,
  whatsappMessages,
} from "@/lib/whatsapp";

const reasons = [
  {
    icon: Crosshair,
    title: "Precision-Focused Work",
    text: "Careful attention to edges, seams, and panel details.",
  },
  {
    icon: Layers,
    title: "Premium Finish Options",
    text: "Explore gloss, matte, satin, and custom finishes.",
  },
  {
    icon: Sparkles,
    title: "Personalized Styling",
    text: "Automotive styling designed around your vision.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    text: "From preparation to final inspection.",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    text: "PPF solutions selected for your vehicle.",
  },
  {
    icon: MessageCircle,
    title: "Easy Consultation",
    text: "Contact us directly through WhatsApp or phone.",
  },
];

const steps = [
  ["01", "Consultation", "Discuss your vehicle and requirements."],
  ["02", "Design & Planning", "Choose materials and finishes."],
  ["03", "Application", "Careful preparation and installation."],
  ["04", "Final Inspection", "Review the result and aftercare."],
];

const marquee = [
  "Car Wrapping",
  "Paint Protection Film",
  "Custom Wrapping",
  "Car Modifications",
  "Premium Styling",
];

/* ==========================================
   CINEMATIC ULTRA PREMIUM WELCOME SECTION
========================================== */

export function Welcome() {
  return (
    <section
      id="welcome"
      className="relative isolate overflow-hidden bg-[#08090d] py-24 sm:py-28 lg:py-36"
    >
      {/* CINEMATIC AMBIENT LIGHTING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-pink/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* SECTION INTRO */}
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 lg:mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-pink" />

              <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.28em] text-pink sm:text-xs">
                The Art of Automotive Transformation
              </p>
            </div>

            <span className="font-grotesk text-[10px] uppercase tracking-[0.22em] text-white/40">
              Asif Car Wraps / Our Studio
            </span>
          </div>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT SIDE CONTENT */}
          <Reveal>
            <div className="relative z-10">
              <p className="mb-6 font-grotesk text-xs font-medium uppercase tracking-[0.25em] text-white/55">
                Welcome to Asif Car Wraps
              </p>

              {/* MAIN LUXURY HEADING */}
              <h2 className="font-display text-[clamp(3rem,5.8vw,6.5rem)] uppercase leading-[0.92] tracking-[-0.025em] text-white">
                MORE THAN
                <span className="block">A FINISH.</span>
                <span className="block text-pink">
                  A STATEMENT.
                </span>
              </h2>

              {/* PREMIUM SUBHEADING */}
              <div className="mt-8 flex items-start gap-4 sm:mt-10">
                <span className="mt-2 h-12 w-[2px] shrink-0 bg-pink" />

                <p className="max-w-lg font-grotesk text-lg font-medium leading-relaxed text-white sm:text-xl">
                  Exceptional Styling. Precision Protection.
                  Unmistakable Presence.
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                Your vehicle is an extension of your identity.
                At Asif Car Wraps, we bring together premium
                vinyl wrapping, paint protection film, and
                bespoke automotive styling to help you create
                something truly distinctive.
              </p>

              {/* SERVICE HIGHLIGHTS */}
              <div className="mt-10 grid max-w-xl gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div className="group">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-display text-xl text-pink">
                      01
                    </span>

                    <span className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-pink/40" />
                  </div>

                  <h3 className="font-grotesk text-sm font-semibold text-white">
                    Bespoke Styling
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/50">
                    Distinctive colors, premium textures,
                    and carefully considered finishes.
                  </p>
                </div>

                <div className="group">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-display text-xl text-pink">
                      02
                    </span>

                    <span className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-pink/40" />
                  </div>

                  <h3 className="font-grotesk text-sm font-semibold text-white">
                    Precision Protection
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/50">
                    Paint protection solutions designed
                    to help preserve your vehicle&apos;s finish.
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <ButtonLink href="/services">
                  Explore Our Services
                </ButtonLink>

                <Link
                  href="/about"
                  className="group inline-flex min-h-11 items-center gap-3 border-b border-white/30 font-grotesk text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition-all duration-300 hover:border-pink hover:text-pink"
                >
                  Discover Our Studio

                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Γåù
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* RIGHT CINEMATIC CAR IMAGE */}
          <Reveal delay={0.12}>
            <div className="group relative mx-auto w-full max-w-[620px]">
              {/* DECORATIVE CORNER */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 z-10 hidden h-28 w-28 border-r border-t border-pink/70 sm:block"
              />

              {/* MAIN IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] min-h-[400px] overflow-hidden border border-white/10 bg-[#121217] sm:aspect-[5/6]">
                <Image
                  src="/images/hero/slide-2.jpg"
                  alt="Sample photograph of a luxury car in a cinematic automotive studio"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />

                {/* CINEMATIC GRADIENTS */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508]/95 via-[#050508]/15 to-[#050508]/20" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050508]/20 to-transparent" />

                {/* TOP IMAGE LABEL */}
                <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" />

                  <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Automotive Aesthetics
                  </span>
                </div>

                {/* BOTTOM IMAGE CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <div className="mb-5 h-px w-14 bg-pink" />

                  <p className="font-display text-3xl uppercase leading-none text-white sm:text-4xl">
                    Crafted for
                    <span className="mt-1 block">
                      Individuality.
                    </span>
                  </p>

                  <p className="mt-4 font-grotesk text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                    Premium Automotive Styling
                  </p>

                  <p className="mt-3 text-[10px] text-white/40">
                    Illustrative automotive photography
                  </p>
                </div>
              </div>

              {/* IMAGE FOOTER */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="font-grotesk text-[10px] uppercase tracking-[0.2em] text-white/40">
                  The Details Define Everything
                </span>

                <span className="font-display text-sm text-pink">
                  ACW / 01
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   MARQUEE
========================================== */

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-white/10 bg-panel py-4"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max gap-10">
        {[...marquee, ...marquee].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm uppercase tracking-[0.3em] text-white/55"
          >
            {item}
            <span className="mx-10 text-pink">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   SERVICE CARDS
========================================== */

export function ServiceCards() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0b0f] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-pink/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-pink" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink">
              What We Do
            </p>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Automotive
              <span className="block text-pink">
                Excellence.
              </span>
            </h2>

            <p className="max-w-md text-base leading-7 text-white/60">
              From premium car wraps and paint protection
              to custom car seat upholstery, discover
              professional styling solutions designed
              to elevate your vehicle.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#121217] transition-colors duration-500 hover:border-pink/50">
                <div className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[380px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md">
                    <span className="text-xs font-semibold tracking-widest text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                      Asif Car Wraps
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
                    {service.title}
                  </h3>

                  <div className="mt-5 h-[2px] w-12 bg-pink transition-all duration-500 group-hover:w-24" />

                  <p className="mt-5 flex-1 text-sm leading-7 text-white/60 sm:text-base">
                    {service.cardText}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex min-h-12 items-center justify-between gap-4 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-pink hover:bg-pink hover:text-black"
                  >
                    <span>Explore Service</span>
                    <span aria-hidden="true" className="text-xl">
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold text-white">
                Looking for something unique?
              </p>
              <p className="mt-2 text-sm text-white/50">
                Discuss your custom automotive styling ideas with us.
              </p>
            </div>

            <ButtonLink
              href={whatsappHref(whatsappMessages.book)}
              external
            >
              Get a Consultation
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ==========================================
   WHY CHOOSE US
========================================== */

export function WhyChoose() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Car Deserves More."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={index * 0.04}
              className="glass p-6"
            >
              <reason.icon
                className="h-6 w-6 text-blue"
                aria-hidden="true"
              />

              <h3 className="mt-5 text-xl font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   STATEMENT BANNER
========================================== */

export function StatementBanner() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-transparent py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-panel to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-pink">
            The Studio View
          </p>

          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl md:text-8xl">
            Not Just a Wrap.
            <span className="mt-2 block text-pink">
              It&apos;s a Statement.
            </span>
          </h2>

          <p className="mt-6 text-lg text-white">
            Make Every Detail Count.
          </p>

          <div className="mt-8">
            <ButtonLink
              href={whatsappHref(whatsappMessages.book)}
              external
            >
              Start Your Transformation
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================
   FEATURED WORK / GALLERY
========================================== */

export function FeaturedWork() {
  return (
    <section id="gallery" className="bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery Preview"
          title="The Art of Transformation."
          subtitle="Explore our automotive inspiration gallery featuring sample photography."
        />

        <div className="mt-12">
          <GalleryExplorer />
        </div>

        <div className="mt-12">
          <BeforeAfter />
        </div>

        <div className="mt-10">
          <ButtonLink href="/gallery" variant="ghost">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   OUR PROCESS
========================================== */

export function Process() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From Vision to Reality."
        />

        <ol className="relative mt-14 grid gap-4 md:grid-cols-4">
          {steps.map(([number, title, description], index) => (
            <li key={number} className="h-full">
              <Reveal delay={index * 0.05}>
                <div className="h-full border border-white/10 bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center bg-ink font-display text-sm text-pink">
                    {number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ==========================================
   EXCLUSIVE OFFERS
========================================== */

export function Offers() {
  return (
    <section className="bg-ink px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-[1240px] overflow-hidden border border-white/10 bg-[linear-gradient(120deg,#17171d_0%,#101015_45%,#1a0a14_100%)] px-6 py-14 sm:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-pink">
          Exclusive Offers
        </p>

        <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
          Premium Automotive Offers.
        </h2>

        <p className="mt-5 text-xl text-white">
          Contact Us for Current Promotions.
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Ask about our current wrapping, PPF, and customization
          offers. Availability and pricing are confirmed directly
          according to your vehicle and requirements.
        </p>

        <div className="mt-8">
          <ButtonLink
            href={whatsappHref(whatsappMessages.offers)}
            external
          >
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   TESTIMONIALS
========================================== */

export function Testimonials() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customer Feedback"
          title="What Our Clients Say."
        />

        <div className="mt-10 max-w-3xl border border-white/10 bg-surface p-8">
          <p className="text-xs uppercase tracking-widest text-lime">
            Customer Reviews
          </p>

          <p className="mt-4 text-lg leading-relaxed text-white">
            Real customer experiences and testimonials will be
            featured here once verified feedback becomes available.
          </p>

          <div className="mt-6">
            <ButtonLink
              href={whatsappHref(whatsappMessages.book)}
              external
              variant="ghost"
            >
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   FAQ PREVIEW
========================================== */

export function FaqPreview() {
  return (
    <section id="faqs" className="bg-panel py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="FAQs"
            title="Everything You Need to Know."
          />

          <div className="mt-8">
            <ButtonLink href="/faqs" variant="ghost">
              Read All FAQs
            </ButtonLink>
          </div>
        </div>

        <Accordion items={faqsByQuestion(featuredFaqQuestions)} />
      </div>
    </section>
  );
}

/* ==========================================
   FINAL CALL TO ACTION
========================================== */

export function FinalCta() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink">
      <Image
        src="/images/backgrounds/cta.jpg"
        alt="Sample photograph of a luxury car"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1240px] flex-col justify-end px-5 py-20 sm:px-8">
        <h2 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
          Ready to Redefine Your Ride?
        </h2>

        <p className="mt-4 text-xl text-white">
          Let&apos;s Create Something Extraordinary.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={whatsappHref(whatsappMessages.book)}
            external
          >
            Book on WhatsApp
          </ButtonLink>

          <ButtonLink href={telHref()} variant="blue">
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

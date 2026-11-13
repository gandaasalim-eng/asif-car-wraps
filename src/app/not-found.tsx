import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-end bg-ink px-5 pb-20 pt-36 sm:px-8">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="font-display text-7xl text-pink sm:text-8xl">404</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          This page is not on the lot.
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          The link may be out of date. Head back to the studio, the services, or a direct WhatsApp enquiry.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            View services
          </ButtonLink>
          <ButtonLink href="/contact" variant="blue">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

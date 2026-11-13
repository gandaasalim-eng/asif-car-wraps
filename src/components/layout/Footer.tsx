import Link from "next/link";
import { business } from "@/config/business";
import { footerQuickLinks, serviceLinks } from "@/data/navigation";
import { telHref, whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const socials = [
  ["Instagram", business.social.instagram],
  ["Facebook", business.social.facebook],
  ["TikTok", business.social.tiktok],
  ["YouTube", business.social.youtube],
] as const;

export function Footer() {
  const visibleSocials = socials.filter((item) => item[1]);

  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl tracking-[0.14em]">ASIF</p>
          <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.28em] text-pink">Car Wraps</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Premium car wrapping, paint protection film, and automotive styling consultations. Every finish is planned around the vehicle in front of us.
          </p>
        </div>
        <div>
          <h2 className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-white">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={telHref()} className="transition hover:text-white">
                {business.internationalPhone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp {business.displayPhone}
              </a>
            </li>
            {business.email ? <li>{business.email}</li> : null}
            {business.address ? <li>{business.address}</li> : null}
            {business.hours ? <li>{business.hours}</li> : null}
            {visibleSocials.map(([label, href]) => (
              <li key={label}>
                <a href={href!} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 pb-24 text-xs leading-relaxed text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {business.copyrightYear} {business.name}. All rights reserved.
          </p>
          <p className="max-w-xl">
            Photographs include sample automotive imagery until studio project photos are supplied. They are not documented customer work.
          </p>
        </div>
      </div>
    </footer>
  );
}

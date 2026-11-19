
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { business } from "@/config/business";
import {
  compactNav,
  mobileNav,
  serviceLinks,
} from "@/data/navigation";
import { useLockBody } from "@/hooks/useLockBody";
import { useScrolled } from "@/hooks/useScrolled";
import {
  telHref,
  whatsappHref,
  whatsappMessages,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavAnchor({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
}) {
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex whitespace-nowrap py-2",
        "font-grotesk text-[12px] font-medium",
        "tracking-[0.035em] text-white/70",
        "transition-colors duration-300 hover:text-white",
        active && "text-white"
      )}
    >
      {label}

      <span
        className={cn(
          "absolute bottom-0 left-0 h-[2px] bg-pink",
          "transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  useLockBody(open);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const bookingUrl = whatsappHref(whatsappMessages.book);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-[#08090d]/95 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "border-b border-white/10 bg-[#08090d]/20 backdrop-blur-sm"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1600px] items-center justify-between",
          "gap-3 px-5 sm:px-8 lg:px-10",
          "transition-all duration-500",
          scrolled ? "min-h-[80px]" : "min-h-[92px]"
        )}
      >
        {/* BRAND AND NATIONWIDE SERVICE MESSAGE */}
        <div className="flex min-w-0 shrink-0 items-center gap-4 lg:gap-5">
          <Link
            href="/"
            aria-label="Asif Car Wraps home"
            className="group flex min-w-0 shrink-0 items-center gap-3"
          >
          <img
            src="/images/asif-original-logo.png"
            alt="Asif Car Wraps premium automotive logo"
            width={76}
            height={52}
            className="h-14 w-[90px] shrink-0 object-contain sm:h-16 sm:w-[105px]"
          />
            <span className="font-display text-[29px] leading-none tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-white/85">
              ASIF<span className="text-pink">.</span>
            </span>

            <span className="mt-1 font-grotesk text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
              CAR WRAPS
            </span>

            {/* EXISTING BUSINESS TAGLINE */}
            <span className="mt-2 max-w-[160px] font-grotesk text-[7px] font-semibold uppercase leading-[1.5] tracking-[0.1em] text-white/65 sm:max-w-[200px] sm:text-[8px]">
              BEST CAR WRAPPING
              <span className="block text-pink">
                &amp; DECORATION CENTER
              </span>
            </span>
          </Link>

          {/* NATIONWIDE DOORSTEP SERVICE */}
          <div
            className="hidden h-11 w-px shrink-0 bg-white/20 lg:block"
            aria-hidden="true"
          />

          <div className="hidden min-w-0 flex-col justify-center lg:flex">
            <span className="font-grotesk text-[9px] font-bold uppercase leading-5 tracking-[0.1em] text-pink 2xl:text-[10px]">
              Door-to-Door Service
            </span>

            <span className="font-grotesk text-[9px] font-medium uppercase leading-5 tracking-[0.04em] text-white/75 2xl:text-[10px]">
              Available Across Pakistan
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-7"
        >
          {compactNav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="group relative flex items-center gap-1"
              >
                <NavAnchor
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                />

                <ChevronDown
                  className="h-3.5 w-3.5 text-white/50 transition-transform duration-300 group-hover:rotate-180"
                  aria-hidden="true"
                />

                {/* SERVICES DROPDOWN */}
                <div
                  className={cn(
                    "invisible absolute left-0 top-full z-50",
                    "w-[270px] pt-5 opacity-0",
                    "translate-y-2 transition-all duration-300",
                    "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  )}
                >
                  <div className="overflow-hidden border border-white/10 bg-[#101116]/95 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "flex items-center justify-between gap-3 px-4 py-3",
                          "font-grotesk text-[12px] font-medium",
                          "text-white/65 transition-all duration-200",
                          "hover:bg-white/5 hover:text-white",
                          isActive(pathname, service.href) &&
                            "bg-white/5 text-pink"
                        )}
                      >
                        <span>{service.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-pink/70" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavAnchor
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
              />
            )
          )}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={telHref()}
            aria-label={`Call ${business.displayPhone}`}
            className="hidden items-center gap-2 font-grotesk text-xs font-medium text-white/75 transition-colors hover:text-white 2xl:inline-flex"
          >
            <Phone
              className="h-4 w-4 text-pink"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap">
              {business.displayPhone}
            </span>
          </a>

          {/* WHATSAPP BOOKING BUTTON */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex min-h-11 items-center justify-center gap-2",
              "whitespace-nowrap border border-pink bg-pink",
              "px-3 sm:px-5",
              "font-grotesk text-[11px] font-semibold tracking-[0.04em] text-ink",
              "transition-all duration-300",
              "hover:bg-transparent hover:text-white",
              "hover:shadow-[0_0_30px_rgba(255,0,110,0.18)]"
            )}
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">
              Book Consultation
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-pink hover:bg-white/5 xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-white/10 bg-[#08090d]/98 backdrop-blur-2xl xl:hidden"
          >
            <div className="max-h-[calc(100svh-92px)] overflow-y-auto px-5 py-6 sm:px-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-pink" />
                <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  Explore Asif Car Wraps
                </p>
              </div>

              {/* MOBILE DOORSTEP SERVICE MESSAGE */}
              <div className="mb-5 border border-pink/20 bg-pink/5 px-4 py-3">
                <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.12em] text-pink">
                  Door-to-Door Service
                </p>
                <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.06em] text-white/75">
                  Available Across Pakistan
                </p>
              </div>

              <ul className="space-y-1">
                {mobileNav.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        isActive(pathname, item.href)
                          ? "page"
                          : undefined
                      }
                      className={cn(
                        "group flex items-center justify-between gap-4",
                        "border-b border-white/10 py-3",
                        "font-grotesk text-[17px] font-medium",
                        "text-white/70 transition-colors hover:text-white",
                        isActive(pathname, item.href) &&
                          "text-pink"
                      )}
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[10px] tracking-widest text-pink/65">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* MOBILE CONTACT */}
              <div className="mt-7">
                <a
                  href={telHref()}
                  className="flex items-center gap-3 py-3 text-sm text-white/80"
                >
                  <Phone className="h-4 w-4 text-pink" />
                  {business.displayPhone}
                </a>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex min-h-12 items-center justify-center gap-2 bg-pink px-5 font-grotesk text-sm font-semibold text-ink transition hover:bg-[#ff3d8e]"
                >
                  Book on WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}




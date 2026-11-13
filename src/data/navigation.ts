import type { NavItem } from "@/types";

export const serviceLinks: NavItem[] = [
  { label: "All Services", href: "/services" },
  { label: "Car Wrapping", href: "/services/car-wrapping" },
  { label: "PPF Protection", href: "/services/ppf" },
  { label: "Custom Wrapping", href: "/services/custom-wrapping" },
  { label: "Car Modifications", href: "/services/car-modifications" },
];

export const desktopNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Car Wrapping", href: "/services/car-wrapping" },
  { label: "PPF Protection", href: "/services/ppf" },
  { label: "Custom Wrapping", href: "/services/custom-wrapping" },
  { label: "Custom Modifications", href: "/services/car-modifications" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const compactNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const mobileNav: NavItem[] = desktopNav;

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

import { business } from "@/config/business";

export const whatsappMessages = {
  general:
    "Hello Asif Car Wraps! I visited your website and would like to get information about your car wrapping and PPF services.",
  book: "Hello Asif Car Wraps! I would like to book a consultation. Please let me know a suitable time.",
  wrap: "Hello Asif Car Wraps! I would like to get a quotation for car wrapping for my vehicle.",
  ppf: "Hello Asif Car Wraps! I would like to get a quotation for Paint Protection Film for my vehicle.",
  custom: "Hello Asif Car Wraps! I would like to discuss a custom wrap for my vehicle.",
  mods: "Hello Asif Car Wraps! I would like to discuss exterior styling for my vehicle. Please confirm which options are available.",
  offers:
    "Hello Asif Car Wraps! I would like to know which wrapping or PPF offers are currently available for my vehicle.",
  quote: "Hello Asif Car Wraps! I would like to request a quotation for my vehicle.",
} as const;

export function whatsappHref(message: string) {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${business.phone}`;
}


import { whatsappMessages } from "@/lib/whatsapp";

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero/slide-1.jpg",
    alt: "Sample photograph of a luxury Porsche sports car",
    eyebrow: "01 / Premium Car Wrapping",
    heading: "BEYOND ORDINARY.",
    subheading: "A New Identity. An Unmistakable Presence.",
    description:
      "Transform your vehicle with distinctive colors, refined textures, and precision-applied vinyl finishes. Designed to make every arrival unforgettable.",
    primary: {
      label: "Discover Car Wraps",
      href: "/services/car-wrapping",
    },
    secondary: {
      label: "Get a Quote",
      href: whatsappMessages.wrap,
      external: true,
    },
  },

  {
    image: "/images/hero/slide-2.jpg",
    alt: "Sample photograph of a luxury car in a dark automotive studio",
    eyebrow: "02 / Paint Protection Film",
    heading: "PRESERVE PERFECTION.",
    subheading: "Invisible Protection. Lasting Confidence.",
    description:
      "Protect your vehicle's original finish with carefully applied paint protection film designed to help defend against stone chips, scratches, and everyday road wear.",
    primary: {
      label: "Explore PPF",
      href: "/services/ppf",
    },
    secondary: {
      label: "Book Consultation",
      href: whatsappMessages.ppf,
      external: true,
    },
  },

  {
    image: "/images/hero/slide-3.jpg",
    alt: "Sample photograph of a luxury sports car at night",
    eyebrow: "03 / Bespoke Custom Wrapping",
    heading: "MAKE IT YOURS.",
    subheading: "Individuality Has Never Looked This Good.",
    description:
      "From understated elegance to striking custom finishes, create an automotive statement that reflects your personality and vision.",
    primary: {
      label: "Explore Custom Wraps",
      href: "/services/custom-wrapping",
    },
    secondary: {
      label: "Discuss Your Vision",
      href: "/contact",
    },
  },

  {
    image: "/images/hero/slide-4.jpg",
    alt: "Sample photograph of a modified luxury performance car",
    eyebrow: "04 / Automotive Modifications",
    heading: "ENGINEERED TO STAND OUT.",
    subheading: "Every Detail Defines Your Drive.",
    description:
      "Elevate your vehicle's appearance with distinctive exterior styling and carefully selected modifications tailored to your vision.",
    primary: {
      label: "Explore Modifications",
      href: "/services/car-modifications",
    },
    secondary: {
      label: "WhatsApp Us",
      href: whatsappMessages.mods,
      external: true,
    },
  },
];

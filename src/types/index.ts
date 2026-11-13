export type FaqItem = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type GalleryCategory = "wraps" | "ppf" | "custom" | "mods";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  aspect: "tall" | "wide" | "square";
};

export type InfoCard = {
  title: string;
  text: string;
};

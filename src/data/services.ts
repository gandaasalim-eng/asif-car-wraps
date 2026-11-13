import type { InfoCard } from "@/types";
import { whatsappMessages } from "@/lib/whatsapp";

export type ServiceContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  whatsappMessage: string;
  cardText: string;
  introTitle: string;
  intro: string[];
  benefits: InfoCard[];
  optionsTitle: string;
  optionsIntro: string;
  options: InfoCard[];
  detailTitle: string;
  detail: string[];
  steps: InfoCard[];
  careTitle: string;
  care: string[];
  faqQuestions: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "car-wrapping",
    eyebrow: "Vinyl styling",
    title: "Car Wrapping",
    description:
      "A new color and finish, planned around the car you already own and the paint it already has.",
    image: "/images/services/wrapping.jpg",
    imageAlt: "Sample photograph of a blue sports coupe representing car wrapping",
    metaTitle: "Premium Car Wrapping",
    metaDescription:
      "Explore car wrapping with Asif Car Wraps. Gloss, matte, satin, metallic, and color-shifting finishes, with full or partial coverage confirmed in consultation.",
    whatsappMessage: whatsappMessages.wrap,
    cardText: "Change color and texture with vinyl planned around the panels, the paint, and the way the car is used.",
    introTitle: "What is car wrapping?",
    intro: [
      "A car wrap is a vinyl film applied over the painted body to change how the car looks. It can cover the whole vehicle or only the panels you want to emphasize. It does not replace a proper paint repair, and it is not paint protection film.",
      "The result depends on the film, the shape of the car, and the condition of the paint. Edges, bumpers, and recessed handles need more time than a flat door. That is why a quotation starts with the vehicle, not with a generic package.",
    ],
    benefits: [
      {
        title: "A different presence",
        text: "Color and texture change the car without a permanent respray. Removal is possible when the paint underneath is sound.",
      },
      {
        title: "Finish choice",
        text: "Gloss, matte, satin, metallic, chrome-style, and color-shifting films can be discussed, subject to stock.",
      },
      {
        title: "Partial or full",
        text: "A roof, hood, mirrors, or a full body can be wrapped. The scope is agreed before film is cut.",
      },
      {
        title: "Planned aftercare",
        text: "You leave with washing guidance that matches the film, not a generic tip sheet.",
      },
    ],
    optionsTitle: "Available finishes",
    optionsIntro:
      "These are the finish families we discuss. The exact film is confirmed from inventory during consultation.",
    options: [
      { title: "Gloss", text: "A deep, reflective color. It shows the shape of the car and needs a clean wash routine to stay bright." },
      { title: "Matte", text: "A flat finish with very little reflection. Fingerprints and oily washes are more visible, so aftercare matters." },
      { title: "Satin", text: "Between gloss and matte. Soft sheen, often chosen when a full gloss feels too loud." },
      { title: "Metallic", text: "Fine flake that appears in direct light. The effect changes with the specific film." },
      { title: "Chrome", text: "A mirror-like look that is harder to install and more sensitive at edges. Some panels are not suitable." },
      { title: "Color-shifting", text: "The color moves as the light and the viewing angle change. Stock and panel shape decide whether it is a fit." },
    ],
    detailTitle: "Full wraps and partial wraps",
    detail: [
      "A full wrap changes the whole body color. It needs consistent film direction, careful seams, and enough material for bumpers and mirrors.",
      "A partial wrap is a roof, hood, mirror caps, or an accent. It can be the right choice when you want a sharper detail without covering every panel.",
      "Neither option is automatically better. The paint, the design, and how the car is parked all sit in the same conversation.",
    ],
    steps: [
      { title: "Consultation", text: "We look at the vehicle, the finish you want, and whether the paint can take film." },
      { title: "Preparation", text: "The car is washed and the panels are cleaned. Poor prep is what makes edges fail later." },
      { title: "Application", text: "Film is positioned, stretched only as far as it should be, and finished into the edges that were agreed." },
      { title: "Inspection", text: "Seams, corners, and lights are checked, then you get aftercare guidance for that finish." },
    ],
    careTitle: "Maintenance tips",
    care: [
      "Wait for the adhesive to settle before the first wash. The waiting time is confirmed at handover.",
      "Hand wash with pH-neutral shampoo. Do not use abrasive polish or brush washes.",
      "Keep high pressure away from edges, badges, and recessed handles.",
      "Bird droppings, fuel spills, and tree sap should come off promptly. They can stain some films.",
      "Shade and a cover help, especially with matte and chrome-style finishes.",
    ],
    faqQuestions: [
      "What is car wrapping?",
      "How long does a car wrap typically last?",
      "Can car wrapping damage original paint?",
      "Can I choose a custom color or finish?",
      "Do you offer full-car and partial wrapping?",
      "How should I maintain a wrapped car?",
    ],
  },
  {
    slug: "ppf",
    eyebrow: "Paint protection",
    title: "Paint Protection Film",
    description:
      "A clear or satin film that helps defend paint from everyday road wear, without a promise of invincible bodywork.",
    image: "/images/services/ppf.jpg",
    imageAlt: "Sample photograph of a silver luxury car representing paint protection film",
    metaTitle: "Paint Protection Film",
    metaDescription:
      "Learn how Asif Car Wraps installs paint protection film. Clear, gloss, and matte PPF for full or partial coverage, with honest limits and a WhatsApp quotation.",
    whatsappMessage: whatsappMessages.ppf,
    cardText: "Shield paint from chips, bug acids, and light marks with film specified for the areas that take the hits.",
    introTitle: "What is PPF?",
    intro: [
      "Paint protection film is a urethane layer applied to painted panels. Its job is protection, not a new body color. Clear film keeps the paint you have. Gloss and matte versions change how that paint reflects light.",
      "PPF can reduce the effect of stone chips, insect debris, and light scratching. It will not stop every mark, a deep cut, or impact from a collision. Coverage and film quality decide how much help it actually gives.",
    ],
    benefits: [
      {
        title: "Keeps the paint you chose",
        text: "Clear film is there so the original color stays visible while taking some of the daily wear.",
      },
      {
        title: "Targeted coverage",
        text: "High-impact areas can be protected on their own when a full body is more than you need.",
      },
      {
        title: "Finish options",
        text: "Clear gloss and matte or satin-look films are discussed from what is actually in stock.",
      },
      {
        title: "Removable by design",
        text: "The film is meant to come off later. Age, sun, and previous repairs change how easy that is.",
      },
    ],
    optionsTitle: "Film and coverage",
    optionsIntro: "The names below describe the conversation. The product used is confirmed before installation.",
    options: [
      { title: "Clear PPF", text: "Transparent film over the existing paint. The usual choice when the color should stay as it is." },
      { title: "Gloss PPF", text: "A clearer, wet-look reflection. It asks for careful washing if you want that depth to remain." },
      { title: "Matte PPF", text: "A softer, lower-gloss look while still adding a protective layer. Not every car is a good candidate." },
      { title: "Full-body protection", text: "Film across the painted body. It takes longer and costs more because every panel is prepared and finished." },
      { title: "Partial-body protection", text: "A defined area, often the front clip, mirrors, or impact zones, when full coverage is not the brief." },
      { title: "High-impact areas", text: "Bumper, hood edge, mirrors, and rocker sections usually see the most stones. They can be prioritized." },
    ],
    detailTitle: "What protection does and does not mean",
    detail: [
      "Film adds a sacrificial layer. Light marks and many chips never reach the paint. A sharp impact can still cut the film and the paint under it.",
      "Some films relax light swirls with heat. That is a product feature, not a promise that every scratch disappears.",
      "Edges that are not sealed properly collect dirt. Installation quality matters as much as the brand of film.",
    ],
    steps: [
      { title: "Consultation", text: "Coverage, finish, and paint condition are agreed. Damaged paint is not hidden under film and called protected." },
      { title: "Decontamination", text: "The car is washed and the panels are cleaned so adhesive has a sound surface." },
      { title: "Installation", text: "Patterns are aligned, then the film is applied and finished so edges sit where they were planned." },
      { title: "Inspection", text: "Lifting, trapped dirt, and tight corners are checked before the car is returned with wash guidance." },
    ],
    careTitle: "Maintenance guidance",
    care: [
      "Give the film time to cure before the first wash. The interval is confirmed at handover.",
      "Hand wash with a clean mitt and pH-neutral shampoo.",
      "Do not use abrasive compounds unless that film is approved for them.",
      "Keep pressure nozzles off the edges.",
      "If a mark is deep enough to catch a nail, it needs a look. Do not assume the film will heal it.",
    ],
    faqQuestions: [
      "What is Paint Protection Film (PPF)?",
      "What is the difference between PPF and vinyl wrapping?",
      "How long does PPF installation take?",
      "Can PPF be removed?",
      "Does PPF prevent every scratch?",
      "How should paint protection film be washed?",
    ],
  },
  {
    slug: "custom-wrapping",
    eyebrow: "Personal design",
    title: "Custom Wrapping",
    description:
      "Color, contrast, and graphics composed for one car, then confirmed against stock and panel shape.",
    image: "/images/services/custom.jpg",
    imageAlt: "Sample photograph of a red sports car representing custom wrapping",
    metaTitle: "Custom Car Wrapping",
    metaDescription:
      "Plan a custom car wrap with Asif Car Wraps. Accent, roof, hood, and mirror wraps plus graphics, discussed in consultation and limited by available film.",
    whatsappMessage: whatsappMessages.custom,
    cardText: "Build a one-off finish with color breaks, accents, and graphics that are designed around a single vehicle.",
    introTitle: "Personalized finishes",
    intro: [
      "Custom wrapping is still vinyl, but the design is specific. It might be a two-tone split, a satin roof over a gloss body, or a graphic that follows a character line.",
      "Bring references. Photos of other cars are useful, and so is a clear note about what you do not want. The final plan has to fit the panels in front of us and the film that can actually be ordered.",
    ],
    benefits: [
      { title: "One car, one plan", text: "The layout is drawn around your vehicle rather than copied from a template." },
      { title: "Controlled contrast", text: "Color combinations are chosen so seams and breaks land on real panel gaps where possible." },
      { title: "Scaled ambition", text: "A mirror pair or a roof can be the whole project. A full custom design can be phased." },
      { title: "Honest inventory", text: "If a color-shift or chrome film is not available, you hear that before a date is set." },
    ],
    optionsTitle: "Ways to customize",
    optionsIntro: "These are styling directions, not a menu that is guaranteed in stock today.",
    options: [
      { title: "Color combinations", text: "Two or more finishes divided by panel gaps, so the break looks intentional." },
      { title: "Graphics and decals", text: "Stripes, numbers, or supplied artwork, reviewed for size and panel complexity." },
      { title: "Accent wraps", text: "Small areas that sharpen a factory color without covering the whole car." },
      { title: "Roof wraps", text: "A contrasting roof is one of the cleanest partial changes on many sedans and coupes." },
      { title: "Hood wraps", text: "A single panel with a different finish. Edges around the windshield and lights need extra care." },
      { title: "Mirror wraps", text: "A small accent that still has to match the body finish you chose." },
      { title: "Styling concepts", text: "A consultation can start from a mood rather than a color code. The film choice comes after that." },
    ],
    detailTitle: "How a custom idea becomes a plan",
    detail: [
      "References are sorted into what the film can do and what would need paint instead. Vinyl cannot safely imitate every effect.",
      "Seam placement is decided before cutting. A line that crosses a compound curve often looks worse than a line that follows a shut.",
      "Artwork needs usable files or a clear physical reference. Blurry screenshots are not enough to match a logo.",
    ],
    steps: [
      { title: "References", text: "You share the vehicle, photos, and the feeling you want. Conflicts get flagged early." },
      { title: "Material check", text: "Finishes are matched to stock or a realistic lead time. Unavailable films are not promised." },
      { title: "Layout", text: "Coverage, breaks, and graphics are agreed so the install has a map." },
      { title: "Application and review", text: "The film goes on, then the design is checked in real light before handover." },
    ],
    careTitle: "After the design is on the car",
    care: [
      "Custom edges and overlays need the same gentle wash as a full wrap, with extra attention where two films meet.",
      "Do not peel a graphic to reposition it yourself.",
      "Ask before any polish or ceramic product touches the film.",
      "Sun and automatic brushes age printed areas and chrome-style film faster.",
    ],
    faqQuestions: [
      "Can I choose a custom color or finish?",
      "Can graphics or decals be added to a wrap?",
      "Are chrome and color-shifting finishes always available?",
      "Do you offer full-car and partial wrapping?",
      "How can I get a quotation?",
    ],
  },
  {
    slug: "car-modifications",
    eyebrow: "Exterior styling",
    title: "Car Modifications",
    description:
      "Visual upgrades discussed around the car in front of us. Nothing is listed here as a guaranteed part or performance service.",
    image: "/images/services/mods.jpg",
    imageAlt: "Sample photograph of a black performance car representing exterior styling",
    metaTitle: "Car Modifications & Styling",
    metaDescription:
      "Discuss exterior styling and cosmetic modifications with Asif Car Wraps. Availability is confirmed in consultation. No parts are promised until the vehicle is reviewed.",
    whatsappMessage: whatsappMessages.mods,
    cardText: "Exterior styling and cosmetic changes, scoped only after the vehicle and the request are both understood.",
    introTitle: "Styling, not a parts catalogue",
    intro: [
      "Modification work on this site means visual, cosmetic change: how the car is finished, how trim is presented, and how a wrap or film supports that look. It is not a promise of engine work, suspension kits, or a specific wheel package.",
      "Availability is subject to consultation. If a request sits outside what can be done properly, that is said before any booking is treated as confirmed.",
    ],
    benefits: [
      { title: "The car sets the limit", text: "Advice starts from the vehicle, its paint, and what you want people to notice." },
      { title: "Cosmetic focus", text: "The conversation stays on appearance unless a request is explicitly confirmed as available." },
      { title: "Wrap-led styling", text: "Color, blackout, and accent film are often the cleanest way to change the stance of a design." },
      { title: "No invented packages", text: "There is no fixed modification menu on this website, because the work has to be confirmed." },
    ],
    optionsTitle: "What can be discussed",
    optionsIntro: "These are consultation topics. They are not confirmed services until they are agreed for your vehicle.",
    options: [
      { title: "Exterior styling", text: "The overall look: color, contrast, and which details should recede or stand out." },
      { title: "Cosmetic modifications", text: "Visual changes that do not assume mechanical work. Scope is confirmed case by case." },
      { title: "Trim customization", text: "Accents and brightwork can be discussed, including whether film is a better route than replacement parts." },
      { title: "Visual upgrades", text: "Details such as badge presentation or dark accents, only where they suit the car and the finish." },
      { title: "Styling consultations", text: "A structured conversation with photos and references before any commitment." },
      { title: "Confirmed options only", text: "If a part or modification is not offered, it will not be implied by a photograph on this site." },
    ],
    detailTitle: "How a styling consultation works",
    detail: [
      "Share the make, model, and a few photos. Say what you want to change and what must stay.",
      "You get a direct answer on what can be done with film and finish, and what would need a different specialist.",
      "Nothing is booked as a modification until the scope, the material, and the vehicle condition are clear.",
    ],
    steps: [
      { title: "Brief", text: "You describe the look and send photos. References help. A vague request is narrowed before a price is given." },
      { title: "Review", text: "The car and the request are checked against what can actually be offered." },
      { title: "Proposal", text: "You receive a defined scope. Items that are not available are left out, not guessed." },
      { title: "Finish", text: "Agreed work is completed and inspected. Extra changes are a new conversation, not an assumption." },
    ],
    careTitle: "Before you enquire",
    care: [
      "Photos of the current exterior make the first reply more useful.",
      "Mention fresh paint or recent bodywork. Film and trim work both depend on it.",
      "Do not expect a performance figure or a parts warranty from this page. Those are not offered here.",
      "Ask directly if you are unsure whether a request is cosmetic. A clear no is better than a vague yes.",
    ],
    faqQuestions: [
      "What exterior modifications can be discussed?",
      "How can I get a quotation?",
      "How do I book an appointment?",
      "Are prices listed on the website?",
    ],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}

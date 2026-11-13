import type { FaqItem } from "@/types";

export const faqCategories: { title: string; id: string; items: FaqItem[] }[] = [
  {
    title: "Car Wrapping",
    id: "car-wrapping",
    items: [
      {
        question: "What is car wrapping?",
        answer:
          "Car wrapping is the application of a vinyl film over exterior panels to change the color, finish, or graphics of a vehicle. It is a styling treatment. It is not a respray, and it is not a substitute for paint protection film.",
      },
      {
        question: "How long does a car wrap typically last?",
        answer:
          "A quality wrap can last for several years, but there is no single lifespan that applies to every car. Durability depends on the film, the color, sun exposure, how the car is washed, the condition of the paint underneath, the quality of preparation, and whether the vehicle is parked inside or outside.",
      },
      {
        question: "Can car wrapping damage original paint?",
        answer:
          "A wrap installed on sound, well-adhered paint is designed to be removable. Risk rises if the paint is very fresh, poorly repaired, flaking, or already failing. The paint is assessed before installation, and a panel that is not a good candidate should be left alone or repaired first.",
      },
      {
        question: "Can I choose a custom color or finish?",
        answer:
          "Yes. Gloss, matte, satin, metallic, chrome-style, and color-shifting finishes can be discussed, along with partial accents. Availability depends on current inventory and a consultation. Not every finish is in stock at all times.",
      },
      {
        question: "Do you offer full-car and partial wrapping?",
        answer:
          "Yes. Full wraps and partial areas such as a roof, hood, mirrors, or accents can be planned. The right choice depends on the look you want, the shape of the panels, and the condition of the paint.",
      },
    ],
  },
  {
    title: "PPF Protection",
    id: "ppf-protection",
    items: [
      {
        question: "What is Paint Protection Film (PPF)?",
        answer:
          "Paint protection film is a clear or satin polyurethane film applied over paint to help shield it from stone chips, insect debris, light scratches, and some environmental staining. It does not make paint immune to every kind of damage.",
      },
      {
        question: "What is the difference between PPF and vinyl wrapping?",
        answer:
          "Vinyl wrap is chosen mainly to change appearance. Paint protection film is chosen mainly to help protect paint, and quality PPF is usually thicker than wrap vinyl. Some protection films have a limited self-healing response to light marks when warmed, depending on the product. The two materials do different jobs and can be planned together only after a consultation.",
      },
      {
        question: "How long does PPF installation take?",
        answer:
          "Partial coverage, such as a front bumper and partial hood, can often be completed in a day. Full-body installation usually takes longer because the car needs washing, decontamination, careful application, and a final inspection. Timing is confirmed after the vehicle and the coverage are known.",
      },
      {
        question: "Can PPF be removed?",
        answer:
          "Professionally installed paint protection film is intended to be removable. Removal should be done carefully so the adhesive and the paint are not stressed. Age, sun exposure, and earlier bodywork all affect how easily the film comes off.",
      },
      {
        question: "Does PPF prevent every scratch?",
        answer:
          "No. PPF helps with many everyday marks and light stone chips, but it will not stop deep cuts, collisions, or every abrasion. Coverage, film type, and how the car is used all change the result. Nothing on this website should be read as a guarantee of complete scratch protection.",
      },
    ],
  },
  {
    title: "Customization",
    id: "customization",
    items: [
      {
        question: "Can graphics or decals be added to a wrap?",
        answer:
          "Graphics, stripes, and decals can be discussed during consultation. What is practical depends on the artwork, the panels, and the film. Bring a reference and the vehicle details so the scope can be confirmed before any work is scheduled.",
      },
      {
        question: "Are chrome and color-shifting finishes always available?",
        answer:
          "No. Those finishes are confirmed from current inventory. Chrome-style film is also more sensitive at edges and during washing, so some panel shapes are a poor match. That is discussed honestly before you commit.",
      },
      {
        question: "What exterior modifications can be discussed?",
        answer:
          "Consultations can cover visual styling such as trim accents, badge presentation, and wrap-led changes. Any physical modification is confirmed only after the vehicle is reviewed. If a request is outside what is currently offered, that is said before work begins. Specific parts are not promised on this website.",
      },
    ],
  },
  {
    title: "Pricing & Booking",
    id: "pricing-booking",
    items: [
      {
        question: "How can I get a quotation?",
        answer:
          "Send the vehicle make and model, the service you want, and a few clear photos on WhatsApp or through the contact form. The form opens a WhatsApp message. It does not email the studio or save a database record. A quotation depends on vehicle size, coverage, material, and paint condition.",
      },
      {
        question: "How do I book an appointment?",
        answer:
          "Call or WhatsApp 0321-5221369. Share the service, the vehicle, and a preferred time. The appointment is confirmed in the conversation, not by this website alone.",
      },
      {
        question: "Are prices listed on the website?",
        answer:
          "No fixed price list is published here. Two cars that look similar can need different preparation and different amounts of film. Ask for a quotation with your vehicle details so the figure matches the actual work.",
      },
    ],
  },
  {
    title: "Maintenance",
    id: "maintenance",
    items: [
      {
        question: "How should I maintain a wrapped car?",
        answer:
          "Hand wash with a pH-neutral shampoo, avoid abrasive polishes and brush washes, and keep pressure washers away from film edges. Shade is kinder than constant sun. Aftercare guidance is given when the car is handed back, because the right routine depends on the film that was installed.",
      },
      {
        question: "How should paint protection film be washed?",
        answer:
          "Use a gentle hand wash and a clean mitt. Skip harsh solvents and abrasive compounds unless the film manufacturer allows them. Dry with a soft towel. If a light mark is in a finish described as self-healing, warm water or sunshine may reduce it, but that behavior depends on the specific film.",
      },
      {
        question: "Should a wrapped car go through a brush car wash?",
        answer:
          "Brush and abrasive automatic washes are a poor idea for vinyl and for PPF. They can lift edges and mark the finish. A touchless wash is a safer compromise. Hand washing is the preferred routine.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((category) => category.items);

export const featuredFaqQuestions = [
  "What is car wrapping?",
  "What is Paint Protection Film (PPF)?",
  "What is the difference between PPF and vinyl wrapping?",
  "How long does a car wrap typically last?",
  "How can I get a quotation?",
  "How do I book an appointment?",
];

export function faqsByQuestion(questions: string[]) {
  return questions.map((question) => {
    const match = allFaqs.find((item) => item.question === question);
    if (!match) {
      throw new Error(`Missing FAQ: ${question}`);
    }
    return match;
  });
}

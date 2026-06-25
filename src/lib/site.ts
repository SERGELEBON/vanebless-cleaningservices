// Vanebless Cleaning Services - Central site configuration (English)
// All branding, services, and image data lives here.
// All people shown across the site are Black Ghanaian / African professionals.

export const site = {
  name: "Vanebless Cleaning Services",
  shortName: "Vanebless",
  slogan: "Cleaning Beyond Excellence",
  description:
    "Your trusted experts in cleaning solutions for offices, homes and special events.",
  // Ghana country code +233, dropping leading 0
  phones: ["020 650 5564", "055 364 4622"],
  phoneIntl: ["+233206505564", "+233553644622"],
  whatsapp: "233206505564",
  whatsappUrl: "https://wa.me/233206505564",
  socialHandle: "vanebless_cleaning_services",
  email: "info@vanebless-cleaning.com",
  social: {
    tiktok: "https://www.tiktok.com/@vanebless_cleaning_services",
    instagram: "https://www.instagram.com/vanebless_cleaning_services",
    facebook: "https://www.facebook.com/vanebless_cleaning_services",
    x: "https://x.com/vanebless_cleaning_services",
    snapchat: "https://www.snapchat.com/add/vanebless_cleaning_services",
  },
  logo: "/vanebless-logo.jpg",
};

export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
  features: string[];
  category: "Routine" | "Specialised" | "Targeted" | "Technical";
};

export const services: ServiceItem[] = [
  {
    id: "routine-office",
    title: "Routine & Office Cleaning",
    short: "Impeccable daily hygiene for your workplace.",
    description:
      "A recurring cleaning service designed for offices and commercial premises. Our crews follow a set schedule to guarantee a healthy, productive and welcoming work environment every single day.",
    icon: "Building2",
    image: "https://sfile.chatglm.cn/images-ppt/97e6ea02ff02.jpg",
    features: [
      "Scheduled daily or weekly visits",
      "Disinfection of high-touch surfaces",
      "Waste management and consumable restocking",
      "Windows, floors, restrooms and common areas",
    ],
    category: "Routine",
  },
  {
    id: "school-cleaning",
    title: "School Cleaning",
    short: "Healthy, safe learning environments for students.",
    description:
      "A cleaning protocol tailored to schools, nurseries and campuses. We use eco-friendly, non-toxic products to protect children's health while ensuring disinfection that meets regulatory standards.",
    icon: "GraduationCap",
    image: "https://sfile.chatglm.cn/images-ppt/72fcc01d336e.jpg",
    features: [
      "Eco-friendly, non-toxic products",
      "Disinfection of classrooms and dining halls",
      "Out-of-hours intervention",
      "Compliance with school hygiene standards",
    ],
    category: "Specialised",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    short: "A thorough clean of every corner, no compromise.",
    description:
      "Deep cleaning ideal for seasonal top-to-bottom cleaning or a complete refresh. We treat often-neglected areas: behind appliances, grout, tiles, skirting boards and high walls.",
    icon: "Sparkles",
    image: "https://sfile.chatglm.cn/images-ppt/f4c1ea96d025.jpg",
    features: [
      "Deep descaling and degreasing",
      "Grout and tile treatment",
      "High-power vacuuming of hard-to-reach spots",
      "Complete 360° disinfection",
    ],
    category: "Specialised",
  },
  {
    id: "after-builders",
    title: "After Builders Cleaning",
    short: "Post-construction dust removal for a move-in ready space.",
    description:
      "Specialised in post-construction or renovation cleaning. We remove construction dust, paint residue, cement and stickers to deliver an immaculate space ready to be furnished.",
    icon: "HardHat",
    image: "https://sfile.chatglm.cn/images-ppt/ada43affd10e.jpg",
    features: [
      "Construction dust removal",
      "Paint and cement residue removal",
      "Polishing of new surfaces",
      "Turnkey handover",
    ],
    category: "Specialised",
  },
  {
    id: "move-in-out",
    title: "Move In / Move Out",
    short: "A stress-free move with an immaculate home at every step.",
    description:
      "Whether you're moving in or moving out, we refresh the property from top to bottom. Ideal for reclaiming your rental deposit or welcoming new occupants into a spotless space.",
    icon: "Truck",
    image: "https://sfile.chatglm.cn/images-ppt/46dbe9e310c0.png",
    features: [
      "Complete kitchen & restroom cleaning",
      "Intensive descaling and degreasing",
      "Inside cupboards and appliances",
      "Satisfaction guarantee for deposits",
    ],
    category: "Targeted",
  },
  {
    id: "after-event",
    title: "After Event & Party Cleaning",
    short: "Enjoy your event — we handle the cleanup.",
    description:
      "Post-event service for weddings, seminars, concerts and private parties. Our crews step in quickly after the event ends to restore the venue to its original condition.",
    icon: "PartyPopper",
    image: "https://sfile.chatglm.cn/images-ppt/8419bef095bc.jpg",
    features: [
      "Rapid post-event intervention",
      "Waste sorting and removal",
      "Floors, furniture and restrooms cleaning",
      "Venue restored to original condition",
    ],
    category: "Targeted",
  },
  {
    id: "laundry-dry",
    title: "Laundry & Dry Cleaning",
    short: "Clean, fresh and neatly cared-for laundry with a premium service.",
    description:
      "Laundry and dry-cleaning service for individuals and professionals (hotels, restaurants). Washing, drying, ironing and neat folding, with optional collection and delivery.",
    icon: "Shirt",
    image: "https://sfile.chatglm.cn/images-ppt/bdf844511cf5.jpg",
    features: [
      "Professional washing and dry cleaning",
      "Ironing and neat folding",
      "Delicate fabric care",
      "Home collection and delivery",
    ],
    category: "Technical",
  },
  {
    id: "disaster-restoration",
    title: "Disaster Cleaning & Restoration",
    short: "Emergency response after floods, fire or disaster.",
    description:
      "Emergency service for disaster situations: water damage, fire, mould. We sanitise, dehumidify and restore your belongings with professional equipment.",
    icon: "Flame",
    image: "https://sfile.chatglm.cn/images-ppt/f62866ef29e9.jpg",
    features: [
      "24/7 emergency response",
      "Drying and dehumidification",
      "Anti-mould treatment",
      "Restoration of damaged belongings",
    ],
    category: "Technical",
  },
  {
    id: "exterior-cleaning",
    title: "Exterior House Cleaning",
    short: "Facades, patios and exteriors regain their original shine.",
    description:
      "High-pressure cleaning of facades, patios, roofs and exterior surfaces. We remove moss, algae and grime to enhance your property and extend its lifespan.",
    icon: "Home",
    image: "https://sfile.chatglm.cn/images-ppt/9da5dfd753d5.jpg",
    features: [
      "High-pressure washing (Kärcher)",
      "Roof and patio moss removal",
      "Preventive anti-moss treatment",
      "Facade cleaning",
    ],
    category: "Technical",
  },
];

export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "https://sfile.chatglm.cn/images-ppt/09dbe84a8d1b.jpg",
    title: "Cleaning Beyond Excellence",
    subtitle:
      "Your trusted experts in cleaning solutions for offices, homes and special events.",
  },
  {
    image: "https://sfile.chatglm.cn/images-ppt/dd4c2d2d854c.jpg",
    title: "Spotless Spaces, Every Time",
    subtitle:
      "Premium know-how for an immaculate, healthy and welcoming environment.",
  },
  {
    image: "https://sfile.chatglm.cn/images-ppt/4d7ce9b8452a.jpg",
    title: "Professional Crews in Action",
    subtitle:
      "Trained, equipped and passionate teams delivering excellence in every job.",
  },
  {
    image: "https://sfile.chatglm.cn/images-ppt/97e6ea02ff02.jpg",
    title: "Excellence in Every Detail",
    subtitle:
      "From routine to specialised, we raise the standard of clean beyond expectations.",
  },
];

export type BeforeAfter = {
  id: string;
  label: string;
  before: string;
  after: string;
};

export const beforeAfterGallery: BeforeAfter[] = [
  {
    id: "ba1",
    label: "Living room after renovation",
    before: "https://sfile.chatglm.cn/images-ppt/b890a4b00cfe.jpg",
    after: "https://sfile.chatglm.cn/images-ppt/0addd4d845f6.jpg",
  },
  {
    id: "ba2",
    label: "Family living room",
    before: "https://sfile.chatglm.cn/images-ppt/2d57096beea6.jpg",
    after: "https://sfile.chatglm.cn/images-ppt/0f73564bee6e.jpg",
  },
  {
    id: "ba3",
    label: "Open-plan space",
    before: "https://sfile.chatglm.cn/images-ppt/32d63d72fa07.jpg",
    after: "https://sfile.chatglm.cn/images-ppt/f7a181d29566.jpg",
  },
];

export const stats = [
  { value: "5000+", label: "Jobs completed" },
  { value: "98%", label: "Happy clients" },
  { value: "24/7", label: "Emergency availability" },
  { value: "15+", label: "Certified experts" },
];

export const testimonials = [
  {
    name: "Ama Serwaa",
    role: "Director, Accra Tech Hub",
    quote:
      "Vanebless transformed our offices. The professionalism and attention to detail are unmatched. Our staff love coming to work in such a clean space.",
    rating: 5,
  },
  {
    name: "Kwame Mensah",
    role: "Manager, Prestige Events",
    quote:
      "After every event, the Vanebless crew steps in with remarkable efficiency. The venue is restored to immaculate condition, every single time. A trusted partner.",
    rating: 5,
  },
  {
    name: "Abena Owusu",
    role: "Homeowner, East Legon",
    quote:
      "The deep cleaning literally brought my house back to life. Every corner was treated. I recommend them with my eyes closed — it's master craftsmanship.",
    rating: 5,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

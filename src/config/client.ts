export const client = {
  // Business Details
  name: "All Tree & Garden Care Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07515 695202",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Jacquie Simpson", rating: 5, text: "All the workers that worked on my garden were very professional. They were punctual, attentive to the wildlife present, polite and very hard working. The gentlemen started working at 8:00am and only stopped for one short break. It was back …  ", date: "5 years ago" },
    { name: "Izzy Grigg", rating: 5, text: "I’m very pleased with the work All Tree & Garden Care Ltd undertook today. I don’t normally post reviews but they’ve done such a great job clearing the garden of the house we’ve just moved into which had become very overgrown I wanted to …  ", date: "3 years ago" },
    { name: "Peter W.", rating: 5, text: "100% recommended - I needed a back garden cleared which was like a jungle. From a very fair quote on the Saturday, Tyrone's crew was on it on Monday morning, a one day job, cleared down to the ground, all debris including an old garden shed …  ", date: "5 years ago" },
    { name: "Nakeva Phirmis", rating: 5, text: "We just had our garden work completed yesterday and the results are fantastic. We needed our front and back garden to be completely cleared out, with a new fence for the back garden and a deck built. …  ", date: "5 years ago" },
    { name: "Jon Roe", rating: 5, text: "We appointed Tyrone and his team to give our garden a general tidy up after a few years of neglect, remove a tree and some shrubs and replace a retaining wall that had collapsed. …  ", date: "6 years ago" },
    { name: "RAPID", rating: 5, text: "Tyrone and his team have kept our front garden looking tidy for the last couple of years now. They are always speedy to quote, and punctual to do the work. We are not disturbed when the work is done as his team use petrol fuelled tools. They always t", date: "5 years ago" },
    { name: "Pat Miller", rating: 5, text: "We recently had some trees removed and reduced to open up our garden, a new fence built and turf laid by the team from All Tree and Garden Care. They were professional and proficient and took our neighbours into consideration when removing …  ", date: "5 years ago" },
    { name: "Oliver New", rating: 5, text: "Tyrone and his team replaced our decaying garden fences with lovely new feather-edge and concrete posts. Looks fantastic and you can just tell it's been done properly - i.e. everything is neat and straight and has been done with pride and …  ", date: "4 years ago" },
    { name: "stephen creaturo", rating: 5, text: "All Tree and Garden Care replaced a portion of our rear fence off the back deck of the house that is adjoining to our neighbor. This included new posts, a leveling of the property to gain more symmetry with the fence and quite a few new …  ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "All Tree & Garden Care Ltd | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};

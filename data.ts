export const EMAIL = "connect@evenlynstudio.in";
export const INSTAGRAM = "https://www.instagram.com/aamchi_amravati";

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  hero: u("photo-1524492412937-b28074a5d7da", 900), // India — placeholder
  about: u("photo-1477587458883-47145ed94245", 800), // street life — placeholder
  street: u("photo-1483985988355-763728e1935b", 800),
  food: u("photo-1509631179647-0177331693ae", 800),
  culture: u("photo-1469334031218-e382a71b716b", 800),
  festival: u("photo-1515886657613-9f3515b0c78f", 800),
  market: u("photo-1490481651871-ab68de25d43d", 800),
  nature: u("photo-1414235077428-338989a2e8c0", 800),
  people: u("photo-1529626455594-4ff0802cfb7e", 800),
  night: u("photo-1524504388940-b1c1722653e1", 800),
};

// Placeholder reel slots — real reel shortcodes get pasted here when the page owner shares them.
export const REELS = [
  { code: "sample-1", label: "Ambadevi Temple mornings" },
  { code: "sample-2", label: "Amravati street-food tour" },
  { code: "sample-3", label: "Chikhaldara in the monsoon" },
  { code: "sample-4", label: "MH27 market diaries" },
  { code: "sample-5", label: "Festival nights in the city" },
  { code: "sample-6", label: "Tag-to-feature favourites" },
];

export const COLLABS = [
  {
    name: "Varhad Misal House",
    category: "Local Food",
    desc: "Sample: a reel feature on their signature misal — morning rush, the tadka shot, and the first-bite reaction.",
  },
  {
    name: "Ambadevi Navratri Coverage",
    category: "Festival",
    desc: "Sample: 3-day festival story + reel series covering the Navratri crowds, aarti and the decorated mandir.",
  },
  {
    name: "Chikhaldara Eco Retreat",
    category: "Travel",
    desc: "Sample: a weekend getaway reel — the drive up, the viewpoints, and one perfect monsoon sunset.",
  },
  {
    name: "Cotton City Café",
    category: "Café",
    desc: "Sample: café-date style reel featuring their filter coffee and the evening crowd on the terrace.",
  },
  {
    name: "MH27 Food Fest",
    category: "Event",
    desc: "Sample: event promotion reel + stories — stalls, the food walk, and the night's best bites.",
  },
  {
    name: "Rajkamal Saree Sadan",
    category: "Local Business",
    desc: "Sample: festive try-on reel for their Paithani collection, timed for the wedding season.",
  },
];

export const PRICING = [
  {
    name: "Business Feature",
    amount: "₹1,999",
    per: "per reel",
    features: [
      "1 feature reel for your shop / café / outlet",
      "Shot on location in Amravati",
      "Caption + location tag included",
      "1 round of revisions",
      "Posted on the page feed",
    ],
    featured: false,
  },
  {
    name: "Reel + Story",
    amount: "₹3,499",
    per: "combo",
    features: [
      "1 feature reel + 3 stories",
      "Swipe-up / link sticker",
      "Behind-the-scenes story",
      "1 round of revisions",
      "Pinned comment for 7 days",
    ],
    featured: true,
  },
  {
    name: "Event Promotion",
    amount: "₹5,999",
    per: "per event",
    features: [
      "Pre-event announcement reel",
      "On-day story coverage",
      "Post-event highlights reel",
      "2 rounds of revisions",
      "Priority scheduling in season",
    ],
    featured: false,
  },
  {
    name: "Monthly Spotlight",
    amount: "₹9,999",
    per: "per month",
    features: [
      "4 feature reels across the month",
      "Stories with every reel",
      "Festival / offer tie-ins",
      "Monthly reach report",
      "First refusal on festival dates",
    ],
    featured: false,
  },
];

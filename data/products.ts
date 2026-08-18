export interface Range {
  kicker: string;
  title: string;
  body: string;
  photo: string;
  chips: string[];
}

export interface BoardItem {
  name: string;
  grade: string;
  size: string;
  pack: string;
  status: string;
}

export interface Spec {
  k: string;
  v: string;
}

export interface UseCase {
  n: string;
  t: string;
  b: string;
}

export interface Product {
  name: string;
  slug: string;
  category: "ferro" | "non-ferro";
  use: string;
  status: string;
  photo: string;
  note: string;
  origin?: string;
  specs: Spec[];
  chem: Spec[];
  supply: Spec[];
  uses: UseCase[];
}

export interface CrucibleSize {
  no: string;
  dia: string;
  h: string;
  cap: string;
  use: string;
}

export interface CrucibleSpec {
  kicker: string;
  title: string;
  rows: Spec[];
}

export interface ProofPoint {
  t: string;
  b: string;
}

export interface Pillar {
  n: string;
  t: string;
  b: string;
}

export const siteInfo = {
  name: "SS Traders",
  legalName: "SS Traders Pakistan",
  tagline: "High-Grade Ferro Alloys, Non-Ferro Alloys & Crucibles",
  description:
    "A Lahore-based trading company specialised in high-grade ferro alloys, non-ferro alloys and crucibles for iron, steel, aluminium and copper foundries across Pakistan.",
  url: "https://sstraders.pk",
  phone: "+92 300 9405230",
  phoneRaw: "+923009405230",
  whatsapp: "+92 300 9405230",
  whatsappRaw: "923009405230",
  email: "sstraders03009405230@gmail.com",
  address: {
    street: "Badami Bagh / Main Foundry Market",
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    full: "Lahore, Pakistan",
  },
  geo: {
    latitude: 31.5826,
    longitude: 74.3283,
  },
  hours: "Mon – Sat · 09:00 – 19:00 (Friday break 13:00 – 14:30)",
  ntn: "7940523-0",
};

const P = "https://sstraders.pk/wp-content/uploads/2026/05/";

// Helper to generate slugs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const ferro: Product[] = [
  {
    name: "Ferro Silicon 75%",
    slug: "ferro-silicon-75",
    category: "ferro",
    use: "Steel deoxidation",
    status: "Ready stock",
    photo: P + "ferro-Silicon-768x768.webp",
    note: "Fresh stock available. 75% grade, high purity, ready for immediate delivery.",
    origin: "China",
    specs: [
      { k: "Si", v: "72 – 80%" },
      { k: "Al / C max", v: "2.0% / 0.2%" },
      { k: "Size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Silicon (Si)", v: "72 – 80%" },
      { k: "Aluminium (Al) max", v: "2.0%" },
      { k: "Carbon (C) max", v: "0.2%" },
      { k: "Sulphur (S) max", v: "0.02%" },
      { k: "Phosphorus (P) max", v: "0.04%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeSi 75" },
      { k: "Lump size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Steel deoxidation",
        b: "Removes dissolved oxygen from the melt before tapping, reducing blowholes in the casting.",
      },
      {
        n: "02",
        t: "Silicon adjustment",
        b: "Raises silicon in grey and ductile iron to hit the target carbon equivalent.",
      },
      {
        n: "03",
        t: "Inoculation base",
        b: "Feedstock for ladle inoculation alongside ferro silico magnesium in SG iron work.",
      },
      {
        n: "04",
        t: "Stainless & alloy steel",
        b: "Standard reducing agent in stainless and low-alloy steel production.",
      },
    ],
  },
  {
    name: "Ferro Manganese 75%",
    slug: "ferro-manganese-75",
    category: "ferro",
    use: "Mn addition, steel",
    status: "Ready stock",
    photo: P + "ferro-magnese.webp",
    note: "High-grade 75% manganese. 100% pure quality and ready stock in warehouse.",
    origin: "India",
    specs: [
      { k: "Mn", v: "75 – 78%" },
      { k: "C max", v: "7.5%" },
      { k: "Size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Manganese (Mn)", v: "75 – 78%" },
      { k: "Carbon (C) max", v: "7.5%" },
      { k: "Silicon (Si) max", v: "1.5%" },
      { k: "Sulphur (S) max", v: "0.03%" },
      { k: "Phosphorus (P) max", v: "0.35%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeMn HC 75" },
      { k: "Lump size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "India" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Manganese addition",
        b: "Essential alloying element for increasing tensile strength and toughness in structural steel.",
      },
      {
        n: "02",
        t: "Desulphurization",
        b: "Combines with harmful sulphur in molten iron to form MnS, improving melt fluidity and workability.",
      },
      {
        n: "03",
        t: "Wear resistance",
        b: "Imparts severe impact and abrasive wear resistance in cast manganese steel components.",
      },
      {
        n: "04",
        t: "Foundry ladle addition",
        b: "Used for precise ladle trimming of Mn levels in grey iron and ductile iron castings.",
      },
    ],
  },
  {
    name: "Ferro Silico Manganese",
    slug: "ferro-silico-manganese",
    category: "ferro",
    use: "Combined Si + Mn",
    status: "Fresh arrival",
    photo: P + "ferro-magnese.webp",
    note: "High-grade silicon-manganese. Fresh arrival with ready stock and guaranteed purity.",
    origin: "India",
    specs: [
      { k: "Mn", v: "60 – 65%" },
      { k: "Si", v: "14 – 17%" },
      { k: "Size", v: "10 – 60 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Manganese (Mn)", v: "60 – 65%" },
      { k: "Silicon (Si)", v: "14 – 17%" },
      { k: "Carbon (C) max", v: "2.5%" },
      { k: "Phosphorus (P) max", v: "0.3%" },
      { k: "Sulphur (S) max", v: "0.03%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "SiMn 60/14" },
      { k: "Lump size", v: "10 – 60 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "India" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Combined deoxidation",
        b: "Provides simultaneous silicon and manganese deoxidation, resulting in cleaner steel inclusions.",
      },
      {
        n: "02",
        t: "Cost-effective alloying",
        b: "More economical than adding separate Ferro Silicon and Ferro Manganese in furnace charges.",
      },
      {
        n: "03",
        t: "Billet & Rebar casting",
        b: "Widely used in induction furnaces for carbon steel ingot and billet manufacturing.",
      },
      {
        n: "04",
        t: "Slag fluidity",
        b: "Helps maintain liquid slag consistency and promotes efficient refining during melt treatment.",
      },
    ],
  },
  {
    name: "Ferro Chrome HC 60%",
    slug: "ferro-chrome-hc-60",
    category: "ferro",
    use: "Stainless, wear parts",
    status: "Ready stock",
    photo: P + "ferro-Chrome-high-carbon-webp.webp",
    note: "Premium high carbon (60%) grade. Direct import with ready stock available.",
    origin: "South Africa",
    specs: [
      { k: "Cr", v: "60 – 65%" },
      { k: "C max", v: "8.0%" },
      { k: "Size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Chromium (Cr)", v: "60 – 65%" },
      { k: "Carbon (C) max", v: "8.0%" },
      { k: "Silicon (Si) max", v: "1.5%" },
      { k: "Sulphur (S) max", v: "0.04%" },
      { k: "Phosphorus (P) max", v: "0.04%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeCr HC 60" },
      { k: "Lump size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "South Africa" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Corrosion resistance",
        b: "Primary chromium source for stainless steel and heat-resistant alloy cast components.",
      },
      {
        n: "02",
        t: "High-hardness castings",
        b: "Increases hardness and wear resistance in crushers, grinding balls, and pump impellers.",
      },
      {
        n: "03",
        t: "Alloy cast iron",
        b: "Stabilizes carbides in high-chromium white irons for extreme abrasive environments.",
      },
      {
        n: "04",
        t: "Heat resistance",
        b: "Prevents high-temperature scaling and oxidation in furnace castings and grate bars.",
      },
    ],
  },
  {
    name: "Ferro Chrome LC 60%",
    slug: "ferro-chrome-lc-60",
    category: "ferro",
    use: "Stainless casting",
    status: "Certified",
    photo: P + "ferro-Chrome-high-carbon-webp.webp",
    note: "Specialised low carbon (60%) grade. Certified quality for stainless casting.",
    origin: "China",
    specs: [
      { k: "Cr", v: "60 – 65%" },
      { k: "C max", v: "0.10%" },
      { k: "Size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Chromium (Cr)", v: "60 – 65%" },
      { k: "Carbon (C) max", v: "0.10%" },
      { k: "Silicon (Si) max", v: "1.0%" },
      { k: "Sulphur (S) max", v: "0.03%" },
      { k: "Phosphorus (P) max", v: "0.03%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeCr LC 60" },
      { k: "Lump size", v: "10 – 50 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Low-carbon stainless",
        b: "Allows chromium addition to low-carbon stainless grades (304L, 316L) without carbon pickup.",
      },
      {
        n: "02",
        t: "High-spec valve castings",
        b: "Used for precision corrosion-resistant valves and chemical processing equipment.",
      },
      {
        n: "03",
        t: "Specialty tool steel",
        b: "Essential element in air-hardening tool steels and die-casting moulds.",
      },
      {
        n: "04",
        t: "Precision foundry melts",
        b: "Ensures tight chemical specification control in high-performance induction melts.",
      },
    ],
  },
  {
    name: "Manganese Metal Flakes",
    slug: "manganese-metal-flakes",
    category: "ferro",
    use: "High-purity Mn",
    status: "Vacuum packed",
    photo: P + "ferro-magnese.webp",
    note: "High purity manganese flakes. Fresh arrival, vacuum-packed and ready to ship.",
    origin: "China",
    specs: [
      { k: "Mn min", v: "99.7%" },
      { k: "Fe / C max", v: "0.03% / 0.04%" },
      { k: "Flake size", v: "10 – 50 mm" },
      { k: "Packing", v: "25 kg vacuum bag" },
    ],
    chem: [
      { k: "Manganese (Mn) min", v: "99.7%" },
      { k: "Carbon (C) max", v: "0.04%" },
      { k: "Sulphur (S) max", v: "0.05%" },
      { k: "Phosphorus (P) max", v: "0.005%" },
      { k: "Iron (Fe) max", v: "0.03%" },
      { k: "Trace elements", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "Mn Flakes 99.7%" },
      { k: "Flake size", v: "10 – 50 mm" },
      { k: "Packing", v: "25 kg vacuum bag / 1 MT pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "100 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Ultra-pure manganese",
        b: "Used when iron or carbon additions must be strictly minimized during melting.",
      },
      {
        n: "02",
        t: "Aluminium master alloying",
        b: "Feedstock for high-strength aluminium manganese alloys (3000 series sheet & foil).",
      },
      {
        n: "03",
        t: "Specialty non-ferrous melts",
        b: "Crucial additive for manganese bronze and high-tensile brass forging ingots.",
      },
      {
        n: "04",
        t: "Welding rod formulation",
        b: "Used in flux coatings and cored wires for heavy structural welding electrodes.",
      },
    ],
  },
  {
    name: "Carburizer",
    slug: "carburizer",
    category: "ferro",
    use: "Carbon raiser",
    status: "Regular stock",
    photo: P + "ferro-magnese.webp",
    note: "High carbon content, low ash. Regular stock available for all foundry needs.",
    origin: "China",
    specs: [
      { k: "C min", v: "98%" },
      { k: "Ash / S max", v: "1.0% / 0.5%" },
      { k: "Size", v: "1 – 5 mm" },
      { k: "Packing", v: "25 kg bag" },
    ],
    chem: [
      { k: "Fixed Carbon (C) min", v: "98.0%" },
      { k: "Ash content max", v: "1.0%" },
      { k: "Volatile matter max", v: "1.0%" },
      { k: "Sulphur (S) max", v: "0.5%" },
      { k: "Moisture max", v: "0.5%" },
    ],
    supply: [
      { k: "Grade", v: "Graphitized Recarburizer" },
      { k: "Particle size", v: "1 – 5 mm" },
      { k: "Packing", v: "25 kg bag / 1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "500 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Rapid carbon recovery",
        b: "High fixed carbon ensures rapid dissolution and recovery rates exceeding 90% in melt.",
      },
      {
        n: "02",
        t: "Ductile iron carbon raising",
        b: "Adjusts carbon equivalent in electric induction furnace charges without adding impurities.",
      },
      {
        n: "03",
        t: "Steel ladle recarburization",
        b: "Trims carbon levels precisely in steel ladles prior to continuous casting.",
      },
      {
        n: "04",
        t: "Low ash slag control",
        b: "Minimal ash generation protects furnace refractory linings from chemical erosion.",
      },
    ],
  },
  {
    name: "Graphite Bags",
    slug: "graphite-bags",
    category: "ferro",
    use: "Carbon raiser",
    status: "Ready stock",
    photo: P + "graphite-crucible-768x768.webp",
    note: "50 kg bags available. High-purity crystalline graphite with ready stock.",
    origin: "China",
    specs: [
      { k: "C", v: "98 – 99%" },
      { k: "Ash max", v: "1.0%" },
      { k: "Moisture max", v: "0.5%" },
      { k: "Packing", v: "50 kg bag" },
    ],
    chem: [
      { k: "Carbon (C)", v: "98 – 99%" },
      { k: "Ash max", v: "1.0%" },
      { k: "Moisture max", v: "0.5%" },
      { k: "Volatile matter max", v: "0.5%" },
    ],
    supply: [
      { k: "Grade", v: "Natural Crystalline Graphite" },
      { k: "Mesh size", v: "80 – 100 Mesh" },
      { k: "Packing", v: "50 kg bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Foundry refractory wash",
        b: "Used as refractory coating material for moulds and cores to prevent metal penetration.",
      },
      {
        n: "02",
        t: "High-grade carbon additive",
        b: "Clean graphite powder for specialized carbon additions in precision metallurgy.",
      },
      {
        n: "03",
        t: "Lubricant formulation",
        b: "Excellent thermal stability for high-temperature foundry release agents.",
      },
      {
        n: "04",
        t: "Ladle cover powder",
        b: "Acts as insulating cover on molten metal ladles to minimize radiant heat loss.",
      },
    ],
  },
  {
    name: "Ferro Silico Magnesium",
    slug: "ferro-silico-magnesium",
    category: "ferro",
    use: "Nodulariser, SG iron",
    status: "Fresh stock",
    photo: P + "ferro-silico-magnesium-webp.webp",
    note: "Premium magnesium-silicon grade. 100% pure material, fresh stock and ready for delivery.",
    origin: "China",
    specs: [
      { k: "Mg", v: "5 – 7%" },
      { k: "Si", v: "44 – 48%" },
      { k: "Ca / RE", v: "0.8 – 1.5% / 0.8 – 1.2%" },
      { k: "Size", v: "3 – 25 mm" },
    ],
    chem: [
      { k: "Magnesium (Mg)", v: "5 – 7%" },
      { k: "Silicon (Si)", v: "44 – 48%" },
      { k: "Calcium (Ca)", v: "0.8 – 1.5%" },
      { k: "Rare Earth (RE)", v: "0.8 – 1.2%" },
      { k: "Aluminium (Al) max", v: "1.0%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeSiMg 6%" },
      { k: "Size", v: "3 – 25 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Ductile iron nodularization",
        b: "Transforms graphite flakes into spheroidal nodules, dramatically raising tensile strength.",
      },
      {
        n: "02",
        t: "SG Iron pipe & automotive",
        b: "Essential alloy for producing SG iron pipes, crankshafts, and heavy machinery castings.",
      },
      {
        n: "03",
        t: "Rare Earth stabilization",
        b: "Contains RE elements to neutralize deleterious trace elements like lead and bismuth.",
      },
      {
        n: "04",
        t: "Controlled reaction",
        b: "Sized for optimal sandwich or tundish-cover ladle treatment with smooth reaction rates.",
      },
    ],
  },
];

export const nonferro: Product[] = [
  {
    name: "Silicon Metal 441",
    slug: "silicon-metal-441",
    category: "non-ferro",
    use: "Si addition, aluminium",
    status: "Ready stock",
    photo: P + "silicon-metal-webp-768x768.webp",
    note: "High-purity silicon metal. Stock available in warehouse for immediate delivery.",
    origin: "China",
    specs: [
      { k: "Si min", v: "99.0%" },
      { k: "Fe / Al / Ca max", v: "0.4% / 0.4% / 0.1%" },
      { k: "Size", v: "10 – 100 mm lump" },
      { k: "Packing", v: "1 MT jumbo bag" },
    ],
    chem: [
      { k: "Silicon (Si) min", v: "99.0%" },
      { k: "Iron (Fe) max", v: "0.4%" },
      { k: "Aluminium (Al) max", v: "0.4%" },
      { k: "Calcium (Ca) max", v: "0.1%" },
    ],
    supply: [
      { k: "Grade", v: "Si Metal 441" },
      { k: "Lump size", v: "10 – 100 mm" },
      { k: "Packing", v: "1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Aluminium alloy casting",
        b: "Primary alloying element for casting aluminium engine blocks, pistons, and wheels.",
      },
      {
        n: "02",
        t: "Fluidity enhancement",
        b: "Improves molten aluminium fluidity and reduces thermal contraction during mould cooling.",
      },
      {
        n: "03",
        t: "Chemical industry raw material",
        b: "High purity suitable for silicone synthesis and chemical reagent formulations.",
      },
      {
        n: "04",
        t: "Secondary aluminium smelting",
        b: "Essential for adjusting silicon ratio in recycled scrap aluminium ingot production.",
      },
    ],
  },
  {
    name: "Aluminium Silicon 50/50",
    slug: "aluminium-silicon-50-50",
    category: "non-ferro",
    use: "Master alloy",
    status: "A+ grade",
    photo: P + "master-alloy-AlNI-8020-webp.webp",
    note: "A+ grade aluminium silicon master alloy. Guaranteed purity with ready stock and fast delivery.",
    origin: "China",
    specs: [
      { k: "Si", v: "48 – 52%" },
      { k: "Al", v: "Balance" },
      { k: "Fe max", v: "0.5%" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
    ],
    chem: [
      { k: "Silicon (Si)", v: "48 – 52%" },
      { k: "Aluminium (Al)", v: "Balance" },
      { k: "Iron (Fe) max", v: "0.5%" },
      { k: "Manganese (Mn) max", v: "0.2%" },
    ],
    supply: [
      { k: "Grade", v: "AlSi 50/50" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
      { k: "Packing", v: "1 MT pallet / bundle" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "500 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Low-temperature Si addition",
        b: "Dissolves rapidly at lower melt temperatures compared to pure silicon metal lumps.",
      },
      {
        n: "02",
        t: "Hypereutectic alloy prep",
        b: "Used for precise silicon adjustment in high-silicon automotive casting alloys.",
      },
      {
        n: "03",
        t: "Uniform distribution",
        b: "Pre-alloyed matrix prevents silicon segregation and ensures homogenous melt chemistry.",
      },
      {
        n: "04",
        t: "Reduced furnace dross",
        b: "Fast melting minimizes oxidation losses and reduces dross formation in the pot.",
      },
    ],
  },
  {
    name: "Aluminium Copper 40/60",
    slug: "aluminium-copper-40-60",
    category: "non-ferro",
    use: "Master alloy",
    status: "Ready stock",
    photo: P + "copper-phosphorus-webp.webp",
    note: "Premium 40/60 grade copper alloy. Direct import with wholesale rates and ready stock.",
    origin: "China",
    specs: [
      { k: "Cu", v: "38 – 42%" },
      { k: "Al", v: "Balance" },
      { k: "Fe max", v: "0.4%" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
    ],
    chem: [
      { k: "Copper (Cu)", v: "38 – 42%" },
      { k: "Aluminium (Al)", v: "Balance" },
      { k: "Iron (Fe) max", v: "0.4%" },
      { k: "Silicon (Si) max", v: "0.2%" },
    ],
    supply: [
      { k: "Grade", v: "AlCu 40/60" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
      { k: "Packing", v: "1 MT pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Copper alloying",
        b: "Efficiently introduces copper into 2000 and 3000 series aerospace and structural alloys.",
      },
      {
        n: "02",
        t: "Hardness & Strength",
        b: "Increases room-temperature and high-temperature mechanical strength of aluminium castings.",
      },
      {
        n: "03",
        t: "Machinability booster",
        b: "Enhances chip breaking and surface finish quality during CNC machining of cast parts.",
      },
      {
        n: "04",
        t: "Controlled solubility",
        b: "Prevents high melting point copper sinking to the bottom of the melting furnace.",
      },
    ],
  },
  {
    name: "Aluminium Nickel 80/20",
    slug: "aluminium-nickel-80-20",
    category: "non-ferro",
    use: "Master alloy",
    status: "Fresh arrival",
    photo: P + "master-alloy-AlNI-8020-webp.webp",
    note: "High-quality 80/20 aluminium nickel alloy. Fresh arrival, 100% pure, stock ready in warehouse.",
    origin: "China",
    specs: [
      { k: "Ni", v: "18 – 22%" },
      { k: "Al", v: "Balance" },
      { k: "Fe max", v: "0.4%" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
    ],
    chem: [
      { k: "Nickel (Ni)", v: "18 – 22%" },
      { k: "Aluminium (Al)", v: "Balance" },
      { k: "Iron (Fe) max", v: "0.4%" },
      { k: "Silicon (Si) max", v: "0.2%" },
    ],
    supply: [
      { k: "Grade", v: "AlNi 80/20" },
      { k: "Form", v: "Waffle ingot, ~5 kg" },
      { k: "Packing", v: "1 MT pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "High-temperature pistons",
        b: "Essential additive for heavy-duty diesel engine pistons requiring high heat resistance.",
      },
      {
        n: "02",
        t: "Thermal expansion control",
        b: "Lowers thermal expansion coefficient in automotive engine components subjected to thermal cycles.",
      },
      {
        n: "03",
        t: "Wear-resistant alloys",
        b: "Forms nickel aluminide intermetallic phases that significantly reduce friction and wear.",
      },
      {
        n: "04",
        t: "Homogeneous dissolution",
        b: "Bypasses the high 1455°C melting point of pure nickel metal in aluminium holding pots.",
      },
    ],
  },
  {
    name: "Manganese Metal Ingot",
    slug: "manganese-metal-ingot",
    category: "non-ferro",
    use: "Mn addition",
    status: "Fresh stock",
    photo: P + "ferro-magnese.webp",
    note: "High-purity manganese metal ingots. Fresh stock available for immediate delivery.",
    origin: "China",
    specs: [
      { k: "Mn min", v: "99.7%" },
      { k: "Fe max", v: "0.03%" },
      { k: "Form", v: "Ingot, ~10 kg" },
      { k: "Packing", v: "Steel strapped bundle" },
    ],
    chem: [
      { k: "Manganese (Mn) min", v: "99.7%" },
      { k: "Iron (Fe) max", v: "0.03%" },
      { k: "Carbon (C) max", v: "0.04%" },
      { k: "Sulphur (S) max", v: "0.05%" },
    ],
    supply: [
      { k: "Grade", v: "Mn Metal Ingot 99.7%" },
      { k: "Form", v: "Ingot, ~10 kg" },
      { k: "Packing", v: "Steel strapped bundle / 1 MT" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "500 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Copper alloy additive",
        b: "Key constituent in manganese bronze propellers and heavy marine hardware castings.",
      },
      {
        n: "02",
        t: "Aluminium strain hardening",
        b: "Improves work hardening characteristics in sheet and extrusion aluminium alloys.",
      },
      {
        n: "03",
        t: "Clean melt addition",
        b: "Heavy ingot form ensures easy immersion beneath the molten bath surface.",
      },
      {
        n: "04",
        t: "Specialty brasses",
        b: "Enhances corrosion resistance and tensile strength in high-load brass bushings.",
      },
    ],
  },
  {
    name: "Copper Phosphorus",
    slug: "copper-phosphorus",
    category: "non-ferro",
    use: "Copper deoxidation",
    status: "Fresh arrival",
    photo: P + "copper-phosphorus-webp.webp",
    note: "Premium grade copper phosphorus. Fresh arrival with guaranteed purity and ready stock.",
    origin: "China",
    specs: [
      { k: "P", v: "14 – 15%" },
      { k: "Cu", v: "Balance" },
      { k: "Form", v: "Shot or plate" },
      { k: "Packing", v: "25 kg drum" },
    ],
    chem: [
      { k: "Phosphorus (P)", v: "14 – 15%" },
      { k: "Copper (Cu)", v: "Balance" },
      { k: "Iron (Fe) max", v: "0.1%" },
      { k: "Lead (Pb) max", v: "0.02%" },
    ],
    supply: [
      { k: "Grade", v: "CuP 14%" },
      { k: "Form", v: "Shot / Waffle plate" },
      { k: "Packing", v: "25 kg drum / 500 kg pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "100 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Copper melt deoxidation",
        b: "Efficiently removes cuprous oxide from copper and bronze melts prior to pouring.",
      },
      {
        n: "02",
        t: "Eutectic modification",
        b: "Acts as grain refiner and modifier in hypereutectic aluminium-silicon alloys.",
      },
      {
        n: "03",
        t: "Brazing alloy production",
        b: "Vital raw material for manufacturing copper-phosphorus self-fluxing brazing rods.",
      },
      {
        n: "04",
        t: "Improved casting soundness",
        b: "Eliminates gas porosity and increases pressure tightness in cast bronze fittings.",
      },
    ],
  },
];

export const ranges: Range[] = [
  {
    kicker: "9 grades in stock",
    title: "Ferro Alloys",
    body: "High-grade ferro alloys for iron and steel casting units. Ferro silicon, ferro manganese, silico manganese, chrome.",
    photo: P + "ferro-magnese.webp",
    chips: ["FeSi 75%", "FeMn 75%", "FeCr 60%", "Nodulariser"],
  },
  {
    kicker: "6 grades in stock",
    title: "Non-Ferro Alloys",
    body: "Master alloys and ingots for alloy wheels, car pistons and aluminium engine parts. Silicon metal, AlSi, AlCu, AlNi.",
    photo: P + "master-alloy-AlNI-8020-webp.webp",
    chips: ["Si 441", "AlSi 50/50", "AlCu 40/60", "CuP 14%"],
  },
  {
    kicker: "All sizes",
    title: "Graphite Crucibles",
    body: "Clay-graphite and SiC crucibles that take extreme furnace heat without cracking. Small sizes to heavy foundry sizes.",
    photo: P + "graphite-crucible-768x768.webp",
    chips: ["#1 – #400", "1600°C", "Ready stock"],
  },
];

export const board: BoardItem[] = [
  {
    name: "Ferro Silicon",
    grade: "Si 72–80%",
    size: "10–50 mm",
    pack: "1 MT jumbo bag",
    status: "Ready stock",
  },
  {
    name: "Ferro Manganese HC",
    grade: "Mn 75–78%",
    size: "10–50 mm",
    pack: "1 MT jumbo bag",
    status: "Ready stock",
  },
  {
    name: "Ferro Silico Manganese",
    grade: "Mn 60–65% / Si 14–17%",
    size: "10–60 mm",
    pack: "1 MT jumbo bag",
    status: "Fresh arrival",
  },
  {
    name: "Silicon Metal 441",
    grade: "Si 99.0% min",
    size: "10–100 mm",
    pack: "1 MT jumbo bag",
    status: "Ready stock",
  },
  {
    name: "Aluminium Nickel 80/20",
    grade: "Ni 18–22%",
    size: "Waffle ingot",
    pack: "10 kg ingot",
    status: "Fresh arrival",
  },
  {
    name: "Graphite Crucibles",
    grade: "Clay-graphite / SiC",
    size: "#1 – #400",
    pack: "Single carton",
    status: "All sizes",
  },
];

export const promises: string[] = [
  "Ready stock available",
  "Lab tested quality",
  "Best wholesale rates",
  "No hidden costs",
  "100% pure materials",
  "Trusted by foundries",
  "Direct from importers",
  "Weekly rate updates",
  "Fast nationwide delivery",
  "Honest business dealing",
];

export const cruciblePoints: string[] = [
  "High thermal conductivity, excellent resistance to cracking",
  "All standard sizes held in the warehouse",
  "Small sizes for precious metals to heavy foundry sizes",
  "Suits aluminium, brass, copper and iron melting",
  "Ready for delivery across Pakistan",
];

export const crucibleSizes: CrucibleSize[] = [
  {
    no: "#4",
    dia: "95 mm",
    h: "120 mm",
    cap: "1.5 kg",
    use: "Jewellery, precious metals",
  },
  {
    no: "#10",
    dia: "125 mm",
    h: "160 mm",
    cap: "4 kg",
    use: "Small workshop melts",
  },
  {
    no: "#20",
    dia: "160 mm",
    h: "205 mm",
    cap: "8 kg",
    use: "Brass, copper casting",
  },
  {
    no: "#40",
    dia: "200 mm",
    h: "255 mm",
    cap: "16 kg",
    use: "Aluminium casting units",
  },
  {
    no: "#100",
    dia: "270 mm",
    h: "345 mm",
    cap: "40 kg",
    use: "Production aluminium",
  },
  {
    no: "#200",
    dia: "340 mm",
    h: "430 mm",
    cap: "80 kg",
    use: "Heavy aluminium, brass",
  },
  {
    no: "#400",
    dia: "430 mm",
    h: "540 mm",
    cap: "160 kg",
    use: "Iron and large foundry",
  },
];

export const crucibleSpecs: CrucibleSpec[] = [
  {
    kicker: "Material",
    title: "Clay graphite",
    rows: [
      { k: "Graphite content", v: "35 – 45%" },
      { k: "Max temperature", v: "1400 °C" },
      { k: "Best for", v: "Aluminium, brass, zinc" },
    ],
  },
  {
    kicker: "Material",
    title: "Silicon carbide",
    rows: [
      { k: "SiC bonded", v: "Yes" },
      { k: "Max temperature", v: "1600 °C" },
      { k: "Best for", v: "Copper, iron, steel" },
    ],
  },
  {
    kicker: "Handling",
    title: "Care & life",
    rows: [
      { k: "First-use bake", v: "Required" },
      { k: "Storage", v: "Dry, off the floor" },
      { k: "Typical life", v: "By duty cycle" },
    ],
  },
];

export const proof: ProofPoint[] = [
  {
    t: "Certificate of analysis",
    b: "Lot-wise COA issued with every quotation",
  },
  {
    t: "Import documents",
    b: "Bill of entry and country of origin on request",
  },
  { t: "Warehouse, Lahore", b: "Photograph of held stock" },
  { t: "Loading &amp; dispatch", b: "Photograph of a dispatch in progress" },
];

export const pillars: Pillar[] = [
  {
    n: "01",
    t: "Large inventory",
    b: "Warehouses kept full so large quantities are available on the day you call, not next month.",
  },
  {
    n: "02",
    t: "Direct sourcing",
    b: "We import directly and remove the middleman, then pass the saving straight to your factory.",
  },
  {
    n: "03",
    t: "Ready for delivery",
    b: "Lahore, Gujranwala, Faisalabad or Karachi — your order reaches the gate on time.",
  },
  {
    n: "04",
    t: "Tested, documented",
    b: "Lab-tested lots with a certificate of analysis and import papers on request.",
  },
];

// Helper to compute related products for any given product
export function getRelatedProducts(product: Product): {
  name: string;
  grade: string;
  photo: string;
  href: string;
}[] {
  const allProducts = [...ferro, ...nonferro];
  // Filter out current product
  const candidates = allProducts.filter((p) => p.slug !== product.slug);

  // Pick items from same category first, then cross category / crucibles
  const sameCat = candidates.filter((p) => p.category === product.category);
  const diffCat = candidates.filter((p) => p.category !== product.category);

  const selected: { name: string; grade: string; photo: string; href: string }[] =
    [];

  if (sameCat.length > 0) {
    selected.push({
      name: sameCat[0].name,
      grade: sameCat[0].specs[0]
        ? `${sameCat[0].specs[0].k} ${sameCat[0].specs[0].v}`
        : sameCat[0].use,
      photo: sameCat[0].photo,
      href: `/${sameCat[0].category === "ferro" ? "ferro-alloys" : "non-ferro-alloys"}/${sameCat[0].slug}`,
    });
  }

  if (sameCat.length > 1) {
    selected.push({
      name: sameCat[1].name,
      grade: sameCat[1].specs[0]
        ? `${sameCat[1].specs[0].k} ${sameCat[1].specs[0].v}`
        : sameCat[1].use,
      photo: sameCat[1].photo,
      href: `/${sameCat[1].category === "ferro" ? "ferro-alloys" : "non-ferro-alloys"}/${sameCat[1].slug}`,
    });
  }

  if (diffCat.length > 0) {
    selected.push({
      name: diffCat[0].name,
      grade: diffCat[0].specs[0]
        ? `${diffCat[0].specs[0].k} ${diffCat[0].specs[0].v}`
        : diffCat[0].use,
      photo: diffCat[0].photo,
      href: `/${diffCat[0].category === "ferro" ? "ferro-alloys" : "non-ferro-alloys"}/${diffCat[0].slug}`,
    });
  }

  // Always add Graphite Crucibles as 4th related option if space allows
  selected.push({
    name: "Graphite Crucibles",
    grade: "Clay-graphite & SiC · #1 to #400",
    photo: P + "graphite-crucible-768x768.webp",
    href: "/graphite-crucibles",
  });

  return selected.slice(0, 4);
}

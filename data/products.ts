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
  category: "ferro" | "non-ferro" | "master-alloys" | "metals" | "fluxes";
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
  tagline: "High-Grade Ferro Alloys, Non-Ferro Alloys, Master Alloys, Pure Metals, Fluxes & Crucibles",
  description:
    "A Lahore-based trading company specialised in high-grade ferro alloys, non-ferro alloys, master alloys, pure metals, foundry fluxes and crucibles for iron, steel, aluminium and copper foundries across Pakistan.",
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

const P = "/products/";

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
    photo: P + "ferro-silicon-72.webp",
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
    photo: P + "ferro-manganese-75.webp",
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
    photo: P + "ferro-silico-manganese-extra.webp",
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
    photo: P + "ferro-chrome-hc-60.webp",
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
    photo: P + "ferro-chrome-lc-60.webp",
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
    photo: P + "manganese-metal-flakes.webp",
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
    photo: P + "carburizer.webp",
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
    photo: P + "carbon-coke.webp",
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
    photo: P + "ferro-silico-magnesium-extra.webp",
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
  {
    name: "Ferro Silicon Inoculant",
    slug: "ferro-silicon-inoculant",
    category: "ferro",
    use: "Grey & ductile iron inoculation",
    status: "Ready stock",
    photo: P + "ferro-silicon-inoculant.webp",
    note: "High-performance FeSi inoculant. Promotes A-type graphite flakes and eliminates chill in thin castings.",
    origin: "China",
    specs: [
      { k: "Si", v: "70 – 75%" },
      { k: "Ba / Ca", v: "1.5 – 3.0%" },
      { k: "Size", v: "0.2 – 0.7 mm / 1 – 3 mm" },
      { k: "Packing", v: "25 kg bag / 1 MT" },
    ],
    chem: [
      { k: "Silicon (Si)", v: "70 – 75%" },
      { k: "Barium / Calcium", v: "1.5 – 3.0%" },
      { k: "Aluminium (Al) max", v: "1.2%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeSi Inoculant" },
      { k: "Size", v: "0.2 – 0.7 mm" },
      { k: "Packing", v: "25 kg bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Chill prevention",
        b: "Eliminates hard iron carbides (chill) in thin-walled grey and ductile iron castings.",
      },
      {
        n: "02",
        t: "Graphite structure refinement",
        b: "Promotes uniform Type-A graphite flake distribution and increases nodule count in SG iron.",
      },
      {
        n: "03",
        t: "Late stream inoculation",
        b: "Ideal particle sizing for in-stream or ladle additions just prior to pouring.",
      },
      {
        n: "04",
        t: "Fade resistance",
        b: "Barium/calcium additions provide excellent resistance to inoculation fading during extended pouring times.",
      },
    ],
  },
  {
    name: "Ferro Molybdenum",
    slug: "ferro-molybdenum",
    category: "ferro",
    use: "High-strength alloy steel",
    status: "Imported grade",
    photo: P + "ferro-molybdenum.webp",
    note: "High purity 60% Ferro Molybdenum. Enhances high-temperature strength and creep resistance.",
    origin: "Chile / China",
    specs: [
      { k: "Mo min", v: "60.0%" },
      { k: "Cu / Si max", v: "0.5% / 2.0%" },
      { k: "Size", v: "10 – 50 mm" },
      { k: "Packing", v: "100 kg steel drum" },
    ],
    chem: [
      { k: "Molybdenum (Mo) min", v: "60.0%" },
      { k: "Copper (Cu) max", v: "0.5%" },
      { k: "Silicon (Si) max", v: "2.0%" },
      { k: "Carbon (C) max", v: "0.1%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "FeMo 60" },
      { k: "Lump size", v: "10 – 50 mm" },
      { k: "Packing", v: "100 kg steel drum" },
      { k: "Origin", v: "Chile" },
      { k: "Minimum order", v: "100 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "High-temperature strength",
        b: "Increases creep strength and heat resistance in boiler and turbine steel castings.",
      },
      {
        n: "02",
        t: "Temper brittleness reduction",
        b: "Suppresses temper embrittlement in quenched and tempered alloy steels.",
      },
      {
        n: "03",
        t: "Pitting corrosion resistance",
        b: "Essential element in 316-grade stainless steel to resist chloride pitting.",
      },
      {
        n: "04",
        t: "Tool steel hardening",
        b: "Improves hardenability and wear resistance in high-speed tool steels.",
      },
    ],
  },
  {
    name: "Pig Iron",
    slug: "pig-iron",
    category: "ferro",
    use: "Foundry charge base",
    status: "Ready stock",
    photo: P + "pig-iron.webp",
    note: "High-purity foundry grade pig iron. Low trace elements, ideal for ductile and grey iron melting.",
    origin: "Brazil / India",
    specs: [
      { k: "C", v: "3.8 – 4.5%" },
      { k: "Si", v: "1.5 – 2.5%" },
      { k: "S / P max", v: "0.03% / 0.08%" },
      { k: "Form", v: "Ingot / pig, ~5–10 kg" },
    ],
    chem: [
      { k: "Carbon (C)", v: "3.8 – 4.5%" },
      { k: "Silicon (Si)", v: "1.5 – 2.5%" },
      { k: "Manganese (Mn)", v: "0.2 – 0.5%" },
      { k: "Sulphur (S) max", v: "0.03%" },
      { k: "Phosphorus (P) max", v: "0.08%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "Foundry Grade Pig Iron" },
      { k: "Form", v: "Pig ingot (~7 kg)" },
      { k: "Packing", v: "Loose bulk / 1 MT bundle" },
      { k: "Origin", v: "Brazil" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Clean furnace charge",
        b: "Provides clean iron base free from tramp element contaminants common in scrap steel.",
      },
      {
        n: "02",
        t: "SG Iron base melting",
        b: "Low sulphur and low phosphorus content make it essential for nodular ductile iron production.",
      },
      {
        n: "03",
        t: "Consistent melt chemistry",
        b: "Delivers predictable carbon and silicon levels to stabilize cupola and induction furnace heats.",
      },
      {
        n: "04",
        t: "Reduced gas defects",
        b: "Low nitrogen and hydrogen content minimizes gas porosity in heavy section iron castings.",
      },
    ],
  },
  {
    name: "Steel Shot & Grit",
    slug: "steel-shot",
    category: "ferro",
    use: "Surface cleaning, shot blasting",
    status: "Ready stock",
    photo: P + "steel-shot.webp",
    note: "High-carbon cast steel shot. High durability and uniform hardness for shot blasting machines.",
    origin: "China",
    specs: [
      { k: "Hardness", v: "40 – 50 HRC" },
      { k: "Size", v: "S110 – S780 (0.3 – 2.0 mm)" },
      { k: "Density min", v: "7.4 g/cm³" },
      { k: "Packing", v: "25 kg bag / 1 MT" },
    ],
    chem: [
      { k: "Carbon (C)", v: "0.80 – 1.20%" },
      { k: "Manganese (Mn)", v: "0.60 – 1.20%" },
      { k: "Silicon (Si)", v: "0.40 – 1.20%" },
      { k: "Sulphur & Phosphorus max", v: "0.05%" },
      { k: "Iron (Fe)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "Cast Steel Shot S230/S330/S390" },
      { k: "Size", v: "0.6 – 1.4 mm" },
      { k: "Packing", v: "25 kg bag / 1 MT pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Casting sand removal",
        b: "Cleans burnt moulding sand and heat-treat scale from grey and ductile iron castings.",
      },
      {
        n: "02",
        t: "Shot peening",
        b: "Imparts compressive residual stress on automotive gears and springs to increase fatigue life.",
      },
      {
        n: "03",
        t: "Surface preparation",
        b: "Creates optimal surface anchor profile prior to industrial painting or galvanising.",
      },
      {
        n: "04",
        t: "Reusable abrasive",
        b: "High impact resistance allows recycling up to 3000 cycles in centrifugal wheel blast units.",
      },
    ],
  },
  {
    name: "Foundry Coke",
    slug: "foundry-coke",
    category: "ferro",
    use: "Cupola furnace fuel & carbon",
    status: "Ready stock",
    photo: P + "foundry-coke.webp",
    note: "High fixed carbon foundry coke. Low ash and high mechanical strength for cupola furnaces.",
    origin: "China",
    specs: [
      { k: "Fixed C min", v: "88.0%" },
      { k: "Ash max", v: "10.0%" },
      { k: "S max", v: "0.6%" },
      { k: "Lump size", v: "60 – 120 mm" },
    ],
    chem: [
      { k: "Fixed Carbon (C) min", v: "88.0%" },
      { k: "Ash content max", v: "10.0%" },
      { k: "Volatile Matter max", v: "1.5%" },
      { k: "Sulphur (S) max", v: "0.6%" },
      { k: "Moisture max", v: "5.0%" },
    ],
    supply: [
      { k: "Grade", v: "Hard Metallurgical Foundry Coke" },
      { k: "Size", v: "80 – 120 mm" },
      { k: "Packing", v: "Bulk / 1 MT jumbo bag" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "1 MT" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Cupola furnace fuel",
        b: "Provides primary combustion thermal heat to melt iron scrap charges in cupola furnaces.",
      },
      {
        n: "02",
        t: "Furnace bed support",
        b: "High crushing strength supports heavy iron charges without premature degradation.",
      },
      {
        n: "03",
        t: "Melt recarburization",
        b: "Supplies carbon to liquid iron droplets as they pass through the coke bed.",
      },
      {
        n: "04",
        t: "Permeable gas passage",
        b: "Uniform sizing maintains gas permeability for efficient cupola blast air flow.",
      },
    ],
  },
];

export const nonferro: Product[] = [
  {
    name: "Manganese Metal Ingot",
    slug: "manganese-metal-ingot",
    category: "non-ferro",
    use: "Mn addition",
    status: "Fresh stock",
    photo: P + "manganese-metal-flakes.webp",
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
    photo: P + "copper-phosphorus.webp",
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

export const masterAlloys: Product[] = [
  {
    name: "Aluminium Silicon 50/50",
    slug: "aluminium-silicon-50-50",
    category: "master-alloys",
    use: "Master alloy",
    status: "A+ grade",
    photo: P + "aluminium-silicon-50-50.webp",
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
    category: "master-alloys",
    use: "Master alloy",
    status: "Ready stock",
    photo: P + "aluminium-copper-40-60.webp",
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
    category: "master-alloys",
    use: "Master alloy",
    status: "Fresh arrival",
    photo: P + "master-alloy-alni.webp",
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
    name: "ADC12",
    slug: "adc12",
    category: "master-alloys",
    use: "Die casting, automotive parts",
    status: "[confirm availability]",
    photo: P + "adc12.webp",
    note: "JIS H5302 standard aluminium die-casting alloy, equivalent to ASTM A383 / EN AC-AlSi12Cu2. Used for gearbox housings and thin-wall automotive castings.",
    origin: "[confirm origin]",
    specs: [
      { k: "Si", v: "9.6 – 12.0%" },
      { k: "Cu", v: "1.5 – 3.5%" },
      { k: "Sn max", v: "0.3%" },
      { k: "Fe / Mn / Zn / Ni max", v: "[confirm exact JIS limits]" },
      { k: "Al", v: "Balance" },
    ],
    chem: [
      { k: "Silicon (Si)", v: "9.6 – 12.0%" },
      { k: "Copper (Cu)", v: "1.5 – 3.5%" },
      { k: "Tin (Sn) max", v: "0.3%" },
      { k: "Fe / Mn / Zn / Ni max", v: "[confirm exact JIS limits]" },
      { k: "Aluminium (Al)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "ADC12 (JIS H5302)" },
      { k: "Form", v: "Ingot, ~6–8 kg" },
      { k: "Packing", v: "1 MT bundle / pallet" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Automotive die casting",
        b: "Standard alloy for engine blocks, crankcases, transmission covers, and oil pans.",
      },
      {
        n: "02",
        t: "Thin-wall castings",
        b: "High silicon content yields exceptional castability and mould cavity filling for intricate shapes.",
      },
      {
        n: "03",
        t: "Dimensional stability",
        b: "Low shrinkage rates during cooling preserve tight machining tolerances in die-cast components.",
      },
      {
        n: "04",
        t: "Machinability & Strength",
        b: "Copper addition balances tensile strength and good chip-breaking capability during CNC milling.",
      },
    ],
  },
  {
    name: "Aluminium Titanium Boron",
    slug: "aluminium-titanium-boron",
    category: "master-alloys",
    use: "Grain refiner for aluminium",
    status: "Ready stock",
    photo: P + "aluminium-titanium-boron.webp",
    note: "AlTi5B1 master alloy rod / waffle. Premier grain refiner for continuous casting and billet extrusion.",
    origin: "China",
    specs: [
      { k: "Ti", v: "5.0%" },
      { k: "B", v: "1.0%" },
      { k: "Al", v: "Balance" },
      { k: "Form", v: "Rod / Waffle plate" },
    ],
    chem: [
      { k: "Titanium (Ti)", v: "4.8 – 5.2%" },
      { k: "Boron (B)", v: "0.9 – 1.1%" },
      { k: "Iron (Fe) max", v: "0.3%" },
      { k: "Silicon (Si) max", v: "0.2%" },
      { k: "Aluminium (Al)", v: "Balance" },
    ],
    supply: [
      { k: "Grade", v: "AlTi5B1" },
      { k: "Form", v: "9.5mm Rod coil / Waffle ingot" },
      { k: "Packing", v: "180 kg coil / 1 MT pallet" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "250 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Grain structure refinement",
        b: "Nucleates fine equiaxed grain structure in aluminium billets and foundry castings.",
      },
      {
        n: "02",
        t: "Hot tearing prevention",
        b: "Eliminates columnar crystal growth and prevents hot cracking during solidification.",
      },
      {
        n: "03",
        t: "Extrusion speed booster",
        b: "Improves surface finish and allows faster extrusion rates on 6000-series profile presses.",
      },
      {
        n: "04",
        t: "Mechanical property enhancement",
        b: "Yields higher tensile strength and improved elongation in finished cast components.",
      },
    ],
  },
];

export const metals: Product[] = [
  {
    name: "Silicon Metal 441",
    slug: "silicon-metal-441",
    category: "metals",
    use: "Si addition, aluminium",
    status: "Ready stock",
    photo: P + "silicon-metal-441.webp",
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
    name: "Nickel Ingot",
    slug: "nickel-ingot",
    category: "metals",
    use: "Alloying, plating feedstock",
    status: "[confirm availability]",
    photo: P + "nickel-ingot.webp",
    note: "[confirm grade/purity with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Ni min", v: "99.8% [confirm]" },
      { k: "Form", v: "Ingot / cathode" },
    ],
    chem: [
      { k: "Nickel (Ni) min", v: "99.8% [confirm]" },
      { k: "Cobalt (Co) max", v: "[confirm limit]" },
      { k: "Carbon (C) max", v: "[confirm limit]" },
      { k: "Sulphur (S) max", v: "[confirm limit]" },
    ],
    supply: [
      { k: "Grade", v: "Pure Nickel (99.8% [confirm])" },
      { k: "Form", v: "Ingot / Cathode cut" },
      { k: "Packing", v: "Pallet / Drum [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Specialty steel alloying",
        b: "Adds toughness, impact strength, and corrosion resistance to high-strength alloy steels.",
      },
      {
        n: "02",
        t: "Electroplating feedstock",
        b: "High-purity soluble anode feedstock for electroplating and surface finishing processes.",
      },
      {
        n: "03",
        t: "Superalloy production",
        b: "Vital element for heat-resistant nickel-base superalloys used in high-temperature applications.",
      },
      {
        n: "04",
        t: "Non-ferrous foundry additions",
        b: "Used for precise nickel alloying in cupronickel and nickel-bronze casting melts.",
      },
    ],
  },
  {
    name: "Tin Ingot",
    slug: "tin-ingot",
    category: "metals",
    use: "Solder, bronze, coatings",
    status: "[confirm availability]",
    photo: P + "tin-ingot.webp",
    note: "[confirm grade/purity with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Sn min", v: "99.85% [confirm]" },
      { k: "Form", v: "Ingot" },
    ],
    chem: [
      { k: "Tin (Sn) min", v: "99.85% [confirm]" },
      { k: "Lead (Pb) max", v: "[confirm limit]" },
      { k: "Copper (Cu) max", v: "[confirm limit]" },
      { k: "Bismuth (Bi) max", v: "[confirm limit]" },
    ],
    supply: [
      { k: "Grade", v: "Pure Tin Ingot (99.85% [confirm])" },
      { k: "Form", v: "Ingot (~25 kg [confirm])" },
      { k: "Packing", v: "Steel strapped pallet" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Bronze alloy production",
        b: "Primary constituent mixed with copper to manufacture phosphor bronze and gunmetal castings.",
      },
      {
        n: "02",
        t: "Babbitt & bearing metals",
        b: "Key soft-matrix element for white-metal anti-friction sleeve bearings.",
      },
      {
        n: "03",
        t: "Soldering & tinning",
        b: "Pure tin feedstock for electronic solders, hot-dip tinning, and protective wire coatings.",
      },
      {
        n: "04",
        t: "Low melting point alloys",
        b: "Essential for formulating fusible safety plug alloys and precision casting compounds.",
      },
    ],
  },
  {
    name: "Zinc Ingot",
    slug: "zinc-ingot",
    category: "metals",
    use: "Galvanising, die casting alloys",
    status: "[confirm availability]",
    photo: P + "zinc-ingot.webp",
    note: "[confirm grade/purity with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Zn min", v: "99.95% SHG [confirm]" },
      { k: "Form", v: "Ingot" },
    ],
    chem: [
      { k: "Zinc (Zn) min", v: "99.95% SHG [confirm]" },
      { k: "Lead (Pb) max", v: "0.005% [confirm]" },
      { k: "Iron (Fe) max", v: "0.005% [confirm]" },
      { k: "Cadmium (Cd) max", v: "0.003% [confirm]" },
    ],
    supply: [
      { k: "Grade", v: "Special High Grade (SHG) 99.95%" },
      { k: "Form", v: "Ingot (~25 kg)" },
      { k: "Packing", v: "1 MT pallet" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Hot-dip galvanising",
        b: "Protective zinc coating bath material for structural steel, pipes, and wire products.",
      },
      {
        n: "02",
        t: "Brass manufacturing",
        b: "Primary zinc component alloyed with copper for casting valve bodies and brass fittings.",
      },
      {
        n: "03",
        t: "Zamak die casting alloys",
        b: "Purity feedstock for preparing Zamak 3 and Zamak 5 precision die casting alloys.",
      },
      {
        n: "04",
        t: "Sacrificial anodes",
        b: "Used for marine cathode protection anodes to safeguard ship hulls and steel structures.",
      },
    ],
  },
  {
    name: "Magnesium Ingot",
    slug: "magnesium-ingot",
    category: "metals",
    use: "Alloying, nodularising base",
    status: "[confirm availability]",
    photo: P + "magnesium-ingot.webp",
    note: "[confirm grade/purity with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Mg min", v: "99.8% [confirm]" },
      { k: "Form", v: "Ingot" },
    ],
    chem: [
      { k: "Magnesium (Mg) min", v: "99.8% [confirm]" },
      { k: "Silicon (Si) max", v: "0.05% [confirm]" },
      { k: "Iron (Fe) max", v: "0.04% [confirm]" },
      { k: "Aluminium (Al) max", v: "0.02% [confirm]" },
    ],
    supply: [
      { k: "Grade", v: "Pure Magnesium Ingot 99.8%" },
      { k: "Form", v: "Ingot (~7.5 kg)" },
      { k: "Packing", v: "1 MT wooden pallet" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Aluminium alloy hardening",
        b: "Primary magnesium source for 5000 and 6000 series high-strength aluminium alloys.",
      },
      {
        n: "02",
        t: "Ductile iron desulphurization",
        b: "Direct addition reagent for deep hot-metal desulphurization in iron foundries.",
      },
      {
        n: "03",
        t: "Titanium reduction",
        b: "Key reducing agent in the Kroll process for extracting metallic titanium sponge.",
      },
      {
        n: "04",
        t: "Lightweight die castings",
        b: "Ultralight metal feedstock for casting chainsaw bodies and power tool housings.",
      },
    ],
  },
  {
    name: "Cadmium",
    slug: "cadmium",
    category: "metals",
    use: "Plating, specialty alloys",
    status: "[confirm — regulated material]",
    photo: P + "cadmium-ingot.webp",
    note: "Toxic, regulated metal. Confirm import licensing and storage compliance before listing publicly.",
    origin: "[confirm origin]",
    specs: [
      { k: "Cd min", v: "99.95% [confirm]" },
      { k: "Form", v: "Ingot / stick" },
    ],
    chem: [
      { k: "Cadmium (Cd) min", v: "99.95% [confirm]" },
      { k: "Lead (Pb) max", v: "0.02% [confirm]" },
      { k: "Zinc (Zn) max", v: "0.01% [confirm]" },
      { k: "Iron (Fe) max", v: "0.005% [confirm]" },
    ],
    supply: [
      { k: "Grade", v: "High Purity Cadmium 99.95%" },
      { k: "Form", v: "Ingot / Stick" },
      { k: "Packing", v: "Special sealed drum [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs (Licence required)" },
    ],
    uses: [
      {
        n: "01",
        t: "Corrosion protective plating",
        b: "Provides exceptional corrosion protection on aerospace fasteners and military hardware.",
      },
      {
        n: "02",
        t: "Low-temperature solders",
        b: "Forms ultra-low melting point eutectic alloys for thermal fuses and safety links.",
      },
      {
        n: "03",
        t: "Ni-Cd battery manufacture",
        b: "Raw material cathode element for heavy-duty industrial rechargeable nickel-cadmium cells.",
      },
      {
        n: "04",
        t: "Specialty bearing alloys",
        b: "Improves fatigue resistance in high-load copper-lead-cadmium engine bearings.",
      },
    ],
  },
];

const rawFluxes = [
  {
    name: "Covering Flux",
    use: "Melt surface protection, reduces oxidation loss",
    status: "[confirm availability]",
    photo: P + "cover-flux.webp",
    note: "Forms a protective barrier on molten metal to reduce oxidation losses during melting and holding. [confirm exact composition/dosage with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Form", v: "[confirm — powder/granular]" },
      { k: "Dosage", v: "[confirm per supplier spec]" },
      { k: "Application", v: "Melting & holding stage" },
    ],
    chem: [
      { k: "Base composition", v: "[confirm exact blend with supplier]" },
      { k: "Melting point", v: "[confirm thermal range]" },
      { k: "Moisture max", v: "[confirm max %]" },
    ],
    supply: [
      { k: "Form", v: "Powder / Granular [confirm]" },
      { k: "Packing", v: "25 kg moisture-proof bag [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Melt surface barrier",
        b: "Forms a continuous liquid flux cover over molten metal bath, preventing direct air contact.",
      },
      {
        n: "02",
        t: "Oxidation loss reduction",
        b: "Minimizes metal burning and oxidation losses during extended high-temperature holding periods.",
      },
      {
        n: "03",
        t: "Hydrogen pickup prevention",
        b: "Acts as a physical shield against atmospheric humidity absorption in aluminium holding pots.",
      },
      {
        n: "04",
        t: "Clean crucible walls",
        b: "Prevents dross crusting and ring formation along the upper interior walls of crucible furnaces.",
      },
    ],
  },
  {
    name: "Drossing Flux",
    use: "Separates metal from oxide dross",
    status: "[confirm availability]",
    photo: P + "cover-flux.webp",
    note: "Promotes separation of usable metal from the oxide dross layer, reducing metal loss during skimming. [confirm exact composition/dosage with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Form", v: "[confirm]" },
      { k: "Dosage", v: "[confirm per supplier spec]" },
      { k: "Application", v: "Pre-skimming" },
    ],
    chem: [
      { k: "Active salts", v: "[confirm chemical formulation]" },
      { k: "Reaction temperature", v: "[confirm operational window]" },
    ],
    supply: [
      { k: "Form", v: "Powder / Granular [confirm]" },
      { k: "Packing", v: "25 kg bag [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Metal-dross separation",
        b: "Alters surface tension to release entrapped metallic droplets back into the liquid pool.",
      },
      {
        n: "02",
        t: "Dry dross formation",
        b: "Converts wet metallic dross into a dry, powdery oxide crust that skims easily.",
      },
      {
        n: "03",
        t: "Yield optimization",
        b: "Saves up to 70% of usable metal that would otherwise be discarded with heavy dross skim.",
      },
      {
        n: "04",
        t: "Cleaner ladle pouring",
        b: "Ensures dross-free metal transfer from holding pots into casting ladles and moulds.",
      },
    ],
  },
  {
    name: "Exothermic Flux",
    use: "Recovers metal trapped in dross",
    status: "[confirm availability]",
    photo: P + "cover-flux.webp",
    note: "Self-heating reaction recovers metal entrapped in dross that has already formed, reducing melting losses. [confirm exact composition/dosage with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Form", v: "Powder, typically" },
      { k: "Dosage", v: "[confirm — industry typical is ~0.1–0.5% by melt mass]" },
      { k: "Application", v: "Applied to dross" },
    ],
    chem: [
      { k: "Exothermic agents", v: "[confirm self-heating blend]" },
      { k: "Ignition temp", v: "[confirm reaction trigger temp]" },
    ],
    supply: [
      { k: "Form", v: "Powder, typically" },
      { k: "Packing", v: "25 kg bag [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Exothermic heat generation",
        b: "Generates localized heat upon contact with hot dross to melt entrapped solid metal particles.",
      },
      {
        n: "02",
        t: "Maximum metal recovery",
        b: "Extracts high-purity metal from heavy dross layers prior to final disposal.",
      },
      {
        n: "03",
        t: "Dross temperature boost",
        b: "Prevents chilling of the dross layer during manual skimming operations.",
      },
      {
        n: "04",
        t: "Smelting efficiency",
        b: "Substantially lowers overall melt loss percentage per ton of liquid metal cast.",
      },
    ],
  },
  {
    name: "Furnace Cleaning Flux",
    use: "Softens refractory/wall oxide buildup",
    status: "[confirm availability]",
    photo: P + "fire-bricks.webp",
    note: "Softens oxide buildup on furnace walls and refractory lining, protecting furnace life and melting efficiency. [confirm exact composition/dosage with supplier]",
    origin: "[confirm origin]",
    specs: [
      { k: "Form", v: "[confirm]" },
      { k: "Application", v: "Furnace wall/lining, not the melt itself" },
    ],
    chem: [
      { k: "Cleaning compounds", v: "[confirm fluxing agents]" },
      { k: "Refractory compatibility", v: "[confirm brick & castable types]" },
    ],
    supply: [
      { k: "Form", v: "Granular / Powder [confirm]" },
      { k: "Packing", v: "25 kg bag [confirm]" },
      { k: "Origin", v: "[confirm origin]" },
      { k: "Minimum order", v: "[confirm min order]" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Refractory corundum removal",
        b: "Dissolves and loosens stubborn hard corundum oxide buildup adhering to furnace walls.",
      },
      {
        n: "02",
        t: "Furnace capacity restoration",
        b: "Restores full bath volume and melt capacity in holding pots and reverb furnaces.",
      },
      {
        n: "03",
        t: "Thermal efficiency protection",
        b: "Removes insulating oxide layers from walls, lowering energy consumption per heat.",
      },
      {
        n: "04",
        t: "Extended lining life",
        b: "Prevents mechanical refractory damage caused by chiseling or scraping hardened slag.",
      },
    ],
  },
  {
    name: "Degasser Tablets",
    slug: "degasser-tablets",
    use: "Hydrogen degassing in aluminium melt",
    status: "Ready stock",
    photo: P + "degasser-tablets.webp",
    note: "Chlorine-free nitrogen / argon releasing tablets for removal of dissolved hydrogen gas from aluminium melts.",
    origin: "China",
    specs: [
      { k: "Active element", v: "Nitrogen / Hexachloroethane-free" },
      { k: "Tablet weight", v: "100 g / 250 g tablet" },
      { k: "Dosage", v: "0.05 – 0.15% by melt weight" },
      { k: "Packing", v: "20 kg carton box" },
    ],
    chem: [
      { k: "Active gas releaser", v: "Compressed nitrogen compound" },
      { k: "Chlorine content", v: "Zero / Eco-friendly" },
      { k: "Moisture max", v: "0.2%" },
    ],
    supply: [
      { k: "Form", v: "Solid compressed tablet" },
      { k: "Packing", v: "20 kg box / moisture sealed" },
      { k: "Origin", v: "China" },
      { k: "Minimum order", v: "100 kg" },
      { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" },
    ],
    uses: [
      {
        n: "01",
        t: "Hydrogen gas removal",
        b: "Releases ultra-fine nitrogen gas bubbles that scavenge dissolved hydrogen from molten aluminium.",
      },
      {
        n: "02",
        t: "Pin-hole porosity elimination",
        b: "Prevents sub-surface pin-hole gas porosity in automotive castings and pressure vessels.",
      },
      {
        n: "03",
        t: "Inclusion flotation",
        b: "Rising gas bubbles float non-metallic oxide inclusions to the melt surface for easy skimming.",
      },
      {
        n: "04",
        t: "Eco-friendly operation",
        b: "Smoke-free and low odor reaction protects foundry air quality and operator safety.",
      },
    ],
  },
];

export const fluxes: Product[] = rawFluxes.map((f) => ({
  ...f,
  category: "fluxes",
  slug: f.slug || slugify(f.name),
}));

export const ranges: Range[] = [
  {
    kicker: "14 grades in stock",
    title: "Ferro Alloys",
    body: "High-grade ferro alloys for iron and steel casting units. Ferro silicon, ferro manganese, silico manganese, chrome, inoculants, pig iron.",
    photo: P + "ferro-manganese-75.webp",
    chips: ["FeSi 75%", "FeMn 75%", "FeCr 60%", "Pig Iron"],
  },
  {
    kicker: "Stock in warehouse",
    title: "Non-Ferro Alloys",
    body: "Non-ferrous foundry additives including Manganese metal ingots and Copper Phosphorus deoxidisers.",
    photo: P + "copper-phosphorus.webp",
    chips: ["Mn Ingot 99.7%", "CuP 14%", "Ready stock"],
  },
  {
    kicker: "5 grades available",
    title: "Master Alloys",
    body: "Master alloys and ingots for alloy wheels, car pistons and aluminium engine parts. AlSi 50/50, AlCu 40/60, AlNi 80/20, AlTi5B1, ADC12.",
    photo: P + "aluminium-silicon-50-50.webp",
    chips: ["AlSi 50/50", "AlCu 40/60", "AlNi 80/20", "AlTi5B1", "ADC12"],
  },
  {
    kicker: "6 pure elements",
    title: "Metals",
    body: "Pure elemental ingots and lumps for foundry alloying and electroplating. Silicon Metal 441, Nickel, Tin, Zinc, Magnesium, Cadmium.",
    photo: P + "silicon-metal-441.webp",
    chips: ["Si 441", "Nickel", "Tin", "Zinc", "Magnesium"],
  },
  {
    kicker: "5 formulations",
    title: "Fluxes",
    body: "Melt surface protection, dross separation, exothermic metal recovery, furnace wall cleaning, and degasser tablets.",
    photo: P + "cover-flux.webp",
    chips: ["Covering Flux", "Drossing Flux", "Degasser Tablets", "Exothermic"],
  },
  {
    kicker: "All sizes",
    title: "Graphite Crucibles",
    body: "Clay-graphite and SiC crucibles that take extreme furnace heat without cracking. Small sizes to heavy foundry sizes.",
    photo: P + "graphite-crucible.webp",
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
  const allProducts = [
    ...ferro,
    ...nonferro,
    ...masterAlloys,
    ...metals,
    ...fluxes,
  ];
  // Filter out current product
  const candidates = allProducts.filter((p) => p.slug !== product.slug);

  // Pick items from same category first, then cross category
  const sameCat = candidates.filter((p) => p.category === product.category);
  const diffCat = candidates.filter((p) => p.category !== product.category);

  const getCategoryPath = (cat: string) => {
    switch (cat) {
      case "ferro":
        return "ferro-alloys";
      case "non-ferro":
        return "non-ferro-alloys";
      case "master-alloys":
        return "master-alloys";
      case "metals":
        return "metals";
      case "fluxes":
        return "fluxes";
      default:
        return "ferro-alloys";
    }
  };

  const selected: { name: string; grade: string; photo: string; href: string }[] =
    [];

  if (sameCat.length > 0) {
    selected.push({
      name: sameCat[0].name,
      grade: sameCat[0].specs[0]
        ? `${sameCat[0].specs[0].k} ${sameCat[0].specs[0].v}`
        : sameCat[0].use,
      photo: sameCat[0].photo,
      href: `/${getCategoryPath(sameCat[0].category)}/${sameCat[0].slug}`,
    });
  }

  if (sameCat.length > 1) {
    selected.push({
      name: sameCat[1].name,
      grade: sameCat[1].specs[0]
        ? `${sameCat[1].specs[0].k} ${sameCat[1].specs[0].v}`
        : sameCat[1].use,
      photo: sameCat[1].photo,
      href: `/${getCategoryPath(sameCat[1].category)}/${sameCat[1].slug}`,
    });
  }

  if (diffCat.length > 0) {
    selected.push({
      name: diffCat[0].name,
      grade: diffCat[0].specs[0]
        ? `${diffCat[0].specs[0].k} ${diffCat[0].specs[0].v}`
        : diffCat[0].use,
      photo: diffCat[0].photo,
      href: `/${getCategoryPath(diffCat[0].category)}/${diffCat[0].slug}`,
    });
  }

  // Always add Graphite Crucibles as 4th related option if space allows
  selected.push({
    name: "Graphite Crucibles",
    grade: "Clay-graphite & SiC · #1 to #400",
    photo: P + "graphite-crucible.webp",
    href: "/graphite-crucibles",
  });

  return selected.slice(0, 4);
}

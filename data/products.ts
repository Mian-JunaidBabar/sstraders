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

export interface Product {
  name: string;
  slug: string;
  use: string;
  status: string;
  photo: string;
  note: string;
  specs: Spec[];
}

export interface UseCase {
  n: string;
  t: string;
  b: string;
}

export interface RelatedItem {
  name: string;
  slug: string;
  grade: string;
  photo: string;
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

const P = "https://sstraders.pk/wp-content/uploads/2026/05/";

// Helper to generate slugs
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const rawFerro = [
  { name: "Ferro Silicon 75%", use: "Steel deoxidation", status: "Ready stock", photo: P + "ferro-Silicon-768x768.webp", note: "Fresh stock available. 75% grade, high purity, ready for immediate delivery.", specs: [{ k: "Si", v: "72 – 80%" }, { k: "Al / C max", v: "2.0% / 0.2%" }, { k: "Size", v: "10 – 50 mm" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Ferro Manganese 75%", use: "Mn addition, steel", status: "Ready stock", photo: P + "ferro-magnese.webp", note: "High-grade 75% manganese. 100% pure quality and ready stock in warehouse.", specs: [{ k: "Mn", v: "75 – 78%" }, { k: "C max", v: "7.5%" }, { k: "Size", v: "10 – 50 mm" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Ferro Silico Manganese", use: "Combined Si + Mn", status: "Fresh arrival", photo: P + "ferro-magnese.webp", note: "High-grade silicon-manganese. Fresh arrival with ready stock and guaranteed purity.", specs: [{ k: "Mn", v: "60 – 65%" }, { k: "Si", v: "14 – 17%" }, { k: "Size", v: "10 – 60 mm" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Ferro Chrome HC 60%", use: "Stainless, wear parts", status: "Ready stock", photo: P + "ferro-Chrome-high-carbon-webp.webp", note: "Premium high carbon (60%) grade. Direct import with ready stock available.", specs: [{ k: "Cr", v: "60 – 65%" }, { k: "C max", v: "8.0%" }, { k: "Size", v: "10 – 50 mm" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Ferro Chrome LC 60%", use: "Stainless casting", status: "Certified", photo: P + "ferro-Chrome-high-carbon-webp.webp", note: "Specialised low carbon (60%) grade. Certified quality for stainless casting.", specs: [{ k: "Cr", v: "60 – 65%" }, { k: "C max", v: "0.10%" }, { k: "Size", v: "10 – 50 mm" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Manganese Metal Flakes", use: "High-purity Mn", status: "Vacuum packed", photo: P + "ferro-magnese.webp", note: "High purity manganese flakes. Fresh arrival, vacuum-packed and ready to ship.", specs: [{ k: "Mn min", v: "99.7%" }, { k: "Fe / C max", v: "0.03% / 0.04%" }, { k: "Flake size", v: "10 – 50 mm" }, { k: "Packing", v: "25 kg vacuum bag" }] },
  { name: "Carburizer", use: "Carbon raiser", status: "Regular stock", photo: P + "ferro-magnese.webp", note: "High carbon content, low ash. Regular stock available for all foundry needs.", specs: [{ k: "C min", v: "98%" }, { k: "Ash / S max", v: "1.0% / 0.5%" }, { k: "Size", v: "1 – 5 mm" }, { k: "Packing", v: "25 kg bag" }] },
  { name: "Graphite Bags", use: "Carbon raiser", status: "Ready stock", photo: P + "graphite-crucible-768x768.webp", note: "50 kg bags available. High-purity crystalline graphite with ready stock.", specs: [{ k: "C", v: "98 – 99%" }, { k: "Ash max", v: "1.0%" }, { k: "Moisture max", v: "0.5%" }, { k: "Packing", v: "50 kg bag" }] },
  { name: "Ferro Silico Magnesium", use: "Nodulariser, SG iron", status: "Fresh stock", photo: P + "ferro-silico-magnesium-webp.webp", note: "Premium magnesium-silicon grade. 100% pure material, fresh stock and ready for delivery.", specs: [{ k: "Mg", v: "5 – 7%" }, { k: "Si", v: "44 – 48%" }, { k: "Ca / RE", v: "0.8 – 1.5% / 0.8 – 1.2%" }, { k: "Size", v: "3 – 25 mm" }] }
];

export const ferro: Product[] = rawFerro.map(f => ({ ...f, slug: slugify(f.name) }));

const rawNonFerro = [
  { name: "Silicon Metal 441", use: "Si addition, aluminium", status: "Ready stock", photo: P + "silicon-metal-webp-768x768.webp", note: "High-purity silicon metal. Stock available in warehouse for immediate delivery.", specs: [{ k: "Si min", v: "99.0%" }, { k: "Fe / Al / Ca max", v: "0.4% / 0.4% / 0.1%" }, { k: "Size", v: "10 – 100 mm lump" }, { k: "Packing", v: "1 MT jumbo bag" }] },
  { name: "Aluminium Silicon", use: "Master alloy", status: "A+ grade", photo: P + "master-alloy-AlNI-8020-webp.webp", note: "A+ grade aluminium silicon master alloy. Guaranteed purity with ready stock and fast delivery.", specs: [{ k: "Si", v: "48 – 52%" }, { k: "Al", v: "Balance" }, { k: "Fe max", v: "0.5%" }, { k: "Form", v: "Waffle ingot, ~5 kg" }] },
  { name: "Aluminium Copper 40/60", use: "Master alloy", status: "Ready stock", photo: P + "copper-phosphorus-webp.webp", note: "Premium 40/60 grade copper alloy. Direct import with wholesale rates and ready stock.", specs: [{ k: "Cu", v: "38 – 42%" }, { k: "Al", v: "Balance" }, { k: "Fe max", v: "0.4%" }, { k: "Form", v: "Waffle ingot, ~5 kg" }] },
  { name: "Aluminium Nickel 80/20", use: "Master alloy", status: "Fresh arrival", photo: P + "master-alloy-AlNI-8020-webp.webp", note: "High-quality 80/20 aluminium nickel alloy. Fresh arrival, 100% pure, stock ready in warehouse.", specs: [{ k: "Ni", v: "18 – 22%" }, { k: "Al", v: "Balance" }, { k: "Fe max", v: "0.4%" }, { k: "Form", v: "Waffle ingot, ~5 kg" }] },
  { name: "Manganese Metal Ingot", use: "Mn addition", status: "Fresh stock", photo: P + "ferro-magnese.webp", note: "High-purity manganese metal ingots. Fresh stock available for immediate delivery.", specs: [{ k: "Mn min", v: "99.7%" }, { k: "Fe max", v: "0.03%" }, { k: "Form", v: "Ingot, ~10 kg" }, { k: "Packing", v: "Steel strapped bundle" }] },
  { name: "Copper Phosphorus", use: "Copper deoxidation", status: "Fresh arrival", photo: P + "copper-phosphorus-webp.webp", note: "Premium grade copper phosphorus. Fresh arrival with guaranteed purity and ready stock.", specs: [{ k: "P", v: "14 – 15%" }, { k: "Cu", v: "Balance" }, { k: "Form", v: "Shot or plate" }, { k: "Packing", v: "25 kg drum" }] }
];

export const nonferro: Product[] = rawNonFerro.map(f => ({ ...f, slug: slugify(f.name) }));

export const ranges: Range[] = [
  { kicker: "9 grades in stock", title: "Ferro Alloys", body: "High-grade ferro alloys for iron and steel casting units. Ferro silicon, ferro manganese, silico manganese, chrome.", photo: P + "ferro-magnese.webp", chips: ["FeSi 75%", "FeMn 75%", "FeCr 60%", "Nodulariser"] },
  { kicker: "6 grades in stock", title: "Non-Ferro Alloys", body: "Master alloys and ingots for alloy wheels, car pistons and aluminium engine parts. Silicon metal, AlSi, AlCu, AlNi.", photo: P + "master-alloy-AlNI-8020-webp.webp", chips: ["Si 441", "AlSi 50/50", "AlCu 40/60", "CuP 14%"] },
  { kicker: "All sizes", title: "Graphite Crucibles", body: "Clay-graphite and SiC crucibles that take extreme furnace heat without cracking. Small sizes to heavy foundry sizes.", photo: P + "graphite-crucible-768x768.webp", chips: ["#1 – #400", "1600°C", "Ready stock"] }
];

export const board: BoardItem[] = [
  { name: "Ferro Silicon", grade: "Si 72–80%", size: "10–50 mm", pack: "1 MT jumbo bag", status: "Ready stock" },
  { name: "Ferro Manganese HC", grade: "Mn 75–78%", size: "10–50 mm", pack: "1 MT jumbo bag", status: "Ready stock" },
  { name: "Ferro Silico Manganese", grade: "Mn 60–65% / Si 14–17%", size: "10–60 mm", pack: "1 MT jumbo bag", status: "Fresh arrival" },
  { name: "Silicon Metal 441", grade: "Si 99.0% min", size: "10–100 mm", pack: "1 MT jumbo bag", status: "Ready stock" },
  { name: "Aluminium Nickel 80/20", grade: "Ni 18–22%", size: "Waffle ingot", pack: "10 kg ingot", status: "Fresh arrival" },
  { name: "Graphite Crucibles", grade: "Clay-graphite / SiC", size: "#1 – #400", pack: "Single carton", status: "All sizes" }
];

export const promises: string[] = ["Ready stock available", "Lab tested quality", "Best wholesale rates", "No hidden costs", "100% pure materials", "Trusted by foundries", "Direct from importers", "Weekly rate updates", "Fast nationwide delivery", "Honest business dealing"];

export const fesiChem: Spec[] = [
  { k: "Silicon (Si)", v: "72 – 80" }, { k: "Aluminium (Al) max", v: "2.0" },
  { k: "Carbon (C) max", v: "0.2" }, { k: "Sulphur (S) max", v: "0.02" },
  { k: "Phosphorus (P) max", v: "0.04" }, { k: "Iron (Fe)", v: "Balance" }
];

export const fesiSupply: Spec[] = [
  { k: "Grade", v: "FeSi 75" }, { k: "Lump size", v: "10 – 50 mm" },
  { k: "Packing", v: "1 MT jumbo bag" }, { k: "Origin", v: "China" },
  { k: "Minimum order", v: "1 MT" }, { k: "Delivery", v: "Ex-Lahore, 24 – 72 hrs" }
];

export const fesiUses: UseCase[] = [
  { n: "01", t: "Steel deoxidation", b: "Removes dissolved oxygen from the melt before tapping, reducing blowholes in the casting." },
  { n: "02", t: "Silicon adjustment", b: "Raises silicon in grey and ductile iron to hit the target carbon equivalent." },
  { n: "03", t: "Inoculation base", b: "Feedstock for ladle inoculation alongside ferro silico magnesium in SG iron work." },
  { n: "04", t: "Stainless & alloy steel", b: "Standard reducing agent in stainless and low-alloy steel production." }
];

export const related: RelatedItem[] = [
  { name: "Ferro Silico Magnesium", grade: "Mg 5 – 7% · Si 44 – 48%", photo: P + "ferro-silico-magnesium-webp.webp" },
  { name: "Ferro Manganese 75%", grade: "Mn 75 – 78% · C 7.5% max", photo: P + "ferro-magnese.webp" },
  { name: "Carburizer", grade: "C 98% min · 1 – 5 mm", photo: P + "graphite-crucible-768x768.webp" },
  { name: "Graphite Crucibles", grade: "All sizes, #1 – #400", photo: P + "crucibles-768x549.webp" }
].map(r => ({ ...r, slug: slugify(r.name) }));

export const cruciblePoints: string[] = [
  "High thermal conductivity, excellent resistance to cracking",
  "All standard sizes held in the warehouse",
  "Small sizes for precious metals to heavy foundry sizes",
  "Suits aluminium, brass, copper and iron melting",
  "Ready for delivery across Pakistan"
];

export const crucibleSizes: CrucibleSize[] = [
  { no: "#4", dia: "95 mm", h: "120 mm", cap: "1.5 kg", use: "Jewellery, precious metals" },
  { no: "#10", dia: "125 mm", h: "160 mm", cap: "4 kg", use: "Small workshop melts" },
  { no: "#20", dia: "160 mm", h: "205 mm", cap: "8 kg", use: "Brass, copper casting" },
  { no: "#40", dia: "200 mm", h: "255 mm", cap: "16 kg", use: "Aluminium casting units" },
  { no: "#100", dia: "270 mm", h: "345 mm", cap: "40 kg", use: "Production aluminium" },
  { no: "#200", dia: "340 mm", h: "430 mm", cap: "80 kg", use: "Heavy aluminium, brass" },
  { no: "#400", dia: "430 mm", h: "540 mm", cap: "160 kg", use: "Iron and large foundry" }
];

export const crucibleSpecs: CrucibleSpec[] = [
  { kicker: "Material", title: "Clay graphite", rows: [{ k: "Graphite content", v: "35 – 45%" }, { k: "Max temperature", v: "1400 °C" }, { k: "Best for", v: "Aluminium, brass, zinc" }] },
  { kicker: "Material", title: "Silicon carbide", rows: [{ k: "SiC bonded", v: "Yes" }, { k: "Max temperature", v: "1600 °C" }, { k: "Best for", v: "Copper, iron, steel" }] },
  { kicker: "Handling", title: "Care & life", rows: [{ k: "First-use bake", v: "Required" }, { k: "Storage", v: "Dry, off the floor" }, { k: "Typical life", v: "By duty cycle" }] }
];

export const proof: ProofPoint[] = [
  { t: "Certificate of analysis", b: "Lot-wise COA issued with every quotation" },
  { t: "Import documents", b: "Bill of entry and country of origin on request" },
  { t: "Warehouse, Lahore", b: "Photograph of held stock" },
  { t: "Loading &amp; dispatch", b: "Photograph of a dispatch in progress" }
];

export const pillars: Pillar[] = [
  { n: "01", t: "Large inventory", b: "Warehouses kept full so large quantities are available on the day you call, not next month." },
  { n: "02", t: "Direct sourcing", b: "We import directly and remove the middleman, then pass the saving straight to your factory." },
  { n: "03", t: "Ready for delivery", b: "Lahore, Gujranwala, Faisalabad or Karachi — your order reaches the gate on time." },
  { n: "04", t: "Tested, documented", b: "Lab-tested lots with a certificate of analysis and import papers on request." }
];

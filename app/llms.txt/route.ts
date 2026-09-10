import { siteInfo, ferro, nonferro, masterAlloys, metals, fluxes } from "@/data/products";

export async function GET() {
  const categories = [
    { slug: "ferro-alloys", items: ferro },
    { slug: "non-ferro-alloys", items: nonferro },
    { slug: "master-alloys", items: masterAlloys },
    { slug: "metals", items: metals },
    { slug: "fluxes", items: fluxes },
  ];

  let content = `# SS Traders\n\n`;
  content += `${siteInfo.description}\n\n`;
  content += `## Canonical URLs\n\n`;
  
  content += `- ${siteInfo.url}/\n`;
  content += `- ${siteInfo.url}/about\n`;
  content += `- ${siteInfo.url}/contact\n`;
  content += `- ${siteInfo.url}/graphite-crucibles\n`;

  categories.forEach(c => {
    content += `- ${siteInfo.url}/${c.slug}\n`;
    c.items.forEach(p => {
      content += `- ${siteInfo.url}/${c.slug}/${p.slug}\n`;
    });
  });

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

import { siteInfo, Product } from "@/data/products";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteInfo.url}/#organization`,
    name: siteInfo.name,
    legalName: siteInfo.legalName,
    description: siteInfo.description,
    url: siteInfo.url,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address.street,
      addressLocality: siteInfo.address.city,
      addressRegion: siteInfo.address.region,
      addressCountry: siteInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteInfo.geo.latitude,
      longitude: siteInfo.geo.longitude,
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "$$",
  };
}

export function getProductSchema(product: Product, categorySlug: string) {
  const productUrl = `${siteInfo.url}/${categorySlug}/${product.slug}`;

  const additionalProperty = [
    ...product.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.k,
      value: s.v,
    })),
    ...product.chem.map((c) => ({
      "@type": "PropertyValue",
      name: `Chemical Analysis: ${c.k}`,
      value: c.v,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}/#product`,
    name: product.name,
    description: `${product.note} ${product.use}. Supplied by ${siteInfo.name} in ${siteInfo.address.city}, Pakistan.`,
    image: product.photo,
    category: product.category === "ferro" ? "Ferro Alloys" : "Non-Ferro Alloys",
    brand: {
      "@type": "Brand",
      name: siteInfo.name,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteInfo.name,
      },
    },
    additionalProperty,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteInfo.url}${item.url}`,
    })),
  };
}

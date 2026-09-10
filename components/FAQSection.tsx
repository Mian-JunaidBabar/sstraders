import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div style={{ background: "var(--color-bg)", padding: "44px 40px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 800,
          fontSize: "32px",
          lineHeight: "1",
          margin: "0 0 24px",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        Frequently Asked Questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid var(--color-accent-300)", paddingBottom: "24px" }}>
            <h3
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                margin: "0 0 8px",
                color: "var(--color-accent)",
              }}
            >
              {faq.question}
            </h3>
            <p
              style={{
                fontFamily: "'Barlow',sans-serif",
                fontSize: "15px",
                color: "var(--color-neutral-600)",
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

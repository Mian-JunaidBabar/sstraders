import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SS Traders",
  description: "Terms and Conditions for SS Traders.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-slate-800">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        Terms & Conditions
      </h1>
      <p className="text-sm text-slate-500 mb-10">
        Last Updated: September 2026
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">
            1. Nature of Website (Information & Inquiry Only)
          </h2>
          <p>
            The website www.sstraders.pk serves strictly as an informational and
            product showcase platform for our ferroalloys, metals, and related
            industrial commodities. The website is not an automated e-commerce
            store. Product specifications, grades, and availability listed on
            this site are indicative and subject to change without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            2. Payment Policy – No Online Payments Accepted
          </h2>
          <p>
            SS Traders DOES NOT accept or process any payments directly through
            www.sstraders.pk. We do not operate online checkout facilities or
            payment gateways. All business transactions are settled strictly via
            formal offline commercial methods agreed upon in writing (such as
            official Company Bank Transfers, Pay Orders, or Cheques). We will
            never ask you to enter credit card details on this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            3. Quotations, Pricing & Product Specifications
          </h2>
          <p>
            Due to the volatile nature of the ferroalloys and metallurgical
            commodity markets, prices and availability are not fixed on the
            website and are quoted upon direct inquiry. Formal quotes are issued
            via official email or WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            4. Orders, Inspection & Delivery
          </h2>
          <p>
            A commercial order is considered confirmed only upon issuance and
            mutual acceptance of an official Proforma Invoice. Delivery terms
            shall be governed by the specific commercial contract executed for
            each order.
          </p>
        </section>
      </div>
    </main>
  );
}

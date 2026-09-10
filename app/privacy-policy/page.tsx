import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SS Traders",
  description: "Privacy Policy for SS Traders.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-slate-800">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-10">
        Last Updated: September 2026
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Information Collection</h2>
          <p>
            SS Traders solely collects information submitted directly by you
            during inquiries, including your name, business name, phone number,
            city, and product requirements. We do not use automated tracking to
            harvest personal identification data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. Use of Information</h2>
          <p>
            The data collected is strictly utilized for legitimate B2B
            commercial purposes, such as providing wholesale rate updates,
            processing orders, arranging logistics, and issuing Certificates of
            Analysis (COA).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">3. Data Sharing</h2>
          <p>
            We respect your business privacy. SS Traders does not sell, rent, or
            trade your data. Information is only shared with essential third
            parties, such as freight and logistics transporters, to fulfill your
            delivery requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Contact Us</h2>
          <p>
            If you have questions regarding our privacy practices, please
            contact us at: <br />
            <strong>Email:</strong> sstraders03204990620@gmail.com <br />
            <strong>WhatsApp:</strong> +92 320 4990620
          </p>
        </section>
      </div>
    </main>
  );
}

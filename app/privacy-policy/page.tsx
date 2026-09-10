import React from "react";
import { siteInfo } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteInfo.name}`,
  description: `Privacy policy for ${siteInfo.name}.`,
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold font-condensed uppercase tracking-wider mb-8 text-[var(--color-accent)]">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-black/80 font-sans">
          <p>
            This Privacy Policy describes how {siteInfo.name} collects, uses,
            and protects your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            1. Information We Collect
          </h2>
          <p>
            As a B2B trading business, we do not require user accounts or track
            personal browsing habits. The only information we collect is the
            data you voluntarily provide when submitting an inquiry through our
            contact forms or WhatsApp links. This may include your:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Phone Number (WhatsApp)</li>
            <li>City or Company Location</li>
            <li>Product(s) of interest</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            2. How We Use Your Information
          </h2>
          <p>
            The information collected is used exclusively for the purpose of
            responding to your business inquiries, providing quotations, and
            communicating regarding product stock and delivery.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            3. Data Sharing and Third Parties
          </h2>
          <p>
            <strong>We respect your privacy.</strong> {siteInfo.name} does not
            sell, rent, trade, or otherwise share your personal or business
            inquiry data with any third parties. Your information is kept
            strictly confidential and is only accessible to authorized personnel
            handling your request.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            4. Security
          </h2>
          <p>
            We take reasonable precautions to protect your information. Since we
            do not collect sensitive data like credit card numbers online (refer
            to our Terms & Conditions for our No Online Payments policy), the
            risk is minimized. However, no internet transmission is 100% secure,
            and we advise standard caution when sharing information online.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            5. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
            <br />
            <strong>Email:</strong> {siteInfo.email}
            <br />
            <strong>Phone:</strong> {siteInfo.phone}
          </p>
        </div>
      </div>
    </main>
  );
}

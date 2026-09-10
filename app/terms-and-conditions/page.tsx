import React from "react";
import { siteInfo } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteInfo.name}`,
  description: `Terms and conditions for ${siteInfo.name}.`,
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold font-condensed uppercase tracking-wider mb-8 text-[var(--color-accent)]">
          Terms & Conditions
        </h1>

        <div className="prose prose-lg max-w-none text-black/80 font-sans">
          <p>
            Welcome to {siteInfo.name}. By accessing this website, you agree to
            be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            1. No Online Payments Accepted
          </h2>
          <p>
            <strong>Important Notice:</strong> {siteInfo.name} is a B2B trading
            business. We <strong>do not</strong> accept or process any online
            payments through this website. This website serves strictly as a
            digital catalog and inquiry platform. All commercial transactions,
            payments, and invoicing are handled offline through formal banking
            channels. Please do not share any credit card or banking information
            on this website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            2. Product Information and Rates
          </h2>
          <p>
            The products, technical specifications, and general information
            provided on this website are for informational purposes. Since metal
            and alloy rates fluctuate daily based on global market conditions,
            we do not publish fixed pricing on the website. Please contact us
            directly via WhatsApp or phone for today&apos;s rates and stock
            availability.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            3. Intellectual Property
          </h2>
          <p>
            All content on this website, including product descriptions, images,
            logos, and structure, is the property of {siteInfo.name} and may not
            be copied, reproduced, or distributed without our explicit written
            permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            4. Liability
          </h2>
          <p>
            {siteInfo.name} makes every effort to ensure the accuracy of the
            information provided on this website. However, we do not guarantee
            that all information is error-free, complete, or current.{" "}
            {siteInfo.name} will not be held liable for any direct or indirect
            damages arising from the use of this website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-accent)]">
            5. Contact Information
          </h2>
          <p>
            If you have any questions regarding these Terms and Conditions,
            please contact us at:
            <br />
            <strong>Phone/WhatsApp:</strong> {siteInfo.phone}
            <br />
            <strong>Address:</strong> {siteInfo.address.street},{" "}
            {siteInfo.address.city}, {siteInfo.address.country}.
          </p>
        </div>
      </div>
    </main>
  );
}

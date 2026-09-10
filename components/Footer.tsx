import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="SS Traders"
                width={180}
                height={50}
                className="h-auto w-48"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed text-sm">
              A Lahore-based trading company specialised in high-grade ferro
              alloys, non-ferro alloys, master alloys, pure metals, foundry
              fluxes and crucibles for iron, steel, aluminium and copper
              foundries across Pakistan.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 tracking-wide text-sm uppercase">
              Our Products
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link
                  href="/ferro-alloys"
                  className="hover:text-amber-600 transition-colors"
                >
                  Ferro Alloys
                </Link>
              </li>
              <li>
                <Link
                  href="/non-ferro-alloys"
                  className="hover:text-amber-600 transition-colors"
                >
                  Non-Ferro Alloys
                </Link>
              </li>
              <li>
                <Link
                  href="/master-alloys"
                  className="hover:text-amber-600 transition-colors"
                >
                  Master Alloys
                </Link>
              </li>
              <li>
                <Link
                  href="/metals"
                  className="hover:text-amber-600 transition-colors"
                >
                  Metals
                </Link>
              </li>
              <li>
                <Link
                  href="/fluxes"
                  className="hover:text-amber-600 transition-colors"
                >
                  Fluxes
                </Link>
              </li>
              <li>
                <Link
                  href="/graphite-crucibles"
                  className="hover:text-amber-600 transition-colors"
                >
                  Graphite Crucibles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 tracking-wide text-sm uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a
                  href="https://wa.me/923204990620?text=Salam,%20ma%20apki%20website%20dekh%20rha%20tha,%20muja%20rates%20bta%20dein."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  +92 320 4990620
                </a>
              </li>
              <li>
                <a
                  href="mailto:sstraders03204990620@gmail.com"
                  className="hover:text-amber-600 transition-colors"
                >
                  sstraders03204990620@gmail.com
                </a>
              </li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>Copyright © 2026 SS Traders · All rights reserved</p>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-amber-600 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <p>
            developed by{" "}
            <a
              href="https://www.deepdevsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 hover:text-amber-600 transition-colors"
            >
              deep dev solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

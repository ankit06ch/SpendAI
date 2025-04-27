import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-16">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-3 font-nacelle text-[1rem] font-semibold text-gray-200">
                SpendAI
              </h3>
              <p className="text-indigo-200/65">
                Your AI-powered financial companion for smarter money management.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-nacelle text-[1rem] font-semibold text-gray-200">
                Features
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>Expense Tracking</li>
                <li>Budget Management</li>
                <li>AI Insights</li>
                <li>Financial Reports</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-nacelle text-[1rem] font-semibold text-gray-200">
                Resources
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>Financial Education</li>
                <li>Blog</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-nacelle text-[1rem] font-semibold text-gray-200">
                Legal
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-indigo-200/10 pt-8 text-center text-indigo-200/65">
            <p>© 2024 SpendAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

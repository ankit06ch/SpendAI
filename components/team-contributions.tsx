import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function TeamContributions() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                User Stories
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              SpendAI User Stories
            </h2>
            <p className="text-lg text-indigo-200/65">
              Discover how SpendAI helps users manage their finances effectively
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Regular User Stories
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• Track daily expenses and income</li>
                <li>• Set and monitor monthly budgets</li>
                <li>• View spending patterns and trends</li>
                <li>• Receive personalized financial advice</li>
                <li>• Generate financial reports</li>
                <li>• Set financial goals and track progress</li>
                <li>• Connect with financial advisors</li>
                <li>• Access financial education resources</li>
              </ul>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Financial Advisor Stories
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• Manage multiple client portfolios</li>
                <li>• View client financial data</li>
                <li>• Provide personalized recommendations</li>
                <li>• Track client progress</li>
                <li>• Generate client reports</li>
                <li>• Schedule client meetings</li>
                <li>• Share financial education materials</li>
                <li>• Monitor client financial goals</li>
              </ul>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Shared Features
              </h3>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• Secure account management</li>
                <li>• Multi-device access</li>
                <li>• Real-time notifications</li>
                <li>• Data visualization tools</li>
                <li>• Export financial data</li>
                <li>• Customizable dashboard</li>
                <li>• AI-powered insights</li>
                <li>• Financial goal tracking</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
} 
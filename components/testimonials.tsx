"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

// Hardcoded team member assignments
const teamMembers = [
  { id: 0, name: "All" },
  { id: 1, name: "Krish Arora" },
  { id: 2, name: "Ankit Chandra" },
  { id: 3, name: "Geetacharan Koyaguri" },
  { id: 4, name: "Sri Ritvik Maddireddy" },
  { id: 5, name: "Surya Abhinav Nookarapu" },
];

// Add a 'member' property to each testimonial (hardcoded assignments)
const testimonials = [
  { content: "As a user, I want to track daily expenses and income.", categories: [1], member: 1 },
  { content: "As a user, I want to set and monitor monthly budgets.", categories: [1], member: 2 },
  { content: "As a user, I want to view spending patterns and trends.", categories: [1], member: 3 },
  { content: "As a user, I want to receive personalized financial advice.", categories: [1], member: 4 },
  { content: "As a user, I want to generate financial reports.", categories: [1], member: 5 },
  { content: "As a user, I want to set financial goals and track progress.", categories: [1], member: 1 },
  { content: "As a user, I want to connect with financial advisors.", categories: [1], member: 2 },
  { content: "As a user, I want to access financial education resources.", categories: [1], member: 3 },
  { content: "As a financial advisor, I want to manage multiple client portfolios.", categories: [2], member: 4 },
  { content: "As a financial advisor, I want to view client financial data.", categories: [2], member: 5 },
  { content: "As a financial advisor, I want to provide personalized recommendations.", categories: [2], member: 1 },
  { content: "As a financial advisor, I want to track client progress.", categories: [2], member: 2 },
  { content: "As a financial advisor, I want to generate client reports.", categories: [2], member: 3 },
  { content: "As a financial advisor, I want to schedule client meetings.", categories: [2], member: 4 },
  { content: "As a financial advisor, I want to share financial education materials.", categories: [2], member: 5 },
  { content: "As a financial advisor, I want to monitor client financial goals.", categories: [2], member: 1 },
  { content: "As a user, I want secure account management.", categories: [1,2], member: 2 },
  { content: "As a user, I want multi-device access.", categories: [1,2], member: 3 },
  { content: "As a user, I want real-time notifications.", categories: [1,2], member: 4 },
  { content: "As a user, I want data visualization tools.", categories: [1,2], member: 5 },
  { content: "As a user, I want to export financial data.", categories: [1,2], member: 1 },
  { content: "As a user, I want a customizable dashboard.", categories: [1,2], member: 2 },
  { content: "As a user, I want AI-powered insights.", categories: [1,2], member: 3 },
  { content: "As a user, I want to track financial goals.", categories: [1,2], member: 4 },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(0);
  const [role, setRole] = useState<'user' | 'advisor'>('user');

  // Filter by both team member and role
  const filteredTestimonials = testimonials.filter(
    t => (category === 0 || t.member === category) && ((role === 'user' && t.categories.includes(1)) || (role === 'advisor' && t.categories.includes(2)))
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Team Contributions
          </h2>
          <p className="text-lg text-indigo-200/65">
            SpendAI User Stories Implemented by the Developers
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-gray-800/40 p-1">
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 ${role === 'user' ? 'bg-indigo-500 text-white shadow' : 'text-indigo-200 hover:bg-gray-700'}`}
              onClick={() => setRole('user')}
            >
              As a User
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 ${role === 'advisor' ? 'bg-indigo-500 text-white shadow' : 'text-indigo-200 hover:bg-gray-700'}`}
              onClick={() => setRole('advisor')}
            >
              As a Financial Advisor
            </button>
          </div>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {teamMembers.map(member => (
                <button
                  key={member.id}
                  className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === member.id ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                  aria-pressed={category === member.id}
                  onClick={() => setCategory(member.id)}
                >
                  <span>{member.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {filteredTestimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} highlighted={true}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  highlighted,
  children,
}: {
  testimonial: {
    content: string;
    categories: number[];
    member: number;
  };
  highlighted: boolean;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}
    >
      <div className="flex flex-col gap-4">
        <div></div>
        <p className="text-indigo-200/65 before:content-['\201C'] after:content-['\201D']">
          {children}
        </p>
      </div>
    </article>
  );
}

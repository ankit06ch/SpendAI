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
  { content: "As a user, I want to register an account using my email and password so that I can access the application's features.", categories: [1], member: 1 },
  { content: "As a registered user, I want to log in to my account so that I can access my finances.", categories: [1], member: 2 },
  { content: "As a registered user, I want to reset my password so that I can regain access to my account in case I forgot my password.", categories: [1], member: 3 },
  { content: "As a registered user, I want to add, edit, and delete my income so that I can accurately track my earnings over time.", categories: [1], member: 4 },
  { content: "As a registered user, I want to record, edit, and delete my expenses so that I can accurately track my spending.", categories: [1], member: 5 },
  { content: "As a registered user, I want to categorize my transactions so that I can better understand how my money is flowing.", categories: [1], member: 1 },
  { content: "As a registered user, I want to set and adjust monthly spending limits for different categories so that I can effectively budget and save money.", categories: [1], member: 2 },
  { content: "As a user, I want to modify my budget over time so that it reflects my changing financial needs.", categories: [1], member: 3 },
  { content: "As a registered user, I want to view a summary of my earnings and spending so that I can quickly assess my financial situation.", categories: [1], member: 4 },
  { content: "As a registered user, I want view a detailed report of my earning and spending so that I can quickly assess my financial situation.", categories: [1], member: 5 },
  { content: "As a registered user, I want to filter my reports by time period so that I can analyze my financial trends over different time frames.", categories: [1], member: 1 },
  { content: "As a registered user, I want to receive personalized financial tips powered by artificial intelligence so that I can make better financial decisions.", categories: [1], member: 2 },
  { content: "As a registered user, I want to communicate with an AI assistant so that I can ask questions and receive real-time financial advice.", categories: [1], member: 3 },
  { content: "As a user, I want to view the application from any device so that I can check my finances anytime and anywhere.", categories: [1], member: 4 },
  { content: "As a financial advisor, I want to manage users (view, create, update, or delete) from the application so that user information is up to date.", categories: [2], member: 5 },
  { content: "As a financial advisor, I want to manage transactions (view, create, update, or delete) from the application so that financial data remains accurate.", categories: [2], member: 1 },
  { content: "As a registered user, I want my financial data to be stored securely and backed up so that I can ensure my information is protected and recoverable.", categories: [1], member: 2 },
  { content: "As a registered user, I want to access the functionality through a responsive graphical user interface (GUI) so that I can easily access the functionality with less of a learning curve to use the app.", categories: [1], member: 3 },
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

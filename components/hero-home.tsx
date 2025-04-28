"use client";
import { useState } from "react";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import mobile from "@/public/images/mobile.png";
import Image from "next/image";

export default function HeroHome() {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const openMobileModal = () => setIsMobileModalOpen(true);
  const closeMobileModal = () => setIsMobileModalOpen(false);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Your AI-Powered Financial Companion
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Track, manage, and optimize your finances—anytime, anywhere.
              </p>
              <div className="flex justify-center">
                <video
                  src="/videos/video.mp4"
                  width={720}
                  height={405}
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ borderRadius: '1rem', maxWidth: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
                  poster="/images/hero-image-01.jpg"
                >
                  Sorry, your browser does not support embedded videos.
                </video>
              </div>
              <div className="text-sm text-indigo-200/65 mt-2 text-center">3:15</div>
            </div>
            <div className="flex justify-center mt-6">
              <a
                className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] w-auto"
                href="https://spendai-1.onrender.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative inline-flex items-center">
                  Explore Now
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
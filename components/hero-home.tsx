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
              Your Ultimate Movie Hub
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Buy, Review, and enjoy on any device, anytime.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://krisharora.pythonanywhere.com/"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Now
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                    onClick={openMobileModal}
                  >
                    View Mobile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>

      {/* Mobile Modal */}
      {isMobileModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-all duration-300 ease-in-out opacity-100"
          onClick={closeMobileModal}
        >
          <div
            className="relative bg-gray-950 rounded-3xl p-6 w-[90%] sm:w-[375px] max-w-[425px] shadow-xl transition-all transform scale-95 hover:scale-100 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
          >
            {/* Close Button */}
            <button
              onClick={closeMobileModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition text-2xl"
            >
              ✕
            </button>
            <center><h2 className="text-xl text-gray-100 font-semibold mb-4">Mobile Preview</h2> </center>
            {/* iPhone Frame */}
              <div className="w-full h-[650px] sm:h-[650px] bg-gray-950 flex items-center justify-center">
                <Image
                  className="inline-flex"
                  src={mobile}
                  alt="Mobile Preview"
                  layout="intrinsic" // Ensures the image maintains its aspect ratio
                />
              </div>

          </div>
        </div>
      )}
    </section>
  );
}
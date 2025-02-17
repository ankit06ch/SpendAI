"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Diagram from "@/public/images/diagram.png";
import Spotlight from "@/components/spotlight";

export default function Diagrams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <Spotlight className="group mx-auto grid max-w-lg items-start gap-6 lg:max-w-none lg:grid-cols-2">
            {/* Image Card */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(<Image src={Diagram} width={500} height={400} alt="Workflow Image" />)}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <Image
                  className="inline-flex"
                  src={Diagram}
                  width={500}
                  height={400}
                  alt="Workflow Image"
                />
              </div>
            </div>

            {/* PDF Card - Opens Modal */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(
                <div className="relative flex flex-col items-center">
                  <h2 className="text-xl text-gray-100 font-semibold mb-4">Scrum Guide</h2>
                  <iframe
                    src="/scrum.pdf"
                    className="w-[200%] h-[400px] p-2 bg-gray-950 border border-gray-700 rounded-lg shadow-lg shadow-black/40"
                  ></iframe>
                </div>
              )}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 flex items-center justify-center">
                <span className="text-lg text-gray-200 font-semibold">📄 Click to View SCRUM PDF</span>
              </div>
            </div>
          </Spotlight>

          {/* MODAL WITH ANIMATION */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                onClick={closeModal} // Click outside closes modal
              >
                <motion.div
                  className="relative bg-gray-900 shadow-xl rounded-2xl p-6 w-full max-w-4xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
                >
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl"
                  >
                    ✕
                  </button>

                  {/* Modal Content */}
                  <div className="relative flex flex-col items-center">
                    {modalContent}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
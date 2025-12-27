import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Modal } from "./Modal";
import { ContactForm } from "../ContactForm";

export const CTASection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm />
      </Modal>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div onClick={() => setModalOpen(true)} className="cursor-pointer">
          <div className="max-w-6xl mx-auto inline">
            <div className="h-full bg-brand-lime rounded-[40px] p-6 lg:p-12 flex flex-col lg:items-start gap-y-[11px] justify-between">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                Let’s Discuss Your <br /> Project
              </h2>
              <div className="flex justify-end w-full">
                <button className="w-[58px] h-[58px] lg:w-16 lg:h-16 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-6">
                  <ArrowRight className="text-white w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

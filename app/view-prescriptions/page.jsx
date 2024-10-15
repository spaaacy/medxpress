"use client";

import { useState } from "react";
import Modal from "react-modal";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const pdfFiles = [
  "/pdfs/prescription_1.pdf",
  "/pdfs/prescription_2.pdf",
  "/pdfs/prescription_3.pdf",
  "/pdfs/prescription_4.pdf",
  "/pdfs/prescription_5.pdf",
  "/pdfs/prescription_6.pdf",
  "/pdfs/prescription_7.pdf",
  "/pdfs/prescription_8.pdf",
  "/pdfs/prescription_9.pdf",
  "/pdfs/prescription_10.pdf",
];

const ViewPrescriptions = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPdf(null);
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="container mx-auto p-6 flex-grow">
        <h1 className="text-2xl font-semibold mb-6">Available Prescriptions</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pdfFiles.map((pdf, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-2 cursor-pointer"
              onClick={() => openModal(pdf)}
            >
              <div className="pdf-preview h-40 overflow-hidden">
                <iframe
                  src={`${pdf}#page=1`}
                  width="100%"
                  height="100%"
                  title={`Prescription ${index + 1}`}
                />
              </div>
              <p className="text-center mt-2 text-gray-700">Prescription {index + 1}</p>
            </div>
          ))}
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="flex justify-end mb-4">
            <button onClick={closeModal} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
              Close
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-viewer h-screen">
              <iframe
                src={selectedPdf}
                width="100%"
                height="100%"
                title="PDF Viewer"
              />
            </div>
          )}
        </Modal>
      </div>

      <Footer />
    </div>
  );
};

export default ViewPrescriptions;

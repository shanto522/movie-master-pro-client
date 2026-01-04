import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Is this platform free?",
    answer: "Yes! You can browse, rate, and explore movies for free.",
  },
  {
    question: "Can I add my own movies?",
    answer: "Only registered users can suggest new movies, subject to admin approval.",
  },
  {
    question: "How do I rate movies?",
    answer: "Click on the star icon on the movie details page to give your rating.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We follow strict security protocols to protect your data.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-20">
      <div className="max-w-[1410px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl text-blue-500 flex font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer shadow-md"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{f.question}</h3>
                {openIndex === idx ? <FaMinus /> : <FaPlus />}
              </div>
              {openIndex === idx && <p className="mt-4 text-gray-600 dark:text-gray-300">{f.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

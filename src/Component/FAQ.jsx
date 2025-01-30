import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { RiCheckboxCircleLine } from "react-icons/ri";


const faqData = [
  {
    question: "How to Hire a Man and Van in Guildford?",
    answer:
      "You can hire a Man and Van in Guildford by calling our team or booking online. We offer reliable services at competitive prices.",
  },
  {
    question: "Do you offer a renewals discount?",
    answer:
      "Yes, we offer discounts for repeat customers. Contact us for more details.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Guildford and surrounding areas. Contact us to check if we operate in your location.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide house clearance, waste removal, and transportation services for both domestic and commercial needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-300 opacity-70 mt-10">
      <div className="max-w-2xl mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Man and Van</h2>
        <p className="text-center text-gray-600 mb-8 text-xl">
          Man and Van Guildford deal with all types of house and waste
          clearance, both domestic and commercial, from big clearance projects
          to smaller clear-outs.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    <RiCheckboxCircleLine className="size-6" />
                  </span>
                  {item.question}
                </div>
                <span className="text-xl">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
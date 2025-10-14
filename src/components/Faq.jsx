import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long will it take to learn?",
      answer:
        "It depends on your pace — typically 3–6 months for solid foundations.",
    },
    {
      question: "Is this content free?",
      answer: "Yes! All learning paths are free and open-source.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No. Our roadmap starts from the basics and guides you step by step.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-800">
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="font-semibold cursor-pointer w-full text-left flex justify-between items-center"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

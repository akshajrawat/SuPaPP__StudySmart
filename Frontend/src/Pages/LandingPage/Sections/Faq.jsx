import React, { useState } from "react";
import { FaQuestion, FaPlus, FaMinus } from "react-icons/fa";

export const highlights = [
  {
    id: 1,
    title: "AI-Powered Study Material",
    description:
      "Instantly generate topic-based notes, summaries, and answers using advanced AI built for students.",
  },
  {
    id: 2,
    title: "Student-to-Student Chat",
    description:
      "Connect with other students to ask questions, share ideas, and study together in real-time.",
  },
  {
    id: 3,
    title: "Earn by Sharing Notes",
    description:
      "Become a seller and earn money by uploading your high-quality notes, assignments, or guides.",
  },
  {
    id: 4,
    title: "Clean, Distraction-Free Design",
    description:
      "A beautifully designed interface focused on productivity and ease of use for students.",
  },
  {
    id: 5,
    title: "All-in-One Student Hub",
    description:
      "Access learning tools, communication, and monetization features — all in one place.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      id="Faqs"
      className="min-h-screen w-full bg-black flex flex-col items-center gap-10 p-10"
    >
      {/* Top section */}
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-5xl font-semibold text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-2xl text-[#ffffffa1]">
          We’ve gathered the top questions students usually ask — with answers!
        </p>
      </div>

      {/* FAQ section */}
      <div className="w-full max-w-4xl flex flex-col gap-10 p-2">
        {highlights.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="cursor-pointer border-t border-[#ffffff45] pt-6 px-2 transition-all duration-300"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center px-3">
              <div className="flex items-center gap-3 text-white">
                <FaQuestion className="text-xl mt-1" />
                <p className="text-xl font-semibold">{item.title}</p>
              </div>
              <div className="text-white text-xl">
                {activeId === item.id ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            {/* Answer (conditional) */}
            <div
              className={`text-white text-lg mt-3 px-11 overflow-hidden transition-all duration-300 ease-in-out ${
                activeId === item.id
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

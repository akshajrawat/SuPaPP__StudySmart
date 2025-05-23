import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Sup App?",
    answer:
      "Sup App is a productivity platform that helps you manage tasks, track goals, and stay organized—all in one place.",
  },
  {
    question: "Is Sup App free to use?",
    answer:
      "Yes! Sup App offers a free version with core features. We also provide premium plans for teams and advanced features.",
  },
  {
    question: "Can I use Sup App on my mobile device?",
    answer:
      "Absolutely. Sup App is fully responsive and works seamlessly on desktops, tablets, and mobile devices.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot Password'. We'll send you a link to reset your password securely.",
  },
  {
    question: "Is my data secure on Sup App?",
    answer:
      "Yes, we prioritize your privacy and use industry-standard encryption to protect your data.",
  },
];

const Faq = () => {
  // stores the index of selected faq
  const [selected, setSelected] = useState(null);

  // toggles selected value and set index
  const toggle = (index) => {
    // nulls the value if the faq is already selected
    if (selected == index) {
      setSelected(null);
    } else {
      // set value of selected to be the index received
      setSelected(index);
    }
  };

  return (
    <>
      <div
        id="Faqs"
        className=" flex flex-col justify-start gap-2 p-5 mt-5 lg:pt-25 xl:pt-25"
      >
        {/* Head start */}
        <h1 className=" text-black dark:text-white text-4xl xl:text-5xl xl:flex-row font-bold flex flex-col  gap-2 ml-1">
          <span>Frequenly Asked</span>
          <span className="text-[#4fd1d9]">Question</span>
        </h1>
        <div className="text-[#727382] text-lg font-semibold leading-none w-[95%] xl:w-[40%]  ml-1">
          We know you have some questions in mind, we have tried to list the
          most important ones.
        </div>
        {/* Head end */}
        {/* Faq start */}
        <div className="  bg-[#dfdfdf44] dark:bg-[#151630] w-full rounded-2xl border-2 border-[#7273825e] px-3 pt-10 min-h-[60vh] mt-5">
          <div className="text-[#707070] dark:text-[#b9b9ba]">
            {faqs.map((item, index) => {
              return (
                <div
                  onClick={() => toggle(index)}
                  key={index}
                  className="border-t border-[#7273825e] p-4"
                >
                  <h2 className="text-sm xl:text-lg font-bold flex justify-between">
                    {item.question}{" "}
                    {selected === index ? <FaMinus /> : <IoMdAdd />}
                  </h2>
                  <div
                    className={`text-sm xl:text-lg text-[#727382] overflow-hidden transition-all ease-in-out duration-300 ${
                      selected === index
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

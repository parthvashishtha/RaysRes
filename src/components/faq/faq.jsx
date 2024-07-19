import React, { useState, useEffect, useRef } from "react";
import "./faq.css";
import Question from "./question";

const FAQ = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(null);
  const buttonRefs = useRef([]);

  const questionsData = [
    {
      category: "Installation and Requirements",
      questions: [
        {
          id: 1,
          question:
            "What is the typical installation time (TAT) for solar panels?",
          answer: "The typical installation time is 3 months.",
        },
        {
          id: 2,
          question:
            "What is the correct size of a solar panel, and how much space is required?",
          answer:
            "The space required depends on the size of the solar system you choose. Here are the general guidelines- \n  1. KW System Requires approximately 50 square feet of space. \n 2 KW System Requires approximately 100 square feet of space.\n 3 KW System Requires approximately 150 square feet of space.",
        },
      ],
    },
    {
      category: "Finance and Payment",
      questions: [
        {
          id: 3,
          question: " When will the subsidy be credited?",
          answer:
            "The subsidy will be credited within 3 months after commissioning and approval.",
        },
        {
          id: 4,
          question:
            "How long does it take for the file and subsidy to be approved?",
          answer: "Approval typically takes 2-3 days.",
        },
        {
          id: 5,
          question: "How can I check if the subsidy has been approved?",
          answer:
            "You can reach out to our support team, and we will check the status on the Government portal for you.",
        },
        {
          id: 6,
          question: "How can I get a loan, and how much can I get?",
          answer:
            "Our bank partners provide loan options. For more information, please contact our team.",
        },
        {
          id: 7,
          question:
            "How should I make the payment—after subtracting the subsidy or the full amount?",
          answer:
            "For direct payment, you must pay the full amount according to our timeline:1. Rs. 2100 as a booking amount. 2. 80% before installation, after approvals and commissioning. 3. 20% after the completion of the project. For the financing option, you must pay the EMI on the remaining amount.",
        },
        {
          id: 8,
          question: "What is the booking fee?",
          answer:
            "The booking fee is Rs. 2100. Upon booking, we will collect this amount along with all required documents to start the commissioning and filing process.",
        },
        {
          id: 9,
          question: "Are there any additional charges?",
          answer:
            "Any additional charges will be the same as those charged by the government office (e.g., load capacity increase, paperwork, and filing).",
        },
        {
          id: 10,
          question: "Where can I find the rate list?",
          answer: "For detailed pricing, please contact our team.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          id: 11,
          question: "Does the system work during power outages?",
          answer:
            "The standard rooftop system does not come with a battery. While adding a battery is possible, it is generally not recommended due to the high cost.",
        },
        {
          id: 12,
          question: "Does the system include a battery?",
          answer: "We are located in San Francisco, CA.",
        },
        {
          id: 13,
          question: "What is the warranty for the system?",
          answer:
            "The system comes with a 25-year warranty. For more detailed information on warranties and services, please contact our team.",
        },
      ],
    },
    {
      category: "Solar Panel and System",
      questions: [
        {
          id: 14,
          question: "How long does solar panel installation take?",
          answer:
            "Solar panel installation typically takes 2-3 days to complete after all necessary commissioning and approvals are obtained.",
        },
        {
          id: 15,
          question:
            "What precautions and maintenance are required for solar panels?",
          answer:
            "Solar panels require minimal maintenance. The main task is to clean the panels every few months to remove accumulated dust. For the first five years, maintenance is covered by us.",
        },
        {
          id: 16,
          question: "Can solar panels reduce my electricity bill?",
          answer:
            "Yes, solar panels can significantly reduce your electricity bill, potentially bringing it down to zero.",
        },
        {
          id: 17,
          question: "How much electricity do solar panels generate?",
          answer:
            "The amount of electricity generated depends on the size of the solar system. Typically, a 1 KW system generates around 120 units of electricity per month, assuming normal bright sunny days.",
        },
      ],
    },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setActiveQuestion(null); // Reset active question when changing category
  };

  const handleQuestionClick = (id) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

  useEffect(() => {
    const updateUnderlineStyle = () => {
      const button = buttonRefs.current[selectedButton];
      if (button) {
        setUnderlineStyle({
          left: button.offsetLeft,
          width: button.clientWidth,
        });
      }
    };
    updateUnderlineStyle();
    window.addEventListener("resize", updateUnderlineStyle);
    return () => window.removeEventListener("resize", updateUnderlineStyle);
  }, [selectedButton]);

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-buttons">
          {questionsData.map((data, index) => (
            <button
              key={index}
              ref={(el) => (buttonRefs.current[index] = el)}
              className={
                selectedButton === index ? "faq-button selected" : "faq-button"
              }
              onClick={() => handleButtonClick(index)}
            >
              {data.category}
            </button>
          ))}
          <div
            className="underline"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
        </div>
        <div className="faq-questions">
          {questionsData[selectedButton].questions.map((q) => (
            <Question
              key={q.id}
              question={q}
              isActive={activeQuestion === q.id}
              onClick={() => handleQuestionClick(q.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React, {
  useRef,
  useEffect,
  useState,
} from "react"; /* Added useRef, useEffect, useState */
import "./question.css";

const Question = ({ question, isActive, onClick }) => {
  const answerRef = useRef(null);
  const [height, setHeight] = useState("auto"); // Default to 'auto' initially

  useEffect(() => {
    if (isActive) {
      setHeight(`${answerRef.current.scrollHeight}px`); // Set height based on content
    } else {
      setHeight("0"); // Collapse height when not active
    }
  }, [isActive]);

  return (
    <div className="question-container">
      <div className="question" onClick={onClick}>
        <span>{question.question}</span>
        <span className="icon">{isActive ? "-" : "+"}</span>
      </div>
      <div
        ref={answerRef}
        className={`answer ${isActive ? "open" : ""}`}
        style={{ height: height }} // Apply height dynamically
      >
        {question.answer}
      </div>
    </div>
  );
};

export default Question;

import React, { useRef, useEffect, useState } from "react";
import "./question.css";

const Question = ({ question, isActive, onClick }) => {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
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
        style={{ height: `${height}px` }}
      >
        {question.answer}
      </div>
    </div>
  );
};

export default Question;

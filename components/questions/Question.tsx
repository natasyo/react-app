import styleQuestion from "./question-style.module.scss";
import { IQuestion } from "@/types";
import { useState } from "react";

import React from "react";

type Props = {
  question: IQuestion;
  num: number;
};
const Question = ({ question, num }: Props) => {
  const [open, setOpen] = useState(false);
  function onOpen() {
    setOpen(!open);
  }
  return (
    <div
      className={`${styleQuestion.questions__item} ${
        open ? styleQuestion.questions__item_open : ""
      }`}
    >
      <div className={`${styleQuestion.questions__number} h6`}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </div>
      <div className={styleQuestion.questions__content}>
        <h6 className={styleQuestion.questions__header}>{question.header}</h6>
        <p className={styleQuestion.questions__text}>{question.text}</p>
      </div>
      <button className={styleQuestion.questions__button} onClick={onOpen}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
            fill="#282938"
          />
        </svg>
      </button>
    </div>
  );
};

export default Question;

"use client";
import React from "react";
import styleQuestion from "./question-style.module.scss";
import { IQuestion } from "@/types";
import Question from "@/components/questions/Question.tsx";

export type Props = {
  questions: IQuestion[];
};
const Questions = ({ questions }: Props) => {
  return (
    <div className={styleQuestion.questions}>
      {questions.map((question, i) => {
        return <Question question={question} num={i} key={i} />;
      })}
    </div>
  );
};

export default Questions;

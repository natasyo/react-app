// @flow
import * as React from "react";
import styleMain from "./question-style.module.scss";
import Link from "next/link";
import { Suspense } from "react";
import { Loading } from "@/components/Loading/Loading.tsx";
import Questions from "@/components/questions/Questions.tsx";

export function QuestionsSection() {
  return (
    <div className={styleMain.questions}>
      <div className={`${styleMain.questions__container} container`}>
        <div className={styleMain.questions__left}>
          <h3 className={styleMain.questions__header}>
            Frequently asked questions
          </h3>
          <Link
            href={"/about"}
            className={`text-size-medium-bold ${styleMain.questions__abouLink}`}
          >
            Contact us for more info
          </Link>
        </div>
        <Suspense fallback={<Loading />}>
          <Questions />
        </Suspense>
      </div>
    </div>
  );
}

"use client";
import styleQuestion from "./question-style.module.scss";
import Question from "@/components/questions/Question.tsx";
import {
  GetQuestionsDocument,
  GetQuestionsQuery,
} from "@/generates/gql/graphql.ts";
import { useSuspenseQuery } from "@apollo/client";
import { Loading } from "@/components/Loading/Loading.tsx";
const Questions = () => {
  const { data, error } = useSuspenseQuery(GetQuestionsDocument, {
    // context: { fetchOptions: { cache: "force-cache" } },
  });

  // if (loading) return <Loading />;
  if (error) return <div>Error</div>;
  const questions:
    | Array<NonNullable<GetQuestionsQuery["questions"]>["nodes"][0]>
    | undefined = data?.questions?.nodes;
  if (!data) return <Loading />;
  return (
    <div className={styleQuestion.questions}>
      {questions
        ? questions.map((question, i) => {
            return <Question question={question} num={i} key={i} />;
          })
        : ""}
    </div>
  );
};

export default Questions;

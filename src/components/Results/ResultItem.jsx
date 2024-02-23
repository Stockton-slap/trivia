import React, { useMemo } from "react";
import QuestionHeadline from "../Questions/QuestionHeadline/QuestionHeadline";

export default function ResultItem({ index, userAnswers, questionItem }) {
  const notFirstItem = index !== 0;
  const userAnswer = userAnswers[index].answer;

  const { quote, answers, type, answer } = questionItem;

  const isAnswerCorrect = useMemo(() => {
    switch (type) {
      case "options":
      case "image":
        return answers.find(({ isCorrect }) => isCorrect).answer === userAnswer;
      case "input":
        return (
          answer.find(
            (item) => item.toLowerCase() === userAnswer.toLowerCase()
          ) !== undefined
        );
      default:
    }
  }, [answer, answers, type, userAnswer]);

  const correctAnswer =
    type === "input"
      ? quote.replace("....", answer[0])
      : answers.find(({ isCorrect }) => isCorrect).answer;

  const isCharacterI = correctAnswer.startsWith("Character I:");
  const isCharacterII = correctAnswer.startsWith("Character II:");
  const isDialogue = isCharacterI || isCharacterII;
  const splitQuote = correctAnswer.split("\n");

  return (
    <li
      className={`w-full ${
        notFirstItem && "mt-[40px]"
      } border-[1px] border-black overflow-hidden p-[8px] rounded-[10px]`}
    >
      <div
        className={`w-full h-[40px] rounded-[8px] ${
          isAnswerCorrect ? "bg-green" : "bg-red"
        } bg-[#ab2626]`}
      />

      <QuestionHeadline questionItem={questionItem} withAnswer />

      <div className="flex items-baseline gap-[10px]">
        <p className="mt-[10px] text-grey font-bold text-xs w-[130px]  text-left">
          Your answer:
        </p>
        <span className="text-grey">{userAnswer}</span>
      </div>

      <div className="flex items-baseline gap-[10px]">
        <p className="font-bold text-green w-[130px]  text-left">
          Correct answer:{" "}
        </p>
        {isDialogue ? (
          <ul>
            {splitQuote.map((quote, quoteIndex) => {
              const [character, dialogue] = quote.split(":");
              const splitDialogue = dialogue.split(" ");

              return (
                <li key={quoteIndex} className="flex">
                  <p className="text-start text-green text-xs w-[90px]">
                    {`${character}:`}
                  </p>
                  <p className="ml-[8px] text-green text-xs">
                    {splitDialogue.map((word, index) => (
                      <span
                        key={index}
                        className={word === answer[0] ? "underline" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-green text-xs">{correctAnswer}</p>
        )}
      </div>
    </li>
  );
}

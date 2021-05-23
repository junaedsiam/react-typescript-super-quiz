import React, { useEffect, useState } from 'react'
import { UserAnswer, QuestionProps } from 'interfaces'
import { randomizedOptions } from 'utils/helper'
import clsx from 'clsx'

const btnClass = (userAnswer: UserAnswer | undefined, option: string) =>
  clsx(
    'px-10 py-4 font-bold text-left border border-gray-200 rounded-full shadow-sm outline-none hover:shadow-md focus:outline-none',
    !!userAnswer && userAnswer.correctAnswer === option
      ? 'bg-green-400 text-white'
      : null,
    !!userAnswer &&
      userAnswer.answer === option &&
      userAnswer.answer !== userAnswer.correctAnswer
      ? 'bg-red-400 text-white'
      : null
  )

const Question = ({
  question,
  setUserAnswers,
  setUserAnswer,
  activeQuestionIndex,
  userAnswer,
}: QuestionProps) => {
  const [options, setOptions] = useState<string[]>()
  useEffect(() => {
    setOptions(
      randomizedOptions(question.correct_answer, question.incorrect_answers)
    )
  }, [question])
  const handleUserClick = (option: string) => {
    const answer = {
      answer: option,
      correctAnswer: question.correct_answer,
    }
    setUserAnswer(answer)
    setUserAnswers((c) => [...c, answer])
  }
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold text-gray-700">
        <span className="inline-flex mb-1 text-2xl text-gray-900">
          {activeQuestionIndex + 1}
        </span>
        <br />
        <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
      </h3>
      <div className="flex flex-col space-y-6">
        {options &&
          options.map((option) => (
            <button
              className={btnClass(userAnswer, option)}
              key={option}
              onClick={() => !userAnswer && handleUserClick(option)}
              dangerouslySetInnerHTML={{ __html: option }}
            ></button>
          ))}
      </div>
    </div>
  )
}

export default Question

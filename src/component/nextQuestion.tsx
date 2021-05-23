import clsx from 'clsx'
import { NextQuestionProps } from 'interfaces'

const NextQuestion = ({
  activeQuestionIndex,
  setActiveQuestionIndex,
  userAnswer,
  setUserAnswer,
  setGameOver,
  total,
}: NextQuestionProps) => {
  const handleNextClick = () => {
    if (activeQuestionIndex < total - 1) {
      setActiveQuestionIndex((c) => c + 1)
      setUserAnswer(undefined)
    } else {
      setGameOver(true)
    }
  }
  return (
    <div className="flex justify-end mt-8">
      <button
        className={clsx(
          'px-4 py-2 font-semibold border border-gray-200 rounded-full focus:outline-none',
          !userAnswer
            ? 'cursor-not-allowed text-gray-300 '
            : 'cursor-pointer text-white bg-gray-800 hover:shadow-md'
        )}
        disabled={!userAnswer}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  )
}

export default NextQuestion

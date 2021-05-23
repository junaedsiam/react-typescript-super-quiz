import { ContentContainer } from './layout'
import { quizData } from './../utils/sample-data'
import { useState } from 'react'
import { ApiDataFormat, UserAnswer, QuizProps } from 'interfaces'
import Question from './question'
import NextQuestion from './nextQuestion'
import GameOver from './gameOver'

const Quiz = ({ setStartGame }: QuizProps) => {
  const [questions] = useState<ApiDataFormat[]>(quizData.results)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [userAnswer, setUserAnswer] = useState<UserAnswer>()
  const [gameOver, setGameOver] = useState(false)

  const resetGameState = () => {
    setUserAnswers([])
    setUserAnswer(undefined)
    setActiveQuestionIndex(0)
    setStartGame(false)
    setGameOver(false)
  }
  return (
    <ContentContainer>
      {!gameOver ? (
        <>
          <Question
            question={questions[activeQuestionIndex]}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            setActiveQuestionIndex={setActiveQuestionIndex}
            setUserAnswers={setUserAnswers}
            activeQuestionIndex={activeQuestionIndex}
          />
          <NextQuestion
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            setGameOver={setGameOver}
            total={questions.length}
          />{' '}
        </>
      ) : (
        <GameOver userAnswers={userAnswers} resetGameState={resetGameState} />
      )}
    </ContentContainer>
  )
}

export default Quiz

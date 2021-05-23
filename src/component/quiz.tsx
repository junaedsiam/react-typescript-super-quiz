import { ContentContainer } from './layout'
import { quizData } from './../utils/sample-data'
import { useEffect, useState } from 'react'
import { ApiDataFormat, UserAnswer, QuizProps } from 'interfaces'
import Question from './question'
import NextQuestion from './nextQuestion'
import GameOver from './gameOver'
import axios, { AxiosError } from 'axios'

const Quiz = ({ setStartGame }: QuizProps) => {
  const [apiUrl] = useState(process.env.REACT_APP_API_URL!)
  const [error, setError] = useState<AxiosError>()
  const [questions, setQuestions] = useState<ApiDataFormat[]>([])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [userAnswer, setUserAnswer] = useState<UserAnswer>()
  const [gameOver, setGameOver] = useState(false)
  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await axios.get(apiUrl)
        setQuestions(response.data.results)
      } catch (err) {
        setError(err?.message)
      }
    }
    getQuizData()
  }, [apiUrl])

  const resetGameState = () => {
    setUserAnswers([])
    setUserAnswer(undefined)
    setActiveQuestionIndex(0)
    setStartGame(false)
    setGameOver(false)
  }
  return (
    <ContentContainer>
      {error ? (
        <p>{error}</p>
      ) : !gameOver ? (
        questions.length ? (
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
          <p>Loading...</p>
        )
      ) : (
        <GameOver userAnswers={userAnswers} resetGameState={resetGameState} />
      )}
    </ContentContainer>
  )
}

export default Quiz

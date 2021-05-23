import React from 'react'

export interface ContainerProps {
  className?: string
  children?: React.ReactNode
  others?: any[]
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ContentContainerProps {
  children?: React.ReactNode
  alignment?: 'left' | 'center' | 'right'
}

interface QuizProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ApiDataFormat {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface UserAnswer {
  answer: string
  correctAnswer: string
}

export interface QuestionProps {
  question: ApiDataFormat
  activeQuestionIndex: number
  setActiveQuestionIndex: React.Dispatch<React.SetStateAction<number>>
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>
  userAnswer: UserAnswer | undefined
  setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswer | undefined>>
}

export interface NextQuestionProps {
  activeQuestionIndex: number
  setActiveQuestionIndex: React.Dispatch<React.SetStateAction<number>>
  userAnswer: UserAnswer | undefined
  setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswer | undefined>>
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>
  total: number
}

export interface GameOverProps {
  userAnswers: UserAnswer[]
  resetGameState: () => void
}

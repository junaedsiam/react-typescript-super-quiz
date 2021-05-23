import { GameOverProps } from 'interfaces'
import Button from './ui/button'
const GameOver = ({ resetGameState, userAnswers }: GameOverProps) => {
  const score = userAnswers.reduce((total, answer) => {
    total = total + (answer.answer === answer.correctAnswer ? 1 : 0)
    return total
  }, 0)
  return (
    <div className="text-center">
      <h3 className="text-5xl font-bold text-blue-500 uppercase transform">
        Game over
      </h3>
      <h2 className="mt-20 text-4xl">Your Score</h2>
      <div className="inline-flex flex-col items-center justify-center px-4 py-2 mt-4 mb-20 text-6xl font-bold text-gray-700 border border-gray-200 rounded shadow-lg">
        {score} / {userAnswers.length}
      </div>
      <br />
      <Button onClick={() => resetGameState()}> Back home </Button>
    </div>
  )
}

export default GameOver

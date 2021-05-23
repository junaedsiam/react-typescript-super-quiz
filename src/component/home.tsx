import { Container } from 'component/layout'
import { useState } from 'react'
import Brand from './brand'
import Quiz from './quiz'
import StartQuiz from './startQuiz'

const Home = () => {
  const [startGame, setStartGame] = useState(false)
  return (
    <Container>
      <Brand />
      {!startGame ? (
        <StartQuiz setStartGame={setStartGame} />
      ) : (
        <Quiz setStartGame={setStartGame} />
      )}
    </Container>
  )
}

export default Home

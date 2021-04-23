import Button from './button'
import Counter from './counter'

const StartQuiz = () => {
  return (
    <div className="px-10 py-10 text-center bg-white rounded-lg">
      <p className="mb-1 text-gray-700">Today's Quiz on</p>
      <h1 className="mb-8 text-3xl font-extrabold text-primary">
        General Knowledge
      </h1>
      <Counter className="mx-auto mb-12" />
      <Button className="flex w-full">Play Quiz Now</Button>
    </div>
  )
}

export default StartQuiz

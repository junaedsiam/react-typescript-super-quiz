export const getSecondsFromHour = (hour: number) => hour * 60 * 60

export const getCounterHours = (seconds: number) =>
  Math.floor(seconds / (60 * 60))

export const getCounterMinutes = (seconds: number) =>
  Math.floor((seconds % (60 * 60)) / 60)

export const getCounterSeconds = (seconds: number) => seconds % 60

export const randomizedOptions = (
  correctAnswer: string,
  incorrectAnswer: string[]
) =>
  [correctAnswer, ...incorrectAnswer].sort(() => (Math.random() > 0.5 ? 1 : -1))

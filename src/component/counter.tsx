import React, { useEffect, useState } from 'react'
import {
  getSecondsFromHour,
  getCounterHours,
  getCounterMinutes,
  getCounterSeconds,
} from 'utils/helper'

const Counter = ({ className = '' }: { className?: string }) => {
  const [time, setTime] = useState(getSecondsFromHour(8))

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (time > 0) {
      timeout = setTimeout(() => setTime((t) => t - 1), 1000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [time])

  return (
    <div className={className}>
      <p className="mb-4 text-gray-700">This Quiz Ends In</p>
      <div className="flex justify-center space-x-6">
        <div className="flex flex-col items-center justify-center w-20 h-20 text-gray-700 border border-gray-200 rounded shadow-lg">
          <span className="text-3xl font-extrabold">
            {getCounterHours(time)}
          </span>
          <span className="text-xs font-semibold">Hours</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-20 text-gray-700 border border-gray-200 rounded shadow-lg">
          <span className="text-3xl font-extrabold">
            {getCounterMinutes(time)}
          </span>
          <span className="text-xs font-semibold">Minutes</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-20 text-gray-700 border border-gray-200 rounded shadow-lg">
          <span className="text-3xl font-extrabold">
            {getCounterSeconds(time)}
          </span>
          <span className="text-xs font-semibold ">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default Counter

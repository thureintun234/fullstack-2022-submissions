import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, totalFeedback, average, positive }) => {
  if (totalFeedback === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={totalFeedback} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </div>
  )
}

export default Statistics
import { useState } from "react"
import Button from "./components/Button"
import Statistics from "./components/Statistics"


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  const totalFeedback = good + neutral + bad
  const average = totalFeedback / 3
  const positive = (10 * good) / 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} totalFeedback={totalFeedback}
        average={average} positive={positive} />
    </div>
  )
}

export default App;

import { useState } from 'react'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Statistics from '../Statistics/Statistics'
import Section from '../Section/Section'

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const { good, neutral, bad } = feedback

  const handleIncrement = (e) => {
    const feedbackType = e.target.name
    setFeedback((prev) => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 }
    })
  }

  const totalFeedback = good + neutral + bad

  const positiveFeedbackPercentage = () =>
    good > 0 ? Math.round((good * 100) / totalFeedback) : 0

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </>
  )
}

export default App

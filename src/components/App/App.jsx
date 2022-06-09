import { useState } from 'react'
import Section from '../Section/Section'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Statistics from '../Statistics/Statistics'
import Notification from '../Notification/Notification'

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
  const positivePercentage =
    good > 0 ? Math.round((good * 100) / totalFeedback) : 0

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  )
}

export default App

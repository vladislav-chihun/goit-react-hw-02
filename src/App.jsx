import { useState } from "react"
import Description from './components/Description/Descriptions'
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback'
import Notification from "./components/Notification/Notification"

function App() {
  const [feedbackType, setFeedbackType] = useState({ good: 0, neutral: 0, bad: 0 })

  function updateFeedback(feedbackType) {
    setFeedbackType(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }
 const { good, neutral, bad } = feedbackType;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbackType={feedbackType} totalFeedback={totalFeedback} />
      <Notification totalFeedback={totalFeedback} />
    </>
  )
}

export default App
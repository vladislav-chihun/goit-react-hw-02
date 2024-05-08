import { useState } from "react"
import Description from './components/Description/Descriptions'
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback'

function App() {
  const [feedbackType, setFeedbackType] = useState({ good: 0, neutral: 0, bad: 0 })

  function updateFeedback(type) {
    setFeedbackType(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbackType={feedbackType} />
    </>
  )
}

export default App

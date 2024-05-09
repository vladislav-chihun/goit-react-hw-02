import { useEffect, useState } from "react"
import Description from './components/Description/Descriptions'
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback'
import Notification from "./components/Notification/Notification"

function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    let storagedReviews = localStorage.getItem("reviews")
    if (storagedReviews) {
      return JSON.parse(storagedReviews)
    } else {
      return { good: 0, neutral: 0, bad: 0 }
    }
  })
 const { good, neutral, bad } = feedbackType;
  const totalFeedback = good + neutral + bad;
  function updateFeedback(feedbackType) {
    setFeedbackType(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }
  
  useEffect(() => {
    if (totalFeedback !== 0) {
      localStorage.setItem("reviews", JSON.stringify(feedbackType))
    }
    
  },[feedbackType,totalFeedback])

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} setFeedbackType={setFeedbackType} totalFeedback={totalFeedback} />
      <Feedback feedbackType={feedbackType} totalFeedback={totalFeedback} />
      <Notification totalFeedback={totalFeedback} />
    </>
  )
}

export default App
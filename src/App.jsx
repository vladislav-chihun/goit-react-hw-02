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
    localStorage.setItem("reviews", JSON.stringify(feedbackType))
    
  }, [feedbackType])
  const positiveFeedback = `${Math.round((good / totalFeedback) * 100)}%`
  function handleReset() {
    setFeedbackType({ good: 0, neutral: 0, bad: 0 });
  }


  return (
    <>
      <Description />
      <Options totalFeedback={totalFeedback} handleReset={handleReset} handleClick={updateFeedback} />
      {totalFeedback != 0 && <Feedback feedbackType={feedbackType} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
      { totalFeedback === 0 && <Notification />}
    </>
  )
}

export default App
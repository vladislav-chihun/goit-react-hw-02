import React, { useEffect } from "react";

export default function Options({ updateFeedback, setFeedbackType, totalFeedback }) {

  function handleClick(feedbackType) {
    updateFeedback(feedbackType);
  }
  function handleReset() {
    setFeedbackType({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <ul>
      <li><button onClick={() => handleClick('good')}>Good</button></li>
      <li><button onClick={() => handleClick('neutral')}>Neutral</button></li>
      <li><button onClick={() => handleClick('bad')}>Bad</button></li>
      {totalFeedback !==0 && <li><button onClick={handleReset}>Reset</button></li>}
    </ul>
  );
}

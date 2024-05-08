import React from "react";

export default function Options({ updateFeedback }) {

  function handleClick(feedbackType) {
    updateFeedback(feedbackType);
  }

  return (
    <ul>
      <li><button onClick={() => handleClick('good')}>Good</button></li>
      <li><button onClick={() => handleClick('neutral')}>Neutral</button></li>
      <li><button onClick={() => handleClick('bad')}>Bad</button></li>
    </ul>
  );
}

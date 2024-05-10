import css from "./Options.module.css"
export default function Options({ updateFeedback, setFeedbackType, totalFeedback }) {

  function handleClick(feedbackType) {
    updateFeedback(feedbackType);
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

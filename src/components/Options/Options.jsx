import css from "./Options.module.css"
export default function Options({ handleReset, totalFeedback,handleClick }) {

  
  

  return (
    <ul className={css.reviewsList}>
      <li><button className= {css.reviewBtn} onClick={() => handleClick('good')}>Good</button></li>
      <li><button className= {css.reviewBtn} onClick={() => handleClick('neutral')}>Neutral</button></li>
      <li><button className= {css.reviewBtn} onClick={() => handleClick('bad')}>Bad</button></li>
      {totalFeedback !==0 && <li><button onClick={handleReset}>Reset</button></li>}
    </ul>
  );
}

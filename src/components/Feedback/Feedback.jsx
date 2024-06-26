import css from "./Feedback.module.css"
export default function Feedback({ feedbackType: { good, neutral, bad }, totalFeedback, positiveFeedback }) {
    return (<>
        <p className={css.reviewsInfo}>Good:<span className={css.reviewValue}>{good}</span></p>
        <p className={css.reviewsInfo}>Neutral:<span className={css.reviewValue}>{neutral}</span></p>
        <p className={css.reviewsInfo}>Bad:<span className={css.reviewValue}>{bad}</span></p>
        <p className={css.reviewsInfo}>Total:<span className={css.reviewValue}>{totalFeedback}</span></p>
        <p className={css.reviewsInfo}>Positive:<span className={css.reviewValue}>{positiveFeedback}</span></p>
    </>)
}
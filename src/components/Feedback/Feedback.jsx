
export default function Feedback({ feedbackType:{good, neutral, bad},totalFeedback }) {
    if(totalFeedback != 0){return (<>
        <p>Good:<span>{good}</span></p>
        <p>Neutral:<span>{neutral}</span></p>
        <p>Bad:<span>{bad}</span></p>
        <p>Total:<span>{totalFeedback}</span></p>
        <p>Positive:<span>{Math.round((good / totalFeedback) * 100)}%</span></p>
    </>)} 
}

export default function Feedback({ feedbackType:{good, neutral, bad},totalFeedback }) {
    if(totalFeedback != 0){return (<>
        <p>Good:<span>{good}</span></p>
        <p>Neutral:<span>{neutral}</span></p>
        <p>Bad:<span>{bad}</span></p>
    </>)} 
}
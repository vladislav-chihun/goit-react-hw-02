
export default function Feedback({ feedbackType:{good, neutral, bad} }) {
    return (<>
        <p><span>{good}</span></p>
        <p><span>{neutral}</span></p>
        <p><span>{bad}</span></p>
    </>)
}
import Options from "../Options/Options"
export default function Feedback({ good, neutral, bad }) {
    return (<>
        <p>Good:<span>{good}</span></p>
        <p>Neutral:<span>{neutral}</span></p>
        <p>Bad:<span>{bad}</span></p>
    </>)
}
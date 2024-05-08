import { useState } from "react"


export default function Options({ good, neutral, bad }) {
    const [click, setClick] = useState(0)
    const handleClick = (e) {
        
    }

    return (<>
        <ul>
        <li><button onClick={handleClick}>Good</button></li>
        <li><button>Neutral</button></li>
        <li><button onClick={handleClick}>Bad</button></li>
        <li><button onClick={handleClick}>Reset</button></li>
        </ul>
    </>)
}
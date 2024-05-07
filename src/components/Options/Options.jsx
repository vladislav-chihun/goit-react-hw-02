export default function Options({ good, neutral, bad }) {
    const reviews = {
	good: {good},
	neutral: {neutral},
	bad: {bad}
}

    return (<>
        <ul>
        <li><button>Good</button></li>
        <li><button>Neutral</button></li>
        <li><button>Bad</button></li>
        <li><button>Reset</button></li>
        </ul>
    </>)
}
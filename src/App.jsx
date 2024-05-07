import Description from './components/Description/Descriptions'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
function App() {
  const reviews = {
	good: 0,
	neutral: 0,
	bad: 0
}
  return (<>
    <Description />
    <Options reviews={reviews} />
    <Feedback/>
  </>)
}

export default App

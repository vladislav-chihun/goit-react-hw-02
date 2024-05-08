import Description from './components/Description/Descriptions'
import Options from "./components/Options/Options.1"
import Feedback from './components/Feedback/Feedback'
function App() {
  const reviews = {
	good: 0,
	neutral: 0,
	bad: 0
  }
  const 
  return (<>
    <Description />
    <Options reviews={reviews} />
    <Feedback reviews={reviews}/>
  </>)
}

export default App

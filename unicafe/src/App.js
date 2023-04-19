import {useState} from 'react'
import { CLOSING } from 'ws'

const Button = ({handleClick, text}) => {
	return (
		<button onClick={handleClick}>{text}</button>
	)

}

const StatisticLine = ({text, value}) => {
	return (<p>{text} {value}</p>)
}
const Statistics = (props) => {
	if(props.data.good == 0 && props.data.neutral == 0 && props.data.bad == 0) 
	return (<div><p>No feedback given</p></div>)

	return (
		<div>
			<StatisticLine text="good" value ={props.data.good} />
			<StatisticLine text="neutral" value ={props.data.neutral} />
			<StatisticLine text="bad" value ={props.data.bad} />
			<StatisticLine text="all" value ={props.data.all} />
			<StatisticLine text="average" value ={props.data.average} />
			<StatisticLine text="positive" value ={props.data.positive} />
		</div>

	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const data = {good: good, 
	neutral: neutral, 
	bad: bad, 
	all: all, 
	average: average, 
	positive: positive}

  const handlerGood = () => {
	setGood(good+1)
	setAll(good+bad+neutral+1)
	setAverage((good+1-bad)/(good+bad+neutral+1))
	setPositive((good+1)/(good+bad+neutral+1)*100)
}
  const handlerNeutral = () => {
	setNeutral(neutral+1)
	setAll(good+bad+neutral+1)
	setAverage((good-bad)/(good+bad+neutral+1))
	setPositive((good)/(good+bad+neutral+1)*100)
}
  const handlerBad = () => {
	setBad(bad+1)
	setAll(good+bad+neutral+1)
	setAverage((good-bad-1)/(good+bad+neutral+1))
	setPositive((good)/(good+bad+neutral+1)*100)
}


  return (
    <div>
		<h1>five feedback</h1>
		<Button handleClick={handlerGood} text='good'/>
		<Button handleClick={handlerNeutral} text='neutral'/>
		<Button handleClick={handlerBad} text='bad'/>

		<h1>Statistics</h1>

		<Statistics data={data}/>

	

    </div>
  )
}

export default App;

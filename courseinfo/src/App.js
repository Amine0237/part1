
const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>{props.part['name']} {props.part['exercices']}</p>
		</div>
	)
}
const Content = (props) => {
	return (
		<div>
		<Part part={props.parts[0]}/>
		<Part part={props.parts[1]}/>
		<Part part={props.parts[2]}/>
		</div>
		
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises {props.parts[0]['exercices'] + props.parts[1]['exercices'] + props.parts[2]['exercices']}</p>
		</div>
	)
}



const App = () => {

	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercices: 10
			},
			{
				name: 'Using props to pass data',
				exercices: 7
			},
			{
				name: 'State of a component',
				exercices: 14
			}
		]
	}
	
	
  
	return (
	  <div>
		<Header course={course['name']}/>
		<Content parts={course['parts']}/>
		<Total parts={course['parts']}/>

	  </div>
	)
  }
  
  export default App

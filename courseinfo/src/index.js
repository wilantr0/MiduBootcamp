import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  return(
     <h1>{props.course}</h1>
   )
 }

 const Exercise = (props) => {
  return(
    <p>
    {props.part} {props.exercises}
    </p>
   )
 }

 const Number = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
   )
 }


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Course course={course} />
      <Exercise part={part1} exercices={exercises1} />
      <Exercise part={part2} exercices={exercises2} />
      <Exercise part={part3} exercices={exercises3} />
      <Number exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
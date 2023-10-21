import { useState } from 'react'
import './App.css';

const Display = ({ counter }) => {
  return(
      <div>{counter}</div>
   )
 }

 const Button = ({ handleClick, text }) => {
  return(
      <button onClick={handleClick}>{text}</button>
   )
 }

function App() {
  
  const [counter, counterUpdate] = useState(0)
  const increase10 = () => counterUpdate(counter+10)
  const increase = () => counterUpdate(counter+1)
  const zero = () => counterUpdate(0)
  const decrease = () => counterUpdate(counter-1)
  const decrease10 = () => counterUpdate(counter-10)



  return (
    <div className="App">
     <Display counter = {counter} />
     <Button text="Decrease x10" handleClick={decrease10} />
     <Button text="Decrease" handleClick={decrease} />
     <Button text="Zero" handleClick={zero} />
     <Button text="Increase" handleClick={increase} />
     <Button text="Increase x10" handleClick={increase10} />
    </div>
  );
}

export default App;

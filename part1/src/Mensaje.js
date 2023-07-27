import './App.css'

const Mensaje = (props) => {
  console.log(props)
 return(
  <div className="message">
     <h2>{props.msg}</h2>
  </div>
  )
}
export default Mensaje

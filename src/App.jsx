import './App.css'
import Child from './Child'

function App() {
  
  return (
    <>
     <h3 style={{color:"red"}}>Reactjs Course</h3>
     <Child  age={12} isLoggedIn={true}/>
     <Button Parent={CheckAlert} />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
     <div style={{backgroundColor: "red"}}>HI</div>
     <div style={{backgroundColor: "yellow"}}>HI</div>
     <div style={{backgroundColor: "green"}}>HI</div>
    </div>

    <div className="flex">
     <div style={{backgroundColor: "red"}}>HI</div>
     <div style={{backgroundColor: "yellow"}}>HI</div>
     <div style={{backgroundColor: "green"}}>HI</div>
    </div>
      
    </>
  )
}

export default App

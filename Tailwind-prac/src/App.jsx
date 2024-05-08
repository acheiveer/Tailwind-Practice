import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="grid grid-cols-10 ">
     <div className='bg-red-500 col-span-4'>HI</div>
     <div className='bg-yellow-500 col-span-4'>HI</div>
     <div className='bg-green-500 col-span-2'>HI</div>
    </div>

    {/* or we can also acheive this using flex by the below method*/}
    {/* <div className="flex">
     <div className='bg-red-500 w-[40%]'>HI</div>
     <div className='bg-yellow-500 w-[40%]'>HI</div>
     <div className='bg-green-500 w-[20%]'>HI</div>
    </div> */}
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold underline bg-green-400 p-5 rounded-xl mb-5">
      Tailwind Test
    </h1>
   
   <Card username="Chai aur Code"/>
   <Card username="Hitesh"/>


    </>
  )
}

export default App

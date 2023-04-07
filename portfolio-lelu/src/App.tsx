import { useState } from 'react'
import { Navbar } from './components/shared/Navbar'

export  const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{height: "100vh", width: "100vw"}}>
      <Navbar />
    </div>
  )
}

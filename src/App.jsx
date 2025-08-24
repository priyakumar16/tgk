import { useState } from 'react' 
import './App.css'
import Home from '../Home'
import CustomCursor from './component/CustomCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <CustomCursor />
    <Home />
    </>
  )
}

export default App

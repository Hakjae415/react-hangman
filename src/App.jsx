import './App.css'
import Game from './components/Game'
import Instructions from './components/Instructions'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Game/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

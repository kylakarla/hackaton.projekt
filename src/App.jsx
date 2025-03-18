import { useState } from 'react'
import './App.css'
import Game from "./Password.jsx"
import IntroScreen from './components/Intro.jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Stage0 from './components/Stage0.jsx';
import Stage1 from './components/Stage1.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/stage0" element={<Stage0 />} />
        <Route path="/stage1" element={<Stage1 />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

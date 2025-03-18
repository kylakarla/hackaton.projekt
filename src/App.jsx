import { useState } from 'react'
import './App.css'
import IntroScreen from './components/Intro.jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Stage0 from './components/Stage0.jsx';
import EndScreen from './components/EndScreen.jsx';


function App() {
  const [count, setCount] = useState(0)
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/stage0" element={<Stage0 />} />
        <Route path="/EndScreen" element={<EndScreen />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

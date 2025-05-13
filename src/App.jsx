import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rule from './pages/Rule'
import Header from './components/Header'
import Playground from './pages/Playground'
import BackgroundMusic from "./components/BackgroundMusic";

const App = () => {
  return (
    <div>
      <Header/>
        <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rule" element={<Rule/>} />
        <Route path="/play" element={<Playground/>} />
      </Routes>

    </div>
  )
}

export default App
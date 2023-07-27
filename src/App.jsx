import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './views/HomePage';


import './App.css'

function AppContent () {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

function App() {
return (
  <Router>
    <AppContent />
  </Router>
)
}

export default App
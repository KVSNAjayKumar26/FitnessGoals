import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GoalsPage from './pages/GoalsPage'
import ProgressPage from './pages/ProgressPage'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/goals' element={<GoalsPage />} />
        <Route path='/progress' element={<ProgressPage />} />
      </Routes>
    </Router>
  );
};

export default App;
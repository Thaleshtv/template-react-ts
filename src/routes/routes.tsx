import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InicialPage from '../pages/InicialPage'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicialPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes

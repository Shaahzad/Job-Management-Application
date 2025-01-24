import React from 'react'
import Login from './Components/Login'
import Joblist from './Components/Joblist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/joblist" element={<Joblist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const getUser = JSON.parse(localStorage.getItem('credential'))
    console.log(getUser)
    return getUser ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute
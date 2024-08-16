import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProtectedRoutes() {
  const jwt = localStorage.getItem('token')
  return jwt ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
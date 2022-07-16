import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function PrivateRoute() {
  const authCtx = useContext(AuthContext)

  return (
    authCtx.auth ? <Outlet /> : <Navigate to='login' />
  )
}

export default PrivateRoute
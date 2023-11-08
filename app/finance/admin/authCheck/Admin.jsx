import React, { useContext } from 'react'
import { AuthContext } from '../context/context'
import { Navigate, Outlet } from 'react-router-dom'

const Admin = () => {
     const {admin} = useContext(AuthContext)
  return admin ? <Outlet /> : <Navigate to="/dashboard" replace={true} />
}

export default Admin
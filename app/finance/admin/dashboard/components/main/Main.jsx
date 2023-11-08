import React from 'react'
import "./main.css"
import Dashboard from '../../Dashboard'
import { useContext } from 'react'
import { AuthContext } from '../../../context/context'
const Main = () => {
  const {profileName} = useContext(AuthContext)
  return (
     <Dashboard>
              <h1 className='is-size-3'>سلام {profileName}, به پنل مدیریت خوش اومدی</h1>
            <h3 className='is-size-5 mt-3'>امیدوارم خبرای خوبی داشته باشی.</h3>
     </Dashboard>
  )
}

export default Main
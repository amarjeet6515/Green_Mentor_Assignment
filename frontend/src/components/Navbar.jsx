import React from 'react'
import Profile from '../pages/Profile'
import "../styles/Navbar.css"
import Dialogbox from './Dialogbox'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <span className='navbar-title'>Task Management App</span>
            
        </div>
        <div className="navbar-right">
            <Dialogbox/>
            <Profile/>
        </div>

    </div>
  )
}

export default Navbar
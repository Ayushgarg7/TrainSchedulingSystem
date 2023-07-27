import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <button className='bk-btn'> <span className="arrow"></span> <div>Return</div></button>
      <div><h1 className='title'>Train Scheduling System</h1></div>
      <div></div>
    </header>
  )
}

export default Navbar

import React from 'react'

import "./navbar.scss"

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav>
        <div className='left'>
          <a href='/' className='logo'>
            <img src='/logo.png' alt='' />
            <span>RealEstate</span>
          </a>
          <a href='/home'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
          <a href='/agents'>Agents</a>
        </div>
        <div className='right'>
          <a href='/signin'>Sign In</a>
          <a href='/signup' className='register'>Sign Up</a>
          
          <div className='menuIcon'>
            <img src='/menu.png' alt='' onClick={() => setOpen(!open)} />
          </div>

          <div className={open ? 'menu active' : 'menu'}>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <a href='/agents'>Agents</a>
            <a href='/contact'>Sign In</a>
            <a href='/agents'>Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
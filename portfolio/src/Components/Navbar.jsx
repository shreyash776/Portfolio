import React from 'react'
import SideBar from './sideNav/SideBar'
const Navbar = () => {
  return (
    <div id="About">
    <div className='navbar'>
        <SideBar />
        <div className='wrapper'>
       <span>Portfolio</span>
       <div className='social'>
        <a href='https://www.linkedin.com/in/shreyash-chaurasia-48ba16278/' target="_blank"><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a href='https://github.com/shreyash776' target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
        <a href='#'><i class="fa-brands fa-instagram fa-xl" target="_blank" ></i></a>

       </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar

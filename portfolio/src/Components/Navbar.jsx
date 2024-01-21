import React from 'react'
import SideBar from './sideNav/SideBar'
const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <SideBar />
        <div className='wrapper'>
       <span>Portfolio</span>
       <div className='social'>
        <a href='#'><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a href='#'><i class="fa-brands fa-github fa-xl"></i></a>
        <a href='#'><i class="fa-brands fa-instagram fa-xl"></i></a>

       </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar

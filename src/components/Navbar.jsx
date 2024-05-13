import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
          <img className='nav-logo' src="./images/lenscorp-logo.webp" alt="" />
          <div className='nav-options-container'>
              <p>MakeMyWeb</p>
              <p>Home</p>
              <p>Company</p>
              <p>Blogs</p>
          </div>
          
          
    </div>
  );
}

export default Navbar
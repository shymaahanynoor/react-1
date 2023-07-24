
//import { NavLink } from 'react-router-dom'
import'./Navbar.css'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
 
  return <>

  <nav className="navbar navbar-expand-lg py-4">
  <div className="container">
 
  <Link className="navbar-brand fs-2 fw-bolder text-white" to=''>START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink  className={({ isActive }) => isActive ? 'nav-link test ' : 'nav-link'} to='portoflio'>PORTOFLIO</NavLink>
     
  
          
        </li>
        <li className="nav-item">
        <NavLink  className={({ isActive }) => isActive ? 'nav-link test ' : 'nav-link'} to='about'>ABOUT</NavLink>
        
        
        </li>
      
        <li className="nav-item">

          <NavLink className={({isActive})=>isActive ? 'nav-link test ' : 'nav-link'} to='contact'>CONTACT</NavLink>

     
        </li>
    
      </ul>
    </div>
  </div>
</nav>
</>
}

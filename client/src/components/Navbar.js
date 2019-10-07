import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../style/navbar.css'

function Navbar() {
  return(
    <div className="navbar elements">
      <Link to={'/'}  className="link-simple link logo">STAR WARS</Link>
      
      <div className="col-md-3 link">
        <Link to={'/contestants'}  className="link-simple link">Login</Link>
        {/* <Link className="link-simple link">Signup</Link> */}
      </div>
    </div>
     

  
  ) 
}
export default Navbar

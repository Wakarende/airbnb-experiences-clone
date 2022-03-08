import React from "react";
import logo from './/img/logo.png';
import './Nav.css';


function NavBar(){
  return(
    <header>
      <nav className="Nav">
      <img src={logo} alt='logo' className='Logo'></img>
    </nav>
    </header>
  )
}

export default NavBar;
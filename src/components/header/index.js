import React from 'react';
import './style.scss'
import Logo from "../../assets/graphics/logo.png";


const Header = () => {
  return (
	 <header>
		<div className="wrap">
		  <div className="logo">
			 <img src={Logo} alt="Logo" />
		  </div>
		  <ul className="navList">
			 <li>HOME</li>
			 <li>CONTACT</li>
			 <li>ABOUT</li>
		  </ul>
		</div>
	 </header>
  );
};

export default Header;

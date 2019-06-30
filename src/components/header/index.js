import React from 'react';
import Logo  from './../../assets/graphics/logo.png';
import './style.scss';


const Header = () => {
  return (
	 <header data-test="headerComponent">
		<div className="wrap">
		  <div className="logo" data-test="logo">
			 <img src={ Logo } alt="Logo" />
		  </div>
		  <ul className="navList" data-test="navList">
			 <li>HOME</li>
			 <li>CONTACT</li>
			 <li>ABOUT</li>
		  </ul>
		</div>
	 </header>
  );
};

export default Header;

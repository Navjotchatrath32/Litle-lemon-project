
import React from 'react';
import logo from'./logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
         <img src={logo} alt="Little Lemon Logo" style={{ height: '50px' }} />
      <h1>Welcome to Little Lemon Restaurant</h1>
      
    </header>
  );
}

export default Header;

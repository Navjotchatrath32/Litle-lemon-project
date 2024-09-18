
import React from 'react';
import logo from'./logo.png';

const Header = () => {
  return (
    <header>
         <img src={logo} alt="Little Lemon Logo" style={{ height: '50px' }} />
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// Footer.js
import React from 'react';

import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      <p>Contact us: info@littlelemon.com</p>
      <p>123 Lemon Street, Citrus City, FL</p>
      <ul>
        <li><a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </footer>
  );
}

export default Footer;


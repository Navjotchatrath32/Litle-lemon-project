// HomePage.js
import React from 'react';
import Nav from './Nav';

import Specials from './Specials';
import Footer from './Footer';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const HomePage = () => {
  return (
    <div>
     
      <Chicago />
   <Specials />

      {/* Testimonials Section */}
      <CustomersSay />\
     

      {/* Chicago Section */}
  
    </div>
  );
}

export default HomePage;

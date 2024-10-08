// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials';
import Main from './Main'; 
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import './App.css'; 
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking'; 
import HeroSection from './HeroSection';



const App = () => {
  return (
    <>

      <Header />
      <Router>
      <div className="App">
        <Nav />
        <HeroSection />
    
       
      
        <Routes>
       
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/" element={<Main />} />
        <Route path="/confirm" element={ConfirmedBooking} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/reviews" element={<CustomersSay />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
       
      </div>

    </Router>
    <Footer />
   
  
   
    </>
  );
}

export default App;


import React from 'react';
import './HeroSection.css'; // Ensure the CSS file exists
import heroImage from './restaurant.jpg'; // Correct path

const HeroSection = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>Welcome to Little Lemon</h1>
                <p>Your favorite Mediterranean restaurant</p>
            </div>
        </section>
    );
};

export default HeroSection; // Default export

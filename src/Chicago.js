import React from 'react';
import './Chicago.css'; // Optional: import CSS file for styling
import restaurant from './restaurant.jpg'; // Ensure this path is correct

const Chicago = () => {
  return (
    <section className="chicago">
      <h2>About Little Lemon, Chicago</h2>
      <p>
        Located in the heart of Chicago, Little Lemon offers a unique dining experience combining the best of Mediterranean and American cuisine. Established in 2005, we have been serving our customers with passion and dedication.
      </p>
      <p>
        Our chefs use only the freshest ingredients, and our menu changes with the seasons to ensure a diverse and delightful dining experience. Come and join us to enjoy the flavors of Chicago!
      </p>
      <img src={restaurant} alt="Little Lemon Restaurant" /> {/* Use the imported variable here */}
    </section>
  );
};

export default Chicago;

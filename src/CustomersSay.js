import React from 'react';
import './CustomersSays.css';

// Import the images
import mario from './Mario and Adrian A.jpg';
import jane from './Mario and Adrian b.jpg';

const testimonialsData = [
  { id: 1, name: "John Doe", review: "Great food!", image: mario },
  { id: 2, name: "Jane Smith", review: "Lovely ambiance!", image: jane },
  // More testimonials
];

const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonialsData.map(customer => (
          <li key={customer.id}>
            <img  className="customer-image" src={customer.image} alt={customer.name} />
            <p>{customer.review}</p>
            <h4>{customer.name}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomersSay;

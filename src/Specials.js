import React from 'react';
import salad from './greek salad.jpg';
import salmon from './lemon dessert.jpg';

 import './Specials.css'// Optional: import CSS file for styling

const specialsData = [
  {
    id: 1,
    name: 'Greek salad',
    description: 'Fresh pasta with seasonal vegetables.',
    price: '$12.99',
    image:salad
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    description: 'Salmon fillet with a lemon butter sauce.',
    price: '$15.99',
    image: salmon
  }
  // Add more specials as needed
];

const Specials = () => {
  return (
    <section className="specials">
      <h2>Today's Specials</h2>
      <div className="specials-list">
        {specialsData.map(special => (
          <div key={special.id} className="special-item">
            <img src={special.image} alt={special.name} />
            <h3>{special.name}</h3>
            <p>{special.description}</p>
            <span>{special.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;

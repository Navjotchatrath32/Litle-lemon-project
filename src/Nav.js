
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

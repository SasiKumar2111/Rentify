import React, { useState } from 'react';
import "./nav.css";
import Menu from '../menu/menu.jsx';
import Loginoptions from '../Loginoptions/loginoptions.jsx';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className='nav'>
      <ul>
        <li><Link to="/" className='logo'><sup>︽</sup> Rentify</Link></li>
        <li><Link to="/postads" className='navopt'>Post a free ad</Link></li>
        <li>
          <Link to="#" className='navopt' onClick={(e) => {
            e.preventDefault();
            setIsLogged(!isLogged);
            setIsToggled(false);

          }}>Login
          </Link>
        </li>
        <li>
          <Link to="#" className='navopt' onClick={(e) => {
            e.preventDefault();
            setIsToggled(!isToggled);
            setIsLogged(false);
          }}>
            ☰ Menu
          </Link>
        </li>
      </ul>
      {isToggled && <Menu />}
      {isLogged && <Loginoptions />}
    </div>
  );
}

export default Navbar;

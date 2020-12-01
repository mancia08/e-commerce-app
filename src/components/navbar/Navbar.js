import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/logo'>Logo</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/map'>Map</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
)

export default Navbar;
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  return (
    <div className='Nav'>
      <div>
        {/* Search bar */}
        <input type="text" placeholder='Search' />
        {/* Search button */}
        <button className='search-btn'> <FaSearch /> </button>
      </div>
      <div>
        {/* Cart button */}

        <Link to='/cart'>
        <button className='Cart-btn'><FaShoppingCart /></button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

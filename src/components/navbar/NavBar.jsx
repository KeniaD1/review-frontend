import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'> 💄Home </Link>
            <Link to="/makeup"> 💄All Products</Link>
            <Link to='makeup/new'> 💄Add New Product</Link>
            <Link to='/about'> 💄About</Link>
        </nav>

    );
};

export default NavBar;
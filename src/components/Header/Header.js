import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <div>

                <Link to="/home">Home</Link>

                <Link to="/shop">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                {/* <Link to="/orders">Orders</Link> */}
                <Link to="/inventory">Blogs</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;
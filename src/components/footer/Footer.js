import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Footer.css';


const Footer = () => {
    return (
        <nav className='footer'>
            {/* <img src={logo} alt="" /> */}
            <div>



                <Link to="/shop">Reviews</Link>

            </div>
        </nav>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';


import './Home.css';

const Home = () => {
    return (
        <nav className='foo'>
            {/* <img src={logo} alt="" /> */}
            <div>
                {/* <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a> */}
                <h1> Your Next Book,Your Favorite Book
                </h1>

                {/* import rb3 from '../../images/rb3.jpg'; */}

                <p> Choose your favorite book.We have huge collections here for you.


                </p>



            </div>
            <div>
                <img source={require('https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg')} />





            </div>


        </nav >




    );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../../images/trainer1.jpg';


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
                <img src={trainer1} class="card-img-top" alt="..." />





            </div>


        </nav >




    );
};

export default Home;



{/* <section className="container">
<h1 className="heading mt-5">Department of Computer Science and Engineering</h1>
<div className="row">
<div className="col-lg-4">
<div class="card" style={designs}>
<img src={trainer1} class="card-img-top" alt="..."/>
<div class="card-body">
<h3 class="user-name">Professor Dr. Md Zakir </h3>
            <h5>Professor and Director</h5>
</div>
</div>
</div>


<div className="col-lg-4">
<div class="card" style={designs}>
<img src={trainer2} class="card-img-top" alt="..."/>
<div class="card-body">
<h3 class="user-name">Professor Dr. Mostafa  </h3>
            <h5>Professor & Dean</h5>
</div>
</div>
</div> */}
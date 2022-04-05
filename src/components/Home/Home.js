
import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../../images/trainer1.jpg';
import Product from '../Product/Product';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    // const { name, img, seller, price, ratings, review } = useProducts();
   
    return (
        <section className="container">
            {/* <img src={logo} alt="" /> */}


            <div>
                <img src={trainer1} class="card-img-top" alt="..." />

            </div>
            <div>

                <h1> Your Next Book,Your Favorite Book
                </h1>
                {/* import rb3 from '../../images/rb3.jpg'; */}
                <p> Choose your favorite book.We have huge collections here for you.
               </p>
            </div>
            <h1>Customer Review(3)


            </h1>

            <div className="cart-cr">
                {/* <Cart cart={cart}> */}
                    {/* <h2>Total Reviews : {products.length}</h2> */}


                    <ul>
                {
                    products.slice(0,3).map(one => <li className="pdf"> Name:{one.name}   Review:{one.review}  Ratings:{one.ratings} </li>)
                }
            </ul>

            {/* <ul>
                {
                    cart.map(one => <li className="pdf"> <img src={one.img} alt="" /> {one.name} "</li>)
                }
            </ul> */}

            
                    {/* <p className='product-name'>{products.name}</p>
                
                <p><small>Review: {products.review}</small></p>
                <p><small>Ratings: {products.ratings} stars</small></p> */}
                {/* </Cart> */}
            </div>

           

            <div className="cart-container">
                {/* <Cart cart={cart}> */}
                    <button onClick={() => navigate('/shop')}>See All Reviews </button>
                {/* </Cart> */}
            </div>
        






       



        </section >













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



// return (
//     <div className='product'>
        
//         <div className='product-info'>
//             <p className='product-name'>{name}</p>
//             {/* <p>Price: ${price}</p> */}
//             <p><small>Review: {review}</small></p>
//             <p><small>Ratings: {ratings} stars</small></p>
//         </div>
//         {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
//         <p className='btn-text'>Add to Cart</p>
//         <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
//     </button> */}
//     </div>
//     )

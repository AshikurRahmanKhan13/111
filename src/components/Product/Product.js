import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings, review } = product;


    return (


        <div className='p'>
            {/* <h1>What Our Customer's Say</h1> */}

            <div className='product'>

                {/* <img src={img} alt=""></img> */}
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    {/* <p>Price: ${price}</p> */}
                    <p><small>Review: {review}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
                </div>
                {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
            </div>
        </div>
    );
};

export default Product;
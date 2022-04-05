// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';
// import { removeFromDb } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
// import ReviewItem from '../ReviewItem/ReviewItem';
// // import './Orders.css';

// const Add = () => {
//     const [products, setProducts] = useProducts();
//     // const [cart, setCart] = useCart(products);
//     // const navigate = useNavigate();
//     // const handleRemoveProduct = product =>{
//     //     const rest = cart.filter(pd => pd.id !== product.id);
//     //     setCart(rest);
//     //     removeFromDb(product.id);
//     // }




//     return (
//         <div className='product'>
//             {/* <img src={img} alt=""></img> */}
//             <div className='product-info'>
//                 <p className='product-name'>{name}</p>
//                 {/* <p>Price: ${price}</p> */}
//                 <p><small>Review: {review}</small></p>
//                 <p><small>Ratings: {ratings} stars</small></p>
//             </div>
//             {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
//                 <p className='btn-text'>Add to Cart</p>
//                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
//             </button> */}

//         </div>



//     );
// };

// export default Orders;



// // return (
// //     <div className='shop-container'>
// //         <div className="review-items-container">
// //             {
// //                 cart.map(product => <ReviewItem
// //                     key={product.id}
// //                     product={product}
// //                     handleRemoveProduct={handleRemoveProduct}
// //                 ></ReviewItem>)
// //             }
// //         </div>
// //         <div className="cart-container">
// //             <Cart cart={cart}>
// //                 <button onClick={() => navigate('/inventory')}>Proceed Checkout </button>
// //             </Cart>
// //         </div>
// //     </div>
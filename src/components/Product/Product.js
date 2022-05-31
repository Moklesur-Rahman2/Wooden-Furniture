import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { addToCart, product } = props
    const { name, img, price } = product
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(product)} className='add-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} className='fa-icon'></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
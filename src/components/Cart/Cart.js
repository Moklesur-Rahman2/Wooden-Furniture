import React from 'react';
import Cart_item from '../Cart_item/Cart_item';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props


    // SelectedProduct function
    const selectedProduct = () => {
        const selectedProduct = cart[Math.floor(Math.random() * cart.length)]
        if (cart.length !== 0 && document.querySelector('.cart-items').childElementCount !== 0) {
            document.getElementById('selected-product').innerText = selectedProduct.name
        }

    }

    // Reset product
    const abc = document.querySelector('.cart-items')
    const resetProduct = () => {

        abc.innerHTML = ''
    }

    return (
        <div className='cart-summary'>
            <h3>Selected furniture</h3>
            <div className='cart-items'>
                {
                    cart.map(product => <Cart_item product={product} key={product.id}></Cart_item>)
                }
            </div>

            <div className='cart-button'>
                <button onClick={selectedProduct} className='choose-one'>Choose 1 for me</button>
                <button onClick={resetProduct} className='choose-again'>Choose again</button>
            </div>
            <p><b>Your Selected Product is:</b> <span id='selected-product'></span></p>

        </div>
    );
};

export default Cart;
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart_item.css'

const Cart_item = (props) => {
    const { name, img } = props.product
    return (

        <div className="cart-item">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <FontAwesomeIcon icon={faTrash} className='fa-icon'></FontAwesomeIcon>
        </div>

    );
};

export default Cart_item;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, seller, quantity, id, price, ratings } = props.product
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className='main'>
                <p>price: ${price}</p>
                <p>Manufacturity:{seller}</p>
                <p>rating:{ratings}</p>
                <p>Quantitiy:{quantity}</p>

            </div>
            <button className='btn-card' onClick={() => { handleAddtoCart(props.product) }}>Add to cart

                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
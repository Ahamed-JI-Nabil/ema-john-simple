import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    const {handleAddToCart, product} = props;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className="btn-cart">
                <p onClick={() =>handleAddToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></p>
                
            </button>
        </div>
    );
};

export default Product;
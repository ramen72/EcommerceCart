import React, { useState } from 'react';
import { products } from './../data/products';

const Home = () => {

    const [cart, setCart] = useState([])

    const productList = document.querySelector(".product-list")
    const cartItems = document.querySelector(".cart-items")
    const cartTotal = document.querySelector(".total")
    const checkoutButton = document.querySelector(".checkout")
    console.log(products);
    
    return (
        <>
            <div className="cartContainer">
            <h1>Ecommerce Cart</h1>
            <div className="container">
                <div className="products">
                    <h1>Products</h1>
                    <div className="product-list"></div>
                </div>
                <div className="cart">
                    <h1>Shopping-cart</h1>
                    <div className="cart-items"></div>
                    <div className="total">Total : Tk - <span className="cart-total">520</span></div>
                    <button className="checkout">CheckOut</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Home;
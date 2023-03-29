import React from 'react';
import "./Cart.css";
const Cart = ({cart}) => {
    // const cart=props.cart (Option One )
    // const {cart}=props; (option two)
    let TotalPrice=0;
    let TotalShipping=0;
    for(const product of cart){
        TotalPrice=TotalPrice+product.price;
        TotalShipping=TotalShipping+product.shipping;
    }
    let tax=TotalPrice*7/100
    const grandTotal=TotalPrice+TotalShipping+tax
    return (
        <div className='cart'>
         <h1>Order Summary</h1> <br />
            <p>Order Count{cart.length}</p><br />
            <p>Total price:$ {TotalPrice}</p><br />
            <p> shipping:$ {TotalShipping}</p><br />
            <p>Total tax: $ {tax.toFixed(2)} </p><br />
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6><br />
        </div>
    );
};

export default Cart;
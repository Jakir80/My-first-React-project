import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css';
const Header = () => {
  
    return (
        <div>
            <div className='header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                   <div className='link'>
                    <a href="#">Shop</a>
                    <a href="#">Order</a>
                    <a href="#">Inventory</a>
                    <a href="#">order review</a>
                    <a href="#">Login</a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
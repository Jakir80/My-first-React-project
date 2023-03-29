import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddtoCart=(product)=>{
const newCart=[...cart,product]
setCart(newCart);
addToDb(product.id)
useEffect(()=>{
    const storedCart=getShoppingCart()
},[])
       }
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddtoCart={handleAddtoCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                   <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
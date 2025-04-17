import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'; // Assuming you have a StateProvider for global state management

function Checkout() {
    const [{ basket,user },dispatch] = useStateValue(); // Assuming you have a useStateValue hook to get the basket state

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img 
            className="checkout__ad" 
            src="https://links.papareact.com/ikj"
            alt=""
            />
            <div>
                <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">YourShopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}

               
            </div>
        </div>

        
        <div className="checkout__right">
            <Subtotal/>
        </div>    
    </div>
  );
}

export default Checkout;
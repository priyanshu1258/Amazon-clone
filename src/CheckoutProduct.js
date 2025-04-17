import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { ListItem } from '@mui/material';
import Payment from './Payment';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    console.log("CheckoutProduct id:", id);
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log("Removing item with id:", id); // Debugging log
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key = {i}>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct






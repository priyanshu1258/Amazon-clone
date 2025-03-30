import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
// This is the subtotal component
 

function Subtotal() {
  const [{ basket }] = useStateValue(); // Use the basket from the state
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Replace with the actual total price
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
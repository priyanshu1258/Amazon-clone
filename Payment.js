import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'; // Import function to calculate total price
import axios from './axios'; // Ensure axios is imported
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Payment() {
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [{ basket, user }] = useStateValue(); // Destructure basket and user from the state

    const stripe = useStripe(); // Initialize Stripe
    const elements = useElements(); // Initialize Elements

    const [processing, setProcessing] = useState(''); // State for processing payment
    const [succeeded, setSucceeded] = useState(false); // State for successful payment
    const [error, setError] = useState(null); // State for error handling
    const [disabled, setDisabled] = useState(true); // State for button disabled status
    const [clientSecret, setClientSecret] = useState(true); // State for client secret  

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setProcessing(true); // Set processing state to true

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement), // Get card element from Elements
            },
        }).then(({ paymentIntent }) => {
            // Handle successful payment
            setSucceeded(true); // Set succeeded state to true
            setError(null); // Clear error state
            setProcessing(false); // Set processing state to false

            // Navigate to orders page or perform any other action on successful payment
            navigate('/orders');
        });
    };

    const handleChange = (event) => {
        setDisabled(event.empty); // Disable button if the card element is empty
        setError(event.error ? event.error.message : ''); // Set error message if any
    };

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                {/* Delivery Address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p> {/* Display user's email if available */}
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                        <p>USA</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} /> {/* Stripe card element for payment */}

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Function to calculate total price
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>} {/* Display error message if any */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
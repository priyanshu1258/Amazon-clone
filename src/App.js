import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import { auth } from './firebase'; // Import Firebase authentication
import { useStateValue } from './StateProvider';
import Payment from './Payment'; // Import the Payment component
import {loadStripe} from '@stripe/stripe-js'; // Import Stripe.js
import { Elements } from '@stripe/react-stripe-js'; // Import Elements for Stripe integration

const promise = loadStripe('pk_test_51RBwKiQUvS8zGAgYDlHQPopThcclEDu6DIUrJ61HRWNuBdkn2eDQSOt62gZ8btAXc77rxv8TaOvhxTrsy471MLVp00tAv0UZVv'); // Load your Stripe public key here


function App() {

  
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
  // will only run once when the component loads 

    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // User is signed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is signed out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
}, []);



  return (
    <Router>
      <div className="app">
        {/* Conditionally render the Header */}
        <ConditionalHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Payment Page */}
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

// Component to conditionally render the Header
function ConditionalHeader() {
  const location = useLocation();

  // Render the Header only on "/" (Home) and "/checkout" routes
  if (location.pathname === "/" || location.pathname === "/checkout"|| location.pathname === "/payment") {
    return <Header />;
    
  }
  return null; // Do not render the Header on other routes
}

export default App;

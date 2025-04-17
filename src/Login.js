import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import { auth } from './firebase'; // Import Firebase authentication
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import modular functions

function Login() {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault(); // Prevent page refresh

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log('User signed in:', authUser);
        navigate('/'); // Redirect to the home page after successful sign-in
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault(); // Prevent page refresh

    console.log('Registering user with email:', email);

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log('User created:', authUser);
        navigate('/'); // Redirect to the home page after successful registration
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png'
          alt='Amazon Logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
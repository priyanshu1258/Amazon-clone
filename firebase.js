// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4kNC6sLUrFCDhucFr-LYABGn7FM8litw",
  authDomain: "challenge-91b9f.firebaseapp.com",
  projectId: "challenge-91b9f",
  storageBucket: "challenge-91b9f.firebasestorage.app",
  messagingSenderId: "107971020462",
  appId: "1:107971020462:web:0201ef903ba37ab3888f3f",
  measurementId: "G-Q2CR1XQ4VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
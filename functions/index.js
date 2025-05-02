/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const e = require("express");

const stripe = require("stripe")
('sk_test_51RBwKiQUvS8zGAgY0OaUvaARELl3VvuPj6yqxRqdtsnyi6nP3VCzEjhocXt2a7CUHvIX2qG4t42moL3asg0gBm8W00RxaD8Dl5')


// API


// - App config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json()); // Parse incoming JSON requests


// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world!"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM !!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd", });
// OK - Created
response.status(201).send({  clientSecret: paymentIntent.client_secret,  });
});

// - Listen command
exports.api = functions.https.onRequest(app);



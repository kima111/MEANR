# MEANR (Mongo Express Axios Node React)

## Overview

This will be a full stack boiler template for Mongo, Express, Axios, Node, and React. There will be other packages included. 

## Installation

Clone this repository then run the command npm i. This will install all the dependencies. Then sign up for the features that you would like to use such as Stripe for payments, or Twilio for text messaging, and fill out the necessary environment variables. 

## Requirements

* NPM
* Mongo DB

## Enviornment Variables

You will need to create a .env file for the Server side as well as the Client side. Some of these features will need accounts setup such as STRIPE (Payments), or TWILIO (Text Messaging). 

<b>Server Side</b>

* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN
* TWILIO_PHONE_NUMBER
* NODEMAILER_SENDER_EMAIL_ACCOUNT
* NODEMAILER_SENDER_EMAIL_PASS
* STRIPE_SECRET_KEY
* MONGO_DB_NAME

<b>Client Side</b>

* REACT_APP_STRIPE_PUBLISHABLE_KEY

## Features

* Supports local authentication and registration
* User and Administrator protected routes
* Forum
* Text Messaging
* Emailing
* Payments

## Dependencies

* ~~Redux~~ (Removed in favor of using Context Providers and useContext)
* Express (Server)
* Mongo (Server)
* Mongoose (Server)
* Axios (Client)
* React (Client)
* React-Router-DOM (Client)
* Nodemon (Server)
* Concurrently (Server)
* Passport (Server)
* BcryptJS (Server)
* Helmet (Server)
* Twilio (Server)
* Cors (Server)
* Dotenv (Server)
* Nodemailer (Server)
* Body-parser (Server)
* Stripe (Server)
* React Stripe Checkout (Client)
* UUID (Server)

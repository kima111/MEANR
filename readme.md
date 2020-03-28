# MEANR (Mongo Express Axios Node React)

## Overview

This will be a full stack boiler template for Mongo, Express, Axios, Node, and React. There will be other packages included. 

## Enviornment Variables Needed

You will need to create a .env file for the Server side as well as the Client side. Some of these features will need accounts setup such as STRIPE (Payments), or TWILIO (Text Messaging). 

<u>Server Side</u>

* ACCOUNT_SID
* AUTH_TOK
* PNUMBER
* EMAIL_ACCOUNT
* EMAIL_PASS
* STRIPE
* DB_NAME

<u>Client Side</u>

* REACT_APP_STRIPE_KEY

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

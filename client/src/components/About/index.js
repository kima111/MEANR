import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default function index() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>MEANR (Mongo Express Axios Node React)</h1>
                    <h2>Overview</h2>
                    <p>This will be a full stack boiler template for Mongo, Express, Axios, Node, and React. There will be other packages included.</p>

                    <h2>Installation</h2>

                    <p>Clone this repository then run the command npm i. This will install all the dependencies. Then sign up for the features that you would like to use such as Stripe for payments, or Twilio for text messaging, and fill out the necessary environment variables.</p>

                    <h2>Requirements</h2>

                    <ul>
                        <li>NPM</li>
                        <li>Mongo DB</li>
                    </ul>

                    <h2>Enviornment Variables</h2>

                    <p>You will need to create a .env file for the Server side as well as the Client side. Some of these features will need accounts setup such as STRIPE (Payments), or TWILIO (Text Messaging).</p>

                    <b>Server Side</b>
                    <ul>
                        <li>TWILIO_ACCOUNT_SID</li>
                        <li>TWILIO_AUTH_TOKEN</li>
                        <li>TWILIO_PHONE_NUMBER</li>
                        <li>NODEMAILER_SENDER_EMAIL_ACCOUNT</li>
                        <li>NODEMAILER_SENDER_EMAIL_PASS</li>
                        <li>STRIPE_SECRET_KEY</li>
                        <li>MONGO_DB_NAME</li>
                    </ul>
                    <b>Client Side</b>

                    <ul>
                        <li> REACT_APP_STRIPE_PUBLISHABLE_KEY</li>
                    </ul>
                    <h2>Features</h2>

                    <li>Supports local authentication and registration</li>
                    <li>User and Administrator protected routes</li>
                    <li>Forum</li>
                    <li>Text Messaging</li>
                    <li>Emailing</li>
                    <li>Payments</li>

                    <h2>Dependencies</h2>
                    <ul>
                        <li>  <strike>Redux</strike> (Removed in favor of using Context Providers and useContext) </li>
                        <li>  Express (Server) </li>
                        <li>  Mongo (Server) </li>
                        <li>  Mongoose (Server) </li>
                        <li>  Axios (Client) </li>
                        <li>  React (Client) </li>
                        <li>  React-Router-DOM (Client) </li>
                        <li>  Nodemon (Server) </li>
                        <li>  Concurrently (Server) </li>
                        <li>  Passport (Server) </li>
                        <li>  BcryptJS (Server) </li>
                        <li>  Helmet (Server) </li>
                        <li>  Twilio (Server) </li>
                        <li>  Cors (Server)</li>
                        <li>  Dotenv (Server) </li>
                        <li>  Nodemailer (Server) </li>
                        <li>  Body-parser (Server) </li>
                        <li>  Stripe (Server) </li>
                        <li>  React Stripe Checkout (Client) </li>
                        <li>  UUID (Server)</li>
                    </ul>
                </Container>
            </Jumbotron>
        </div>
    )
}

import React, { useState } from "react";
import API from "../../utils/API"
import StripeCheckout from 'react-stripe-checkout'
import { Container, Jumbotron, Button } from 'react-bootstrap'

export default function SubmitPayment() {
    const [product] = useState({
        name: "membership",
        price: 10,
    });

    const submitPayment = token => {
       
        const body = {
            token,
            product
        }

        API.sendPayment({
            body
        }).then(response => {
            console.log(response)
        }).catch(
            console.log("error")
        )

    }
    return (
        <div>
            <Jumbotron fluid>
            <Container>
                <h1>Submit Payment</h1>
                    <StripeCheckout
                    stripeKey = {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                    token={submitPayment}
                    name="Submit Payment"
                    >
                    <Button>Submit Payment</Button>
                    </StripeCheckout>
            </Container>
            </Jumbotron>
        </div>
    )
}

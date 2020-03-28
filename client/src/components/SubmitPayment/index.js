import React, { useEffect, useMemo, useState } from "react";
import API from "../../utils/API"
import StripeCheckout from 'react-stripe-checkout'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default function SubmitPayment() {
    const [product, setProduct] = useState({
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
    function handleToken(token, addresses){
        console.log({token, addresses})
    }
    return (
        <div>
            <Container>
                <h1>Submit Payment</h1>
        
                    <StripeCheckout
                    stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                    token={submitPayment}
                    name="Submit Payment"
                    >
                    
                        <Button>Submit Payment</Button>
                    </StripeCheckout>
                   
              
            </Container>
        </div>
    )
}

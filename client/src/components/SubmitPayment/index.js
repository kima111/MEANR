import React, { useEffect, useMemo, useState } from "react";
import API from "../../utils/API"
import StripeCheckout from 'react-stripe-checkout'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default function SubmitPayment() {
    const [title, setTitle] = useState('');
    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    const submitPayment = event => {
        event.preventDefault();
        API.sendPayment({
            email: email,
            title: title,
            emailText: emailText
        }).then(
         
            setTitle(''),
            setEmailText(''),
            setEmail('')
        ).catch(
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
                    token={handleToken}>
                        <Button>Submit Payment</Button>
                    </StripeCheckout>
                   
              
            </Container>
        </div>
    )
}

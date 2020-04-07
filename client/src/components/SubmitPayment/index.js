
import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button, Form, Container, Jumbotron } from 'react-bootstrap'
import API from '../../utils/API'


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (!error) {
            const { id } = paymentMethod
            API.sendPayment({id, amount: 51})
        }

    }

    return (
        <Jumbotron fluid>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Text>
                    <CardElement />
                    </Form.Text>
                   
                    <br />
                    <Button type="submit" disabled={!stripe}>
                        Pay
                    </Button>
                </Form>
            </Container>
        </Jumbotron>

    )
}

export default function index() {




    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}





















// import React, { useState } from "react";
// import API from "../../utils/API"
// import StripeCheckout from 'react-stripe-checkout'
// import CheckoutForm from '../CheckoutForm'
// import { Container, Jumbotron, Button } from 'react-bootstrap'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// export default function SubmitPayment() {

//     const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

//     const [product] = useState({
//         name: "membership",
//         price: 10,
//     });

//     const submitPayment = token => {

//         const body = {
//             token,
//             product
//         }

//         API.sendPayment({
//             body
//         }).then(response => {
//             // API.sendEmail({
//             //     email: 'kima111@gmail.com',
//             //     title: 'title',
//             //     emailText: 'emailtext'

//             // })

//             console.log(response)
//         }).catch(
//             console.log("error")
//         )

//     }
//     return (
//         <div>
//             <Jumbotron fluid>
//             <Container>
//                 <h1>Submit Payment</h1>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm />
//                 </Elements>
//                     {/* <StripeCheckout
//                     stripeKey = {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
//                     token={submitPayment}
//                     name="Submit Payment"
//                     >
//                     <Button>Submit Payment</Button>
//                     </StripeCheckout> */}
//             </Container>
//             </Jumbotron>
//         </div>
//     )
// }


import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) =>{
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error){
            const { id } = paymentMethod
        try{
            const { data } = await axios.post("/api/payment/sendPayment", {id, amount: 1099});

            console.log(data);
        } catch(error){
            console.log(error);
        }
        }

    }
    
    return (
    <form onSubmit={handleSubmit} style={{maxWidth: "400px", margin: "0 auto", marginTop: "200px", height: "50px"}}><CardElement/>
    <button type="submit" disabled={!stripe}>
    Pay    
    </button></form>
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

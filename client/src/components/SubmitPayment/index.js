
import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { Button, Form, Container, Jumbotron, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API'
import history from '../History';

const CheckoutForm = () => {
    // const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    //billing details
    const [city, setCity] = useState('');
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [postal_code, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                address: {
                    city: city,
                    line1: line1,
                    line2: line2,
                    postal_code: postal_code,
                    state: state
                },
                email: email,
                name: name
            }
        });

        if (!error) {
            const { id } = paymentMethod
            API.sendPayment({ id, amount: 51 })
            API.sendEmail({
                email: email,
                title: "Thank you for your payment",
                emailText: "Thank you for your purchase of 0.50"

            })
            history.push('/Welcome')
        }

    }

    return (
        <Jumbotron fluid>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="name" placeholder="Full Name" onChange={event => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required value={email} type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)}   />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" onChange={event => setLine1(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" onChange={event => setLine2(event.target.value)} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required onChange={event => setCity(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control required as="select" onChange={event => setState(event.target.value)} >
                            <option>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required onChange={event => setPostalCode(event.target.value)}  />
                        </Form.Group>
                    </Form.Row>

                    <div class="form-group">
                        <label for="card-element">Payment Information</label>
                        <div id="card-element" required="true" class="form-control" style={{ height: "2.4em", paddingTop: "0.7em" }}>
                            <CardElement/>
                        </div>
                    </div>
                    <br />
                    <Button type="submit" disabled={!stripe}>
                        Submit Payment
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

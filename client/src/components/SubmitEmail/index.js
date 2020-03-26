import React, { useEffect, useMemo, useState } from "react";
import API from "../../utils/API"
import { Container, Form, Col, Button } from 'react-bootstrap'



export default function SubmitEmail() {
    const [title, setTitle] = useState('');
    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    const submitEmail = event => {
        event.preventDefault();
        API.sendEmail({
            email: email,
            title: title,
            emailText: emailText
        }).then(
         
            setTitle(''),
            setEmailText(''),
            setEmail('')
        )

    }
    
    return (
        <div>
            <Container>
                <h1>Submit Email</h1>
        
                <Form>
                <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Title" value={email} onChange={event => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="forumTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" placeholder="Description of forum." rows="3" value={emailText} onChange={event => setEmailText(event.target.value)}/>
                    </Form.Group>

                    <Button to="/Forum" variant="primary" type="submit" onClick={submitEmail}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

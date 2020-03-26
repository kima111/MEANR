import React, { useEffect, useMemo, useState } from "react";
import API from "../../utils/API"
import { Container, Form, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


export default function SubmitEmail() {
    const [title, setTitle] = useState('');
    const [emailText, setEmailText] = useState('');

    const submitEmail = event => {
        event.preventDefault();
        API.submitEmail({
            title: title,
            emailText: emailText
        }).then(
         
            setTitle(''),
            setEmailText('')
        )

    }
    
    return (
        <div>
            <Container>
                <h1>Submit Email</h1>
        
                <Form>
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

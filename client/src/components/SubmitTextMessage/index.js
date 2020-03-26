import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import API from '../../utils/API'

export default function SubmitTextMessage() {
    const [recipient, setRecipient] = useState ('')
    const [text, setText] = useState('')


    const submitTextMessage = event => {
        event.preventDefault();
        API.sendTextMessage({
            recipient: recipient,
            text: text
        }).then(
           
            setRecipient(''),
            setText('')
        )

    }

    return (
        <div>
              
            <Container>
                <h1>Submit Text Message</h1>
        
                <Form>
                    <Form.Group controlId="forumTitle">
                        <Form.Label>Recipient</Form.Label>
                        <Form.Control placeholder="Phone Number" value={recipient} onChange={event => setRecipient(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" placeholder="Description of forum." rows="3" value={text} onChange={event => setText(event.target.value)}/>
                    </Form.Group>

                    <Button to="/Forum" variant="primary" type="submit" onClick = {submitTextMessage}>
                        Submit
                    </Button>
                </Form>
            </Container>
        
        </div>
    )
}

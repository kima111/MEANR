import React, { useEffect, useMemo, useState } from "react";
import API from "../../utils/API"
import { Container, Form, Button, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


export default function SubmitForm() {
    const [title, setTitle] = useState('');
    const [forumText, setForumText] = useState('');
    const history = useHistory();
    

    const submitForum = event => {
        event.preventDefault();
  

        const currentDate = Date(Date.now()).toString()

        API.submitForum({
            title: title,
            forumText: forumText,
            date: currentDate
        }).then(
            history.push('/Forum'),
            setTitle(''),
            setForumText('')
        )

    }
    
    return (
        <div>
            <Jumbotron fluid>
            <Container>
                
                <h1>Submit Forum</h1>
        
                <Form>
                    <Form.Group controlId="forumTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" placeholder="Description of forum." rows="3" value={forumText} onChange={event => setForumText(event.target.value)}/>
                    </Form.Group>

                    <Button to="/Forum" variant="primary" type="submit" onClick={submitForum}>
                        Submit
                    </Button>
                </Form>
            </Container>
            </Jumbotron>
        </div>
    )
}

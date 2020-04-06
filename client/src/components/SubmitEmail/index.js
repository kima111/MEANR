import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import { Container, Form, Jumbotron, Button } from 'react-bootstrap'

export default function SubmitEmail() {
    const [title, setTitle] = useState('');
    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

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
        ).catch(
            console.log("error")
        )

    }
    const getUsers = event => {
        event.preventDefault();
        API.getUsers().then(
           function(response){
               console.log(response)
           }
        ).catch(
            console.log("error")
        )

    }
    useEffect(() => {
        API.getUsers().then(
            function(response){
                console.log(response.data[0].email)
                setUsers(response.data)
            }
        )

        return () => {};
    }, []);
    
    return (
        <div>
            <Jumbotron fluid>
            <Container>
                <h1>Submit Email</h1>
            
             
                <Form>
                <Form.Group controlId="emailSelect">
                    <Form.Label>Select Email</Form.Label>
                    <Form.Control as="select">
                    {users.map(item => <option>{item.firstName}&nbsp;{item.lastName}&nbsp;&nbsp;{item.email}</option>)}
                    </Form.Control>
                </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
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
            </Jumbotron>
        </div>
    )
}

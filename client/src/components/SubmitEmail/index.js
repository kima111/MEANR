// all commented out lines for future implementation of group emailing

// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import API from "../../utils/API"
import { Container, Form, Jumbotron, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../SubmitEmail/index.css';

export default function SubmitEmail() {
    const [title, setTitle] = useState('');
    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    // const [users, setUsers] = useState([]);
 
    const modules = { toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block', 'size', 'script'],
        [{'color': []}],
        [{'font': []}],
        [{'align': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link'],
        ['clean', 'formula', 'video']
      ],};

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
    // const getUsers = event => {
    //     event.preventDefault();
    //     API.getUsers().then(
    //        function(response){
    //            console.log(response)
    //        }
    //     ).catch(
    //         console.log("error")
    //     )

    // }
    // useEffect(() => {
    //     API.getUsers().then(
    //         function(response){
    //             console.log(response.data[0].email)
    //             setUsers(response.data)
    //         }
    //     )

    //     return () => {};
    // }, []);
    
    return (
        <div>
            <Jumbotron fluid>
            <Container>
                <h1>Submit Email</h1>
            
             
                <Form>
                {/* <Form.Group controlId="emailSelect">
                    <Form.Label>Email Group</Form.Label>
                    <Form.Control as="select">
                    {users.map(item => <option>{item.firstName}&nbsp;{item.lastName}&nbsp;&nbsp;{item.email}</option>)}
                    </Form.Control>
                </Form.Group> */}
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="forumTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                    </Form.Group>
                    <p>Email</p>
                    <ReactQuill theme="snow" className='ql-container' style={{backgroundColor:'#FFFFFF'}} modules={modules} value={emailText} onChange={setEmailText}/>
                    <br />
                    <Button to="/Forum" variant="primary" type="submit" onClick={submitEmail}>
                        Submit
                    </Button>
                </Form>
            </Container>
            </Jumbotron>
        </div>
    )
}

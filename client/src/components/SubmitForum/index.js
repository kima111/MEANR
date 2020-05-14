import React, { useState, useContext } from "react";
import API from "../../utils/API"
import { Container, Form, Button, Jumbotron } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../SubmitForum/index.css'
import history from '../History';
import { UserContext } from '../../UserContext';

export default function SubmitForm() {
    const [title, setTitle] = useState('');
    const [forumText, setForumText] = useState('');
    const {userInfo} = useContext(UserContext);
    const modules = { toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block', 'script'],
        [{'color': []}],
        [{'font': []}],
        [{'align': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link'],
        ['clean', 'formula', 'video']
      ],};

    const submitForum = event => {
        event.preventDefault();
        const currentDate = Date(Date.now()).toString()
  
    API.submitForum({
        title: title,
        forumText: forumText,
        date: currentDate,
        username: userInfo.username
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
                    <ReactQuill theme="snow"className='ql-container' style={{backgroundColor:'#FFFFFF'}}  modules={modules} value={forumText} onChange={setForumText}/>
                    <br />
                    <Button to="/Forum" variant="primary" type="submit" onClick={submitForum}>
                        Submit
                    </Button>
                </Form>
            </Container>
            </Jumbotron>
        </div>
    )
}

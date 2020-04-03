import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <Jumbotron fluid>
            <Container>
                <h3>You have successfully signed out</h3>
                <br />
                <Button variant="outline-secondary" as={ Link } to="/">Return to Home</Button>
            </Container>
        </Jumbotron>
       
    )
}

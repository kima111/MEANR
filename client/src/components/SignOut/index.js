import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <Container>
            <p>You have successfully signed out</p>
            <Link to="/">Home</Link>
        </Container>
            
       
    )
}

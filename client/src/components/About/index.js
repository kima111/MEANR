import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default function index() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>MEANR (Mongo Express Axios Node React)</h1>
                    <h2>Overview</h2>
                    <p>MEANR is a full stack boiler template for Mongo, Express, Axios, Node, and React intended to aide developers looking to get their app off the ground in a hurry with an easy to use framework for accomplishing common tasks, such as Role Configured Authentication, Payment, Emailing, Forum, and Text Messaging. There will be other packages included in later versions.</p>
                    <p>You can find the installation instructions and code here: <a href = "https://github.com/kima111/MEANR">https://github.com/kima111/MEANR</a></p>
                    <h2>Features</h2>
                    <ul>
                        <li>Supports local authentication and registration</li>
                        <li>User and Administrator protected routes</li>
                        <li>Forum</li>
                        <li>Text Messaging</li>
                        <li>Emailing</li>
                        <li>Payments</li>
                    </ul>
                </Container>
            </Jumbotron>
        </div>
    )
}

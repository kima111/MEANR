import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default function index() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h2>MEANR</h2> 
                    <p style={{fontSize: "1.2em"}}>(Mongo Express Axios Node React)</p>
                    <hr />
                    <h3>Overview</h3>
                    <p>MEANR is a full stack boiler template for Mongo, Express, Axios, Node, and React intended to aide developers looking to get their app off the ground in a hurry with an easy to use framework for accomplishing common tasks, such as Role Configured Authentication, Payment, Emailing, Forum, and Text Messaging. There will be other packages included in later versions.</p>
                    <p>You can find the installation instructions and code here: <a href = "https://github.com/kima111/MEANR">https://github.com/kima111/MEANR</a></p>
                    <h3>Features</h3>
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

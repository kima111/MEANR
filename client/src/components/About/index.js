import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import aboutImage from '../../assets/images/About.jpg'

export default function index() {
    return (
        <div>
            <Jumbotron style={{background: `url(${aboutImage}) fixed center center`, backgroundSize: 'cover', height: "95vh", margin: "0 auto"}} fluid>
                <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px', padding: '50px'}}>
                    <h2 style = {{color: "#ffffff"}}>MEANR</h2> 
                    <p style={{fontSize: "1.2em", color: "#ffffff"}}>(Mongo Express Axios Node React)</p>
                    <hr style={{backgroundColor: "#ffffff"}} />
                    <h3 style={{color: "#ffffff"}}>Overview</h3>
                    <p style={{color: "#ffffff"}}>MEANR is a full stack boiler template for Mongo, Express, Axios, Node, and React intended to aide developers looking to get their app off the ground in a hurry with an easy to use framework for accomplishing common tasks, such as Role Configured Authentication, Payment, Emailing, Forum, and Text Messaging. There will be other packages included in later versions.</p>
                    <p style={{color: "#ffffff"}}>You can find the installation instructions and code here: <a href = "https://github.com/kima111/MEANR">https://github.com/kima111/MEANR</a></p>
                    <h3 style={{color: "#ffffff"}}>Features</h3>
                    <ul style={{color: "#ffffff"}}>
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

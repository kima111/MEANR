import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

export default function index(props) {
    
    
    return (
        <Jumbotron  style={{background: `url(${props.imageName}) fixed center center`, backgroundSize: 'cover', height: "95vh", margin: "0 auto"}} fluid>
            <Container style={{backgroundColor: `rgba(0, 0, 0, ${props.opacityLevel})`, borderRadius: '15px', padding: '50px'}}>
               {props.children}
            </Container>
        </Jumbotron>
    )
}

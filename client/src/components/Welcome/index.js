import React, { useContext } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { UserContext } from '../../UserContext';
import welcomeImage from '../../assets/images/welcome.jpg'


export default function Welcome() {
    
    const {userInfo} = useContext(UserContext);

    return (
    <Jumbotron  style={{background: `url(${welcomeImage}) fixed center center`, backgroundSize: 'cover', height: "95vh", margin: "0 auto"}} fluid>
    <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '15px', padding: '50px'}}>
        <h1 style={{color: "#ffffff"}}>Welcome to MEANR</h1>
        <p style={{color: "#ffffff"}}>You have successfully logged in as <b>{userInfo.username}</b></p>
    </Container>
    </Jumbotron>
    )
}

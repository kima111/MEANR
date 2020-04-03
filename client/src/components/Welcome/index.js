import React, { useContext } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { UserContext } from '../../UserContext';

export default function Welcome() {
    
    const {userInfo} = useContext(UserContext);

    return (
    <Jumbotron fluid>
    <Container>
        <h1>Welcome to MEANR</h1>
        <p>You have successfully logged in as <b>{userInfo.username}</b></p>
    </Container>
    </Jumbotron>
    )
}

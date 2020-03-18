import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { UserContext } from '../../UserContext';

export default function Welcome() {
    
    const {userInfo} = useContext(UserContext);

    return (
    <Container>
        <h1>Welcome to MEANR</h1>
        <p>You have successfully logged in as {userInfo.username}</p>
    </Container>
    )
}

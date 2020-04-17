import React, { useContext } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../UserContext';

export default function Profile() {
    const {userInfo} = useContext(UserContext);
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1><FontAwesomeIcon icon='user-cog' /> Profile Settings</h1>
                    <hr />
                    <br/>
                    <h3>Username: {userInfo.username}</h3>
                    <br/>
                    <h3>First Name: {userInfo.firstName}{console.log(userInfo)}</h3>
                    <br/>
                    <h3>Last Name: {userInfo.lastName}{console.log(userInfo)}</h3>
                </Container>
            </Jumbotron>
        </div>
    )
}

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
                    <p>Username: {userInfo.username}</p>
                    <br/>
                    <p>First Name: {userInfo.firstName}{console.log(userInfo)}</p>
                    <br/>
                    <p>Last Name: {userInfo.lastName}{console.log(userInfo)}</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

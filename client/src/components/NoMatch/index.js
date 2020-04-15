import React from 'react'
import { Container, Jumbotron} from 'react-bootstrap';

export default function index() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    404 Error: It looks like there is no match for what you are looking for.
                </Container>
            </Jumbotron>
        </div>
    )
}

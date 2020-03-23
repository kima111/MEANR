import React from 'react'
import API from '../../utils/API'
import { Container } from 'react-bootstrap'

export default function () {


    const loadForum = event => {
        event.preventDefault();
        API.getForums().then(
            function (response) {
                console.log(response)
            }
        )

    }
    return (
    <div>
       <Container>
           <h1>Forum</h1>
           <button onClick={loadForum}>test</button>
       </Container>
    </div>
    )
}

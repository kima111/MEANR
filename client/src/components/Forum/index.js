import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Container } from 'react-bootstrap'

export default function () {

    const [forumInfo, setForumInfo] = useState([])

    useEffect(() => {
       console.log("loaded")
       API.getForums().then(
        function (response) {
            setForumInfo(response.data)  
        }
        )
    }, [])

    return (
    <div>
       <Container>
           <h1>Forum</h1>
           {forumInfo.map(item => (
               <div>
                <h2>{item.title}</h2>
                <hr/>
                <p>{item.forumText}</p>
                </div>
                )
                )
            }
        
       </Container>
    </div>
    )
}

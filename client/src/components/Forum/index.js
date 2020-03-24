import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Container } from 'react-bootstrap'

export default function () {
    const [forumInfo, setForumInfo] = useState([])
    // const [forumText, setForumText] = useState([])
    // const loadForum = event => {
    //     event.preventDefault();
    //     API.getForums().then(
    //         function (response) {
    //             setForumData(response.data[0].title)
    //             console.log(response)
    //         }
    //     )

    // }

    useEffect(() => {
       console.log("loaded")
       API.getForums().then(
        function (response) {
            setForumInfo(response.data)
   
            console.log(response)
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
                <p>{item.forumText}</p>
                </div>
                )
                )
            }
        
       </Container>
    </div>
    )
}

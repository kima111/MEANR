import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Container } from 'react-bootstrap'

export default function () {
    const [forumTitle, setForumTitle] = useState("")
    const [forumText, setForumText] = useState("")
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
            setForumTitle(response.data[0].title)
            setForumText(response.data[0].forumText)
            console.log(response)
        }
    )
    }, [])

    return (
    <div>
       <Container>
           <h1>Forum</h1>
           <h2>title: {forumTitle}</h2>
           <p>text: {forumText}</p>
       </Container>
    </div>
    )
}

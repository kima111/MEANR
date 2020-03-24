import React, { useState, useContext, useEffect, useCallback } from 'react'
import API from '../../utils/API'
import { Container, Button } from 'react-bootstrap'
import { UserContext } from '../../UserContext';
import { Link, useHistory } from 'react-router-dom';


export default function () {
    const { isAdmin, setIsAdmin } = useContext(UserContext);
    const [forumInfo, setForumInfo] = useState([])
    const deleteForum = (id) => {
        API.deleteForum(id)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    useEffect(() => {
       console.log("loaded")
       API.getForums().then(
        function (response) {
            setForumInfo(response.data)  
        }
        )
        return () => {
            
        }
    }, [])

    return (
    <div>
       <Container>
           <h1>Forum</h1>
           <br />
           <hr />
           {forumInfo.map(item => (
               <div key = {item._id} id={item._id}>
                     {isAdmin ?
                                <Button id={item._id} onClick={()=> deleteForum(item._id)}>Delete Forum</Button>
                            : ''
                        }
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

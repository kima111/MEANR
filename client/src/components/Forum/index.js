import React, { useState, useContext, useEffect} from 'react'
import API from '../../utils/API'
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { UserContext } from '../../UserContext';
import parse from 'html-react-parser';


export default function () {
    const { isAdmin, setIsAdmin } = useContext(UserContext);
    const [forumInfo, setForumInfo] = useState([])
    
    var loaded = false;
    const deleteForum = (id) => {
        API.deleteForum(id)
        .then(response => console.log(response))
        .catch(error => console.log(error))
     
    }
  
    useEffect(() => {
      
       API.getForums().then(
        function (response) {
            setForumInfo(response.data)  
        }
        )
     
        
        return () => {
            
        }
    }, [forumInfo])

    return (
    <div>
    <Jumbotron fluid>
       <Container>
           <h1>Forum</h1>
           <br />
           <hr />
           {forumInfo.map(item => (
               <div key = {item._id} id={item._id}>
                    
                <h2>{item.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {isAdmin ?
                    <Button id={item._id} onClick={()=> deleteForum(item._id)} variant="outline-danger">delete forum</Button>
                    : ''
                }</h2>
                <p style={{fontSize: "0.85em", color: "#aaaaaa"}}>posted: {item.date}</p> 
                <hr/>
                <p><div>{parse(item.forumText)}</div></p>
                <hr/>
                <br/>
                <br/>
                </div>
                )
                )
            }
        
       </Container>
    </Jumbotron>
    </div>
    )
}

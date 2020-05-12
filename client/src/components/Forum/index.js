import React, { useState, useContext, useEffect} from 'react'
import API from '../../utils/API'
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { UserContext } from '../../UserContext';
import parse from 'html-react-parser';
import socketIOClient from 'socket.io-client'

export default function () {
    const { isAdmin } = useContext(UserContext);
    const [forumInfo, setForumInfo] = useState([])
    
    const deleteForum = (id) => {
        API.deleteForum(id)
        .then(response => console.log(response))
        .catch(error => console.log(error))
     
    }
    const ENDPOINT = "http://127.0.0.1:3001";
    
    
    
    const [proxyMessage, setProxyMessage] = useState("");
    function getInfo(){
        API.getForums().then(  
            function(response){
            setForumInfo(response.data)  
          })
    }

 
    useEffect(() => {
        getInfo()
        const socket = socketIOClient(ENDPOINT);
        socket.on('message', function(message){
            console.log(message + "received");
            setProxyMessage(message)
        })
    //   socket.on("FromAPI", (data) => {
    //       setResponseData(data)
    //   }
    //     );
    }, []);

    return (
    <div>
    <Jumbotron fluid>
       <Container>
           <h1>Forum</h1>{proxyMessage}
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
                <p>posted by: {item.username}</p>
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

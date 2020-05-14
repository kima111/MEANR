import React, { useState, useContext, useEffect} from 'react'
import API from '../../utils/API'
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { UserContext } from '../../UserContext';
import parse from 'html-react-parser';
import socketIOClient from 'socket.io-client'

export default function () {

    const { isAdmin } = useContext(UserContext);
    const [forumInfo, setForumInfo] = useState([]);
    const endpoint = "http://127.0.0.1:3001";
    const socket = socketIOClient(endpoint);
    
    const deleteForum = (id) => {
        API.deleteForum(id)
        .then(response => console.log(response))
        .catch(error => console.log(error))
     
    }
    
    function getInfo(){
        API.getForums().then(  
            function(response){
            setForumInfo(response.data)  
          })
    }

    //watches for change event on forum and triggers getInfo
    socket.on('forumChangeEvent', function(){
        getInfo()
    })
 
    useEffect(() => {
        getInfo()
    }, []);

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
                <p>posted by: {item.username}</p>
                <hr/>
                {parse(item.forumText)}
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

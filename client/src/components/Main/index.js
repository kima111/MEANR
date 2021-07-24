import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import iconImage from '../../assets/images/MEANR_ICON.png'
import seattleSkyline from '../../assets/images/Seattle_Skyline.jpg'
import Frost from '../../components/Frost'

export default function Main() {
  
    return (
        <div>
            <Jumbotron style={{background: `url(${seattleSkyline}) fixed center center`, backgroundSize: 'cover', height: "95vh", margin: "0 auto"}} fluid>
                <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '15px', padding: '50px'}}>
                <h1 style={{fontSize: "2.5em", fontWeight: "400", color: "#ffffff"}} className="display-4"><img style={{marginRight: "15px", marginBottom: "10px"}}src={iconImage} alt="logo" />MEANR </h1>
                <p className="lead" style={{color: "#ffffff"}}>(Mongo, Express, Axios, Node, React) This is a full stack boiler plate.</p>
                <hr style={{backgroundColor: "#ffffff"}} className="my-4" />
                <p style={{color: "#ffffff"}}>You can use this boiler plate to create full stack MEANR applications quickly</p>
                <Button variant="outline-light" as={ Link } to="/About">Learn more</Button>
                </Container>
            </Jumbotron>

        </div>
    )
}

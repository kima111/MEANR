import React from 'react'
import { Link } from 'react-router-dom'
import iconImage from '../../assets/images/MEANR_ICON.png'

export default function Main() {
  
    return (
        <div>
            <div className="jumbotron">
                <h1 style={{fontSize: "2.5em", fontWeight: "400"}} className="display-4"><img style={{marginRight: "15px", marginBottom: "10px"}}src={iconImage} alt="logo" />MEANR </h1>
                <p className="lead">(Mongo, Express, Axios, Node, React) This is a full stack boiler plate.</p>
                <hr className="my-4" />
                <p>You can use this boiler plate to create full stack applications quickly</p>
                <Link to="/About" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
            </div>
        </div>
    )
}

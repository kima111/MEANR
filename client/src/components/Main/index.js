import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import API from '../../utils/API'

export default function Main() {
    const testAPI = event => {
        event.preventDefault();
        API.testAPI()
    }
  
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">MEANR</h1>
                <p className="lead"> (Mongo, Express, Axios, Node, React) This is a full stack boiler plate.</p>
                <hr className="my-4" />
                <p>You can use this boiler plate to create full stack applications quickly</p>
                <Link to="/About" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
                <Button onClick={testAPI}>Test</Button>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">REMANR </h1>
                <p className="lead"> (Redux, Express, Mongo, Axios, Node, React) This is a full stack boiler plate.</p>
                <hr className="my-4" />
                <p>You can use this boiler plate to create full stack applications quickly</p>
                <Link to="/About" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
            </div>
        </div>
    )
}

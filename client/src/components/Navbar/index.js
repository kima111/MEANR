import React from 'react'
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = "/" className="navbar-brand">REMANR</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to = "/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">Action</Link>
                        <Link className="dropdown-item" href="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Something else here</Link>
                    </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                </form>
            </div>
        </nav>        
    </div>
    )
}

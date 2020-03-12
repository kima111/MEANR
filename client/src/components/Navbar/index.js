import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import API from '../../utils/API'
import { Modal, Button, Popover} from 'react-bootstrap';

export default function Navbar() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <Button variant="primary" onClick={handleShow}>
                    Login
                </Button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter2">
                        Register
                    </button>
                </form>
            </div>
        </nav>
     

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>    
                 <input className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                      <br />
                <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={
                (event) => {
                event.preventDefault();
                API.authenticateUser({username: username, password: password})
                setShow(false)
                // handleClose
            }
            }>
                Login
            </Button>
            </Modal.Footer>
        </Modal>
        <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <Register />
        </div>          
    </div>
    )
}

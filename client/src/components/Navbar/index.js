import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom';
import API from '../../utils/API'
import { Modal, Button } from 'react-bootstrap';

export default function Navbar() {
    
//Used for both Login and Registration

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

//Login

    const [showLogin, setShowLogin] = useState(false);
    const history = useHistory();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const login = event => {
        event.preventDefault();
        API.authenticateUser({
            username: username, 
            password: password
        }).then(
            function(response){
                console.log(response.data.loggedIn)
                if(response.data.loggedIn === true){
                    history.push('/About')
                    setShowLogin(false)
                    
                }
                else if(response === null){
                    setShowLogin(true);
                }
                else{
                    setShowLogin(true);
                }
            }
        )

    }

//Registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const register = event => {
        event.preventDefault();
        API.registerUser({
            firstName, 
            lastName, 
            username, 
            password, 
            email
        }).then(
            function(response){
                if(response.data.registered === true){
                    history.push('/About')
                    setShowRegister(false)
                    
                }
                else if(response === null){
                    setShowRegister(true);
                }
                else{
                    setShowRegister(true);
                }
            }
        )

    }

    return (

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = "/" className="navbar-brand">MEANR</Link>
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
                        <Link to ="/About" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to ="/About" className="dropdown-item" href="#">Action</Link>
                        <Link to ="/About" className="dropdown-item" href="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                        <Link to ="/About" className="dropdown-item" href="#">Something else here</Link>
                    </div>
                    </li>
                    <li className="nav-item">
                        <Link to ="/About" className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <Button variant="primary" onClick={handleShowLogin}>
                    Login
                </Button>
                    &nbsp;&nbsp;
                <Button variant="primary" onClick={handleShowRegister}>
                    Register
                </Button>
                </form>
            </div>
        </nav>
     

        <Modal show={showLogin} onHide={handleCloseLogin}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>    
                 <input className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                      <br />
                <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={login}>
                Login
            </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showRegister} onHide={handleCloseRegister}>
            <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>    
                <input className="form-control mr-sm-2" type="firstname" placeholder="First Name" aria-label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                <br />
                <input className="form-control mr-sm-2" type="lastname" placeholder="Last Name" aria-label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)}/>
                <br />
                <input className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                <br />
                <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                <br />
                <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" value={email} onChange={event => setEmail(event.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={register}>
                Register
            </Button>
            </Modal.Footer>
        </Modal>         
    </div>
    )
}

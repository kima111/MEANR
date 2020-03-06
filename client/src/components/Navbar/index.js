import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function handleLogin(username, password){
    console.log(username + password);
}

export default function Navbar() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
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
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Login
                    </button>
                </form>
            </div>
        </nav>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                        <br />
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick = {(event) => {
                            event.preventDefault();
                            handleLogin({username}, {password})
                            }
                        } className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    )
}

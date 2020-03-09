import React, {useState} from 'react'
import API from '../../utils/API'

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control mr-sm-2" type="firstname" placeholder="First Name" aria-label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                        <br />
                        <input className="form-control mr-sm-2" type="lastname" placeholder="Last Name" aria-label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)}/>
                        <br />
                        <input className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                        <br />
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                        <br />
                        <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick = {(event) => {
                            event.preventDefault();
                                API.authenticateUser(username, password)
                            }
                        } className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

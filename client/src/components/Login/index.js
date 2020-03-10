import React, {useState} from 'react'
import API from '../../utils/API'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
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
                                API.authenticateUser({username: username, password: password})
                            }
                        } className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

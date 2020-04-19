import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/API'
import { Modal, Button, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MainNavbar() {

    //Used for both Login and Registration
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { isAdmin, setIsAdmin } = useContext(UserContext);
    const { setUserInfo } = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Used for password validation

    const [letters, setLetters] = useState('');
    const [capital, setCapital] = useState('');
    const [number, setNumber] = useState('');
    const [length, setLength] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [checkPasswordMessage, setCheckPasswordMessage] = useState('');
    const [checkPasswordValid, setCheckPasswordValid] = useState('')

    //Login

    var [showLogin, setShowLogin] = useState(false);
    const history = useHistory();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);


    const login = event => {
        event.preventDefault();
        API.authenticateUser({
            username: username,
            password: password
        }).then(
            function (response) {
                console.log(response.data.loggedIn)
                if (response.data.role === "user") {
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowLogin(false)

                }
                else if (response.data.role === "administrator"){
                    setIsAdmin(true)
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowLogin(false)
                }
                else if (response === null) {
                    setErrorMessage('username or password incorrect')
                    setShowLogin(true);
                }
                else {
                    setErrorMessage('username or password incorrect')
                    setShowLogin(true);
                }
            }
        )

    }
    const checkPasswordMatch = event => {
        event.preventDefault()
        if(checkPassword !== password){
            setCheckPasswordValid("Passwords do not match")
        }
        else{
            setCheckPasswordValid("Passwords match")
        }
    }
    const passwordCheck = event => {
        event.preventDefault();
        console.log("event")
          // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(password.match(lowerCaseLetters)) {  
            setLetters("✔ lower case letters");
        } else {
            setLetters("✖ lower case letters");
        }
        
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(password.match(upperCaseLetters)) {  
            setCapital("✔ upper case letters");
        } else {
            setCapital("✖ upper case letters");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if(password.match(numbers)) {  
          
            setNumber("✔ contains numbers");
        } else {
            setNumber("✖ contains numbers");
        }
        
        // Validate length
        if(password.length >= 8) {
            setLength("✔ at least 8 characters");
        } else {
            setLength("✖ at least 8 characters");
        }
    }

    // const enterFunction = useCallback((event) => {
    //     if (event.keyCode === 13) {

    //     }
    // }, []);

    useEffect(() => {

        document.addEventListener("keyup", (event)=>{
            checkPasswordMatch(event)
            passwordCheck(event);
           
        }, false);
      

        return () => {

        document.removeEventListener("keyup", (event) => {
            checkPasswordMatch(event);
            passwordCheck(event);
            
        }, false);

        
        

        };
    }, [password, checkPassword]);


    //Logout
    const logout = event => {
        event.preventDefault();
        API.logoutUser();
        setLoggedIn(false);
        setIsAdmin(false);
        history.push('/SignOut')

        
    }

    //Registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

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
            email,
            phoneNumber: phone
        }).then(
            function (response) {
                if (response.data.registered === true) {
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowRegister(false)

                }
                else if (response === null) {
                    setShowRegister(true);
                }
                else {
                    setErrorMessage(response.data.error)
                    setShowRegister(true);
                }
            }
        )

    }

    return (

        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Navbar.Brand as={Link} to="/">MEANR</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    {isLoggedIn ? <NavDropdown bg="dark" title="Tools" id="collapsible-nav-dropdown">
                        {isLoggedIn ? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/Forum">Forum</NavDropdown.Item> : ''}
                        {isLoggedIn ? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/SubmitPayment">Submit Payment</NavDropdown.Item> : ''}
                        {isAdmin? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/SubmitForum">Submit Forum</NavDropdown.Item> : ''}
                        {isAdmin? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/SubmitTextMessage">Submit Text Message</NavDropdown.Item> : ''}
                        {isAdmin? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/SubmitEmail">Submit Email</NavDropdown.Item> : ''}
                        {isAdmin? <NavDropdown.Item style={{ color: "#000000" }} as={Link} to="/UserDirectory">User Directory</NavDropdown.Item> : ''}
                    </NavDropdown>: ""}
                  
                 
                </Nav>
                <br/>
                <Form inline>
                    {isLoggedIn ? <Button variant="outline-primary" as={Link} to="/Profile"><FontAwesomeIcon icon='user-cog' /> &nbsp; Profile Settings</Button>: ''}
                    &nbsp;&nbsp;
                    {isLoggedIn ? '' : <Button type="button" variant="outline-primary" onClick={handleShowLogin}>Login</Button>}
                    &nbsp;&nbsp;
                    {isLoggedIn ? <Button variant="outline-primary" onClick={logout}>Logout</Button>: ''}
                    &nbsp;&nbsp;
                    {isLoggedIn ? '' : <Button variant="outline-primary" onClick={handleShowRegister}>Register</Button>}
                    
                </Form>
                </Navbar.Collapse>
            </Navbar>


            <Modal show={showLogin} onHide={handleCloseLogin}>
                

            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}  />
                            <Form.Text className="text-muted">
                                {errorMessage}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)} />
                            <Form.Text className="text-muted">
                                {errorMessage}
                            </Form.Text>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={login}>
                        Submit
                    </Button>
                </Modal.Footer>
                </Form>
           
            </Modal>
            <Modal show={showRegister} onHide={handleCloseRegister}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="firstname" placeholder="First Name" aria-label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="lastname" placeholder="Last Name" aria-label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" value={email} onChange={event => setEmail(event.target.value)}  />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="phone" placeholder="Phone Number" aria-label="Phone Number" value={phone} onChange={event => setPhone(event.target.value)}  />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-control mr-sm-2" onFocus={event => setPasswordMessage('Password must contain the following:')} type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)} />
                    <p>{passwordMessage}</p>
                    <p>{letters}</p>
                    <p>{capital}</p>
                    <p>{number}</p>
                    <p>{length}</p>
                </Form.Group>
                <Form.Group controlId="checkPassword">
                    <Form.Label>Check Password</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={checkPassword} onChange={event => setCheckPassword(event.target.value)}  onFocus={event => setCheckPasswordMessage('Password must match:')} />
                    <p>{checkPasswordValid}</p>
                </Form.Group>
                <p style={{fontSize: "0.85", color: "#FA8072"}}>{errorMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={register}>
                        Register
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
            
        </div>
    )
}

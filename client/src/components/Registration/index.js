import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API'
import { Button, Form, Container, Jumbotron, Col } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'react-phone-number-input/input'
import mountainsImage from '../../assets/images/registration.jpg'

export default function Registration() {
  
    //Used for both Login and Registration
    
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
 
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
    const [checkPasswordCondition, setCheckPasswordCondition] = useState(false)

    //to validate passwords before registering
    const [validPassword, setValidPassword] = useState(false);
    const [validCheckPassword, setValidCheckPassword] = useState(false);

    //Login

    var [showLogin, setShowLogin] = useState(false);
    const history = useHistory();

    const checkPasswordMatch = event => {
        event.preventDefault()
        if(checkPassword !== password){
            setValidCheckPassword(false)
            setCheckPasswordCondition(false)
            setCheckPasswordValid("✖ Passwords do not match")
        }
        else{
            setValidCheckPassword(true)
            setCheckPasswordCondition(true)
            setCheckPasswordValid("✔ Passwords match")
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

        if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.length >= 8){
            setValidPassword(true)
        }
        else{
            setValidPassword(false)
        }
    }

    useEffect(() => {

        document.addEventListener("keyup", (event)=>{  
            passwordCheck(event);
            checkPasswordMatch(event)
        }, false);
      
         
        return () => {

        document.removeEventListener("keyup", (event) => {
            checkPasswordMatch(event);
            passwordCheck(event);
            
        }, false);

  
        };
    }, [password, checkPassword]);

    //Registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    //Validation error messages

    const[usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const[passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const[checkPasswordErrorMessage, setCheckPasswordErrorMessage] = useState('')
    const[firstNameErrorMessage, setFirstNameErrorMessage] = useState('')
    const[lastNameErrorMessage, setLastNameErrorMessage] = useState('')
    const[emailErrorMessage, setEmailErrorMessage] = useState('')
    const[phoneErrorMessage, setPhoneErrorMessage] = useState('')

    const [showRegister, setShowRegister] = useState(false);


    const [passwordOnFocus, setPasswordOnFocus] = useState(false)

    const register = event => {
        event.preventDefault();
        var usernameCheck = false;
        var passwordCheck = false;
        var checkPasswordCheck = false;
        var firstNameCheck = false;
        var lastNameCheck = false;
        var emailCheck = false;
        var phoneCheck = false;

        const namePattern = /^([a-zA-Z ]){1,30}$/g
        const usernamePattern = /^[a-z0-9_-]{6,16}$/g
        const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/g
        const phonePattern = /^\+?[0-9_-]{11}$/g;

        if(username===''){
            setUsernameErrorMessage('username required')
        }
        else if(!username.match(usernamePattern)){
            setUsernameErrorMessage('username must be at least 6 characters long and use valid characters')
        }
        else{
            setUsernameErrorMessage('')
            usernameCheck = true;
        }
        if(password === ''){
            setPasswordErrorMessage('password required')
        }
        else{
            setPasswordErrorMessage('')
            passwordCheck = true;
        }
        if(checkPassword===''){
            setCheckPasswordErrorMessage('password check required')
        }
        else{
            setCheckPasswordErrorMessage('')
            checkPasswordCheck = true; 
        }
        if(firstName===''){
            setFirstNameErrorMessage('first name required')
        }
        else if(!firstName.match(namePattern)){
            setFirstNameErrorMessage('please use valid characters')
        }
        else{
            setFirstNameErrorMessage('')
            firstNameCheck = true;
        }
        if(lastName===''){
            setLastNameErrorMessage('last name required')
        }
        else if(!lastName.match(namePattern)){
            setLastNameErrorMessage('please use valid characters')
        }
        else{
            setLastNameErrorMessage('')
            lastNameCheck = true;
        }
        if(email === ''){
            setEmailErrorMessage('email required')
        }
        else if(!email.match(emailPattern)){
            setEmailErrorMessage('please use a valid email address')
        }
        else{
            setEmailErrorMessage('')
            emailCheck = true;
        }
        if(phone === ''){
            setPhoneErrorMessage('phone number required')
        }
        else if(!phone.match(phonePattern)){
            console.log(phone)
            setPhoneErrorMessage('please use valid phone number')
        }
        else{
            setPhoneErrorMessage('')
            phoneCheck = true;
        }
        // final check before registering
        if(usernameCheck && passwordCheck && checkPasswordCheck && firstNameCheck && lastNameCheck && emailCheck && phoneCheck && validPassword && validCheckPassword === true ){
            

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
                    
                    //reset registration page
                    setUsername('')
                    setPasswordOnFocus('')
                    setCheckPassword('')
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhone('')
                    
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

    }


    return (
        <div>
            <Jumbotron style={{background: `url(${mountainsImage}) fixed center center`, backgroundSize: 'cover', height: "95vh", margin: "0 auto"}} fluid>
                <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px', padding: '50px'}}>
                <h2 style={{color: "#ffffff"}}>Registration</h2>
                <hr style={{backgroundColor: "#ffffff"}} />
                <Form>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label style={{color: "#ffffff"}}>First Name *</Form.Label>
                            <Form.Control required={true} className="form-control mr-sm-2" type="firstname" placeholder="First Name" aria-label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                            <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{firstNameErrorMessage}</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label style={{color: "#ffffff"}}>Last Name *</Form.Label>
                            <Form.Control required={true} className="form-control mr-sm-2" type="lastname" placeholder="Last Name" aria-label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
                            <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{lastNameErrorMessage}</p>
                        </Form.Group>
                    </Col>
                </Form.Row>
              
                <Form.Group controlId="userName">
                    <Form.Label style={{color: "#ffffff"}}>User Name *</Form.Label>
                    <Form.Control required={true} className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)} />
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{usernameErrorMessage}</p>
                </Form.Group>
        
                <Form.Group controlId="email">
                    <Form.Label style={{color: "#ffffff"}}>Email Address *</Form.Label>
                    <Form.Control required={true} className="form-control mr-sm-2" type="email" placeholder="Email Address" aria-label="Email" value={email} onChange={event => setEmail(event.target.value)}  />
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{emailErrorMessage}</p>
                </Form.Group>
        
                <Form.Group controlId="phone">
                    <Form.Label style={{color: "#ffffff"}}>Phone Number *</Form.Label>
                    <Input required={true} type="phone" placeholder="phone number" aria-label="Phone Number" class="form-control mr-sm-2" defaultCountry="US" value={phone} onChange={setPhone}/>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{phoneErrorMessage}</p>
                </Form.Group>
        
                <Form.Group controlId="password">
                    <Form.Label style={{color: "#ffffff"}}>Password *</Form.Label>
                    <Form.Control required={true} className="form-control mr-sm-2" onFocus={event => setPasswordMessage('Password must contain the following:')} type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)} />
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{passwordErrorMessage}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{passwordMessage}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{letters}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{capital}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{number}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{length}</p>
                </Form.Group>
            
                <Form.Group controlId="checkPassword">
                    <Form.Label style={{color: "#ffffff"}}>Confirm Password *</Form.Label>
                    <Form.Control required={true} className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={checkPassword} onChange={event => setCheckPassword(event.target.value)}  onFocus={event => setCheckPasswordMessage('Password must match:')} />
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}> &nbsp;&nbsp;{checkPasswordErrorMessage}</p>
                    <p style={{ color: "#FF0000", fontSize: "0.7em" }}>{checkPasswordValid}</p>
                </Form.Group>
         
                
                <p style={{fontSize: "0.85", color: "#FA8072"}}>{errorMessage}</p>
                <hr style={{backgroundColor: "#ffffff"}} />

                <Button variant="outline-light" type="submit" onClick={register}>
                        Register
                </Button>
        
                </Form>

                </Container>
            </Jumbotron>
           
        </div>
    )
}

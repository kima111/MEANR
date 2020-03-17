import React, {useContext} from 'react'
import { UserContext } from '../../UserContext';
import {
  BrowserRouter as Router,  
  Route,
  Redirect
} from 'react-router-dom'


export default function ProtectedRoute({component: Component,loggedIn: LoggedIn, ...rest }) {

  const {isLoggedIn, setLoggedIn} = useContext(UserContext)
 
  return (
    <div>
    <Router>
    <Route {...rest} render={(props) => (
        isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
    </Router>
    </div>
  )
}



import React, {useContext} from 'react'
import { UserContext } from '../../UserContext';
import {
  BrowserRouter as Router,  
  Route,
  Redirect
} from 'react-router-dom'


export default function ProtectedRoute({component: Component,loggedIn: LoggedIn, ...rest }) {

  const {isAdmin} = useContext(UserContext)
 
  return (
    <div>
    <Router>
    <Route {...rest} render={(props) => (
        isAdmin === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
    </Router>
    </div>
  )
}



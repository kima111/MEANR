import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import Main from '../src/components/Main'
import About from '../src/components/About'
import Welcome from '../src/components/Welcome'
import SignOut from '../src/components/SignOut'
import Forum from '../src/components/Forum'
import {UserContext} from './UserContext'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import UserProtectedRoute from '../src/components/UserProtectedRoutes'

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{isLoggedIn, setLoggedIn, userInfo, setUserInfo}}>
          
    <Router>

     <Layout></Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/SignOut" component={SignOut} />
          <UserProtectedRoute exact path="/Welcome" component={Welcome} />
          <UserProtectedRoute exact path="/Forum" component={Forum} />
        </Switch>
    
    
    </Router>  
    </UserContext.Provider>
  )
}

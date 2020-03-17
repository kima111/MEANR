import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import Main from '../src/components/Main'
import About from '../src/components/About'
import {UserContext} from './UserContext'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import UserProtectedRoute from '../src/components/UserProtectedRoutes'

export default function App() {
  const [value, setValue] = useState('hello from Context');
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{isLoggedIn, setLoggedIn}}>
          
    <Router>

     <Layout></Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <UserProtectedRoute exact path="/About" component={About} />
        </Switch>
    
    
    </Router>  
    </UserContext.Provider>
  )
}

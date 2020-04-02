import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import Main from '../src/components/Main'
import About from '../src/components/About'
import Welcome from '../src/components/Welcome'
import SignOut from '../src/components/SignOut'
import Forum from '../src/components/Forum'
import SubmitForum from '../src/components/SubmitForum'
import SubmitTextMessage from '../src/components/SubmitTextMessage'
import SubmitEmail from '../src/components/SubmitEmail'
import SubmitPayment from '../src/components/SubmitPayment'
import UserDirectory from '../src/components/UserDirectory'
import { UserContext } from './UserContext'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import UserProtectedRoute from '../src/components/UserProtectedRoutes'
import AdminProtectedRoute from '../src/components/AdminProtectedRoutes'


export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router>
    <UserContext.Provider value={{isLoggedIn, setLoggedIn, isAdmin, setIsAdmin, userInfo, setUserInfo}}>      
    

     <Layout></Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/SignOut" component={SignOut} />
          <UserProtectedRoute exact path="/Welcome" component={Welcome} />
          <AdminProtectedRoute exact path="/SubmitForum" component={SubmitForum} />
          <AdminProtectedRoute exact path="/SubmitTextMessage" component={SubmitTextMessage} />
          <AdminProtectedRoute exact path="/SubmitEmail" component={SubmitEmail} />
          <AdminProtectedRoute exact path="/UserDirectory" componen={UserDirectory} />
          <UserProtectedRoute exact path="/Forum" component={Forum} />
          <UserProtectedRoute exact path="/SubmitPayment" component={SubmitPayment} />
          
        </Switch>
    
    
      
    </UserContext.Provider>
    </Router>
  )
}

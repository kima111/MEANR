import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import Main from '../src/components/Main'
import About from '../src/components/About'
import Welcome from '../src/components/Welcome'
import ThankYou from '../src/components/ThankYou'
import SignOut from '../src/components/SignOut'
import Forum from '../src/components/Forum'
import SubmitForum from '../src/components/SubmitForum'
import SubmitTextMessage from '../src/components/SubmitTextMessage'
import SubmitEmail from '../src/components/SubmitEmail'
import SubmitPayment from '../src/components/SubmitPayment'
import UserDirectory from '../src/components/UserDirectory'
import Registration from '../src/components/Registration'
import Profile   from '../src/components/Profile'
import { UserContext } from './UserContext'
import { Router, Route, Switch} from "react-router-dom"
import history from "../src/components/History"
import UserProtectedRoute from '../src/components/UserProtectedRoutes'
import AdminProtectedRoute from '../src/components/AdminProtectedRoutes'
import NoMatch from '../src/components/NoMatch'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'

library.add(farUser, faUserCog)

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router history={history}>
    <UserContext.Provider value={{isLoggedIn, setLoggedIn, isAdmin, setIsAdmin, userInfo, setUserInfo}}>      
    
    <Layout></Layout>
    <Switch>
      
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Registration" component={Registration}/>
          <Route exact path="/SignOut" component={SignOut} />
          <UserProtectedRoute exact path="/Welcome" component={Welcome} />
          <UserProtectedRoute exact path="/ThankYou" component={ThankYou} />
          <AdminProtectedRoute exact path="/SubmitForum" component={SubmitForum} />
          <AdminProtectedRoute exact path="/SubmitTextMessage" component={SubmitTextMessage} />
          <AdminProtectedRoute exact path="/SubmitEmail" component={SubmitEmail} />
          <AdminProtectedRoute exact path="/UserDirectory" component={UserDirectory} />
          <UserProtectedRoute exact path="/Forum" component={Forum} />
          <UserProtectedRoute exact path="/SubmitPayment" component={SubmitPayment} />
          <UserProtectedRoute exact path="/Profile" component={Profile} />
          <Route component={NoMatch} />
          
    </Switch>
    
    
        
      
    </UserContext.Provider>
    </Router>
  )
}

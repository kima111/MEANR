import React from 'react'
import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import About from '../src/components/About'
import Register from '../src/components/Register'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

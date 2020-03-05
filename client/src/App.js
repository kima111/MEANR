import React from 'react'
import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        REMANR Boiler Template
      </div>
    </Router>
  )
}

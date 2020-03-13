import React from 'react'
import Layout from '../src/components/Layout'
import Main from '../src/components/Main'
import About from '../src/components/About'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <Layout>
        </Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

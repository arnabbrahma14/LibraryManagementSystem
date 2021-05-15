import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import PNF from './Pages/PageNotFound'
import Users from './Pages/Users'
import Books from './Pages/Books'
import Items from './Pages/Items'

export default function App() {
  return (
  <Router>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/signup" exact component = {Signup} />
        <Route path = "/users" exact component = {Users} />
        <Route path = "/books" exact component = {Books} />
        <Route path = "/items" exact component = {Items} />
        <Route path = "*" component = {PNF} />
      </Switch>
    </Router>
  )
}


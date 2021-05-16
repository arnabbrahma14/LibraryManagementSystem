import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import PNF from './Pages/PageNotFound'
import Users from './Pages/Users'
import Books from './Pages/Books'
import BooksList from './Pages/BooksList'
import UsersBooksList from './Pages/UsersBooksList'

export default function App() {
  return (
  <Router>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/signup" exact component = {Signup} />
        <Route path = "/users" exact component = {Users} />
        <Route path = "/books" exact component = {Books} />
        <Route path = "/booksList" exact component = {BooksList} />
        <Route path = "/UsersBooksList" exact component = {UsersBooksList} />
        <Route path = "*" component = {PNF} />
      </Switch>
    </Router>
  )
}


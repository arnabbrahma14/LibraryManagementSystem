import React from 'react'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import PNF from './Pages/PageNotFound'
import Admin from './Pages/Admin'
import Books from './Pages/Books'
import BooksList from './Pages/BooksList'
import UsersBooksList from './Pages/UsersBooksList'
import UsersBooksAdmin from './Pages/UsersBooksAdmin'
import AdminBooks from './Pages/AdminBooks';


export default function App() {
  return (
  <Router>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/signup" exact component = {Signup} />
        <Route path = "/admin" exact component = {Admin} />
        <Route path = "/books" exact component = {Books} />
        <Route path = "/booksList" exact component = {BooksList} />
        <Route path = "/UsersBooksList" exact component = {UsersBooksList} />
        <Route path = "/UsersBooksAdmin" exact component = {UsersBooksAdmin} />
        <Route path = "/AdminBooks" exact component = {AdminBooks} />
        <Route path = "*" component = {PNF} />
      </Switch>
    </Router>
  )
}


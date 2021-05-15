import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button, Container} from '../../node_modules/react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'


export default function NavbarComp () {
    let history = useHistory()
    const font =  "'Quicksand', sans-serif";

    var [user, setUser] = useState('')

    //Getting the Current User that has logged in
    useEffect(() => {
      const loggedInUser = localStorage.getItem('Email');
      if (loggedInUser) {
        const foundUser = loggedInUser;
        setUser(foundUser);
      }
    }, []);
    var logout = () => {
        setUser('');
    localStorage.clear();
    history.push("/users")

    window.location.reload()
    }
    return (
            <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand  onClick = {() => (history.push("/"))} style = {{fontFamily: font}} href="/">Navbar</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link onClick = {() => (history.push("/users"))} style = {{fontFamily: font}} href="#">Users</Nav.Link>
                    <Nav.Link onClick = {() => (history.push("/books"))} style = {{fontFamily: font}} href="#">Books</Nav.Link>
                    <Nav.Link href="/About" style = {{fontFamily: font}}>About</Nav.Link>
                    <Nav.Link href="/Contact" style = {{fontFamily: font}}>Contact</Nav.Link>
                </Nav>
                
                    <Button variant="outline-info" onClick = {() => (history.push("/signup"))} style = {{fontFamily: font}}>SignUp | SignIn</Button>
                    <Nav>
                    <Nav.Link style = {{fontFamily: font}}>{user}</Nav.Link>
                    </Nav>
                    <Button variant = "primary" onClick = {logout} style = {{fontFamily: font}}>Logout</Button>
                </Navbar.Collapse>
                </Container>
            </Navbar>    
        </>   
    )
}
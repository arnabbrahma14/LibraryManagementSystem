import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button, Container} from '../../node_modules/react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
const axios = require('axios')


export default function NavbarComp () {
    let history = useHistory()
    const font =  "'Quicksand', sans-serif";

    var [user, setUser] = useState('')
    // var [depts, setDepts] = useState([])

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
    history.push("/")

    window.location.reload()
    }

    var getUsersBooks = () => {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/displayBooks',
          data: {Email: user}
        })
        .catch(err => console.log(err))
        .then((response) => {
          console.log(response)
          // setUsersBooks(response.data)
          history.push("/usersBooksList", response.data)
        })
    
      }

      var getDept = ()  => {
        axios({
          method: 'get',
          url: 'http://localhost:5000/api/depts',
        })
        .catch(err => console.log(err))
        .then( response => {
          console.log(response.data)
          // for(const ele of response.data)  {console.log(ele.Name)}
          //  return <DeptButton Name = {ele.Name} />}
          // setDepts(response.data)
          history.push("/books", response.data)
        })
      }
    
    return (
            <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand  onClick = {() => (history.push("/"))} style = {{fontFamily: font}} href="/">Library Management System</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/" style = {{fontFamily: font}}>Home</Nav.Link>
                        <Nav.Link onClick = {() => (history.push("/admin"))} style = {{fontFamily: font}} >Admin</Nav.Link>
                        <Nav.Link onClick = {getDept} style = {{fontFamily: font}} >Books</Nav.Link>
                        <Nav.Link href="/About" style = {{fontFamily: font}}>About</Nav.Link>
                        <Nav.Link href="/Contact" style = {{fontFamily: font}}>Contact</Nav.Link>

                        </Nav>
                        <Nav style = {{float : 'right'}}>
                        
                        
                        <Button  variant="outline-info" onClick = {() => (history.push("/signup"))} style = {{fontFamily: font, marginRight : '4px'}}>SignUp | SignIn</Button>
                        
                        <Button variant = "primary" onClick = {logout} style = {{fontFamily: font, marginRight : '4px'}}>Logout</Button>
                        {/* <Button variant = "primary" onClick = {getUsersBooks} style = {{fontFamily: font, marginRight : '4px'}}>Your Books</Button> */}
                        
                        <Nav.Link  onClick = {getUsersBooks} style = {{fontFamily: font, color : 'white'}}>{user}</Nav.Link>
                    </Nav>
                    </Container>
            </Navbar>    
        </>   
    )
}
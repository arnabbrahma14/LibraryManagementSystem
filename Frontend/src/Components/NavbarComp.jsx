import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";
import {Nav, Button, Container} from '../../node_modules/react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
const axios = require('axios')


// .navbar-nav > li > a.active, .navbar-nav > li > a.active:focus{
//   border-top: 0.1875rem solid var(#f9ab00);

// }




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
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Container >
                    <Nav.Link onClick = {() => (history.push("/"))} className="mr-3" style = {{textDecoration: "None"}} href= "/" >
						<h4  style = {{fontFamily: font, color: "white"}}>Library Management System</h4>
					</Nav.Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    		<FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                    </button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								
									<li className="nav-item active">
										<Nav.Link className="nav-links" onClick = {() => (history.push("/"))} style = {{fontFamily: font}} href= "/">Home</Nav.Link>
									</li>
									<li className="nav-item">
										<Nav.Link className="nav-link" onClick = {() => (history.push("/admin"))} style = {{fontFamily: font}} >Admin</Nav.Link>
									</li>
									<li className="nav-item">
										<Nav.Link className="nav-link" onClick = {getDept} style = {{fontFamily: font}} >Books</Nav.Link>
									</li>
									<li className="nav-item">
										<Nav.Link className="nav-link" href="/About" style = {{fontFamily: font}}>About</Nav.Link>
									</li>
									<li className="nav-item">
										<Nav.Link className="nav-link" href="/Contact" style = {{fontFamily: font}}>Contact</Nav.Link>
									</li>
									<li className="nav-item">

										<Button  variant="outline-info" onClick = {() => (history.push("/signup"))} style = {{fontFamily: font, marginRight : '4px'}}>SignUp | SignIn</Button>
									</li>
									<li className="nav-item">

										<Button variant = "primary" onClick = {logout} style = {{fontFamily: font, marginRight : '4px'}}>Logout</Button>
									</li>
									<li className="nav-item">
									<Nav.Link  onClick = {getUsersBooks} style = {{fontFamily: font, color : 'white'}}>{user}</Nav.Link>
									</li>
								
							</ul>                      
						</div>
                </Container>
			</nav>    
        </>   
    )
}
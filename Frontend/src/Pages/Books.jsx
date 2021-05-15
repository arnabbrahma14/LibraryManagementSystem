import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import CardComp from '../Components/CardComp'
import NavbarComp from '../Components/NavbarComp'
import {Container, Row, Col} from 'react-bootstrap'

const axios = require('axios')

function Books() {
    var [books, setbooks] = useState([])
    var [usersBooks, setUsersBooks] = useState([])
    var [user, setUser] = useState('')
    var history = useHistory()

    //Getting the Current User that has logged in
    useEffect(() => {
      const loggedInUser = localStorage.getItem('Email');
      if (loggedInUser) {
        const foundUser = loggedInUser;
        setUser(foundUser);
      }
    }, []);


    var getUser = () => {
      axios({
        method : 'post',
        url : 'http://localhost:5000/api/books',
        data : {Email: user}
      })
      .then( function(response) {
          console.log(response)
          setbooks(response.data);
          console.log(books)
          history.push("/items", response.data)
         
      })
      .catch(function (error) {
          console.log(error);
        })
  }
  var display = (item) => {
    return <div>{item.map(ele => (
            
            
            <li key = {ele.Isbn} style = {{listStyle : 'none'}}> 
            <Container>
              <Row>
                <Col md ={6} className = "mb-5">
                  <CardComp Name = {ele.Name} Author = {ele.Author} Total = {ele.Total} Fun = {() => addBooks(ele.Isbn)}/>
                </Col>
              </Row>
            </Container>
            </li>
          ))}

        </div>
}
  var addBooks = (ele) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/borrow',
      data: {Email: user, Isbn: ele}
    })
    .catch(err => console.log(err))
    .then( (response) => {
      alert(response.data)
      window.location.reload()
      history.push("/books")
    })
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
      setUsersBooks(response.data)
    })

  }
  
    
    return <>
    <NavbarComp />
    <div>
    <button onClick = {getUser}>Books</button>
    <div>{display(books)}</div>
    <div>{user}</div>
    <button onClick = {getUsersBooks}>Users Books</button>
    <div>{display(usersBooks)}</div>
   
    </div>
    </>
}

export default Books











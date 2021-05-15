import React, {useState, useEffect} from 'react' 
import {Container, Row, Col} from 'react-bootstrap'
import CardComp from '../Components/CardComp'
import NavbarComp from '../Components/NavbarComp'
import {useHistory} from 'react-router-dom'
const axios = require('axios')

export default function Items(props) {

    var [user, setUser] = useState('')
    let history = useHistory()
    // var [books, setbooks] = useState([])

    //Getting the Current User that has logged in
    useEffect(() => {
      const loggedInUser = localStorage.getItem('Email');
      if (loggedInUser) {
        const foundUser = loggedInUser;
        setUser(foundUser);
      }
    }, []);
    
    var addBooks = (ele) => {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/borrow',
          data: {Email: user, Isbn: ele}
        })
        .catch(err => console.log(err))
        .then( (response) => {
          alert(response.data)
          history.push("/books")
          window.location.reload()
        })
      }
    return  <>
    <NavbarComp />
    <div>{props.location.state.map(ele => (
            
        <li key = {ele.Isbn} style = {{listStyle : 'none'}}> 
        <Container>
          <Row>
            <Col md ={6} className = "m-3">
              <CardComp Name = {ele.Name} Author = {ele.Author} Total = {ele.Total} Fun = {() => addBooks(ele.Isbn)}/>
            </Col>
          </Row>
        </Container>
        </li>
      ))}

    </div>
    </>

    // return <div>{console.log(props.location.state )}</div>

}
import React, {useState, useEffect} from 'react' 
import {Container, Row, Col} from 'react-bootstrap'
import CardComp from '../Components/CardComp'
import NavbarComp from '../Components/NavbarComp'
import {useHistory} from 'react-router-dom'
const axios = require('axios')

export default function UsersBooksList(props) {

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
    
    var deleteBook = (isbn) => {
        axios({
          method : 'post',
          url: 'http://localhost:5000/api/deletebook',
          data: {Email: user, Isbn: isbn}
        })
        .catch(err => console.log(err))
        .then(response => {
          console.log(response)
        //   window.location.reload()
          history.push("/books")
        })
      }

    //   var show = () => {
        console.log(props)
        if(props.location.state === undefined || props.location.state.length <= 0) {
        return <>
        <NavbarComp />
        <Container>
            <div>Currently No books pending</div>
        </Container>
        </>
        }
      
        else  {
        return <>
        <NavbarComp />    
        <div>{props.location.state.map(ele => (
                
            <li key = {ele.Isbn} style = {{listStyle : 'none'}}> 
            <Container>
              <Row>
                <Col md ={6} className = "m-3">
                  <CardComp Name = {ele.Name} Author = {ele.Author} Total = {ele.Total} Fun = {() => deleteBook(ele.Isbn)} message = {'Delete'}/>
                </Col>
              </Row>
            </Container>
            </li>
          ))}
    
        </div>
        </>
        }
    //   }

      

    // return <div>{console.log(props.location.state )}</div>

}
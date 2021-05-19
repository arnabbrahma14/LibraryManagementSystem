import React, {useState} from 'react'
import { Button, ButtonGroup, Col, Container, Row, Table } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import NavbarComp from '../Components/NavbarComp'
import '../App.css'
const axios = require('axios')
export default function Admin() {
    var [users, setUsers] = useState([])
    const font =  {fontFamily: "'Quicksand', sans-serif"};
    var t = 0
    var center = {display: 'grid', alignContents: 'center', justifyContents: 'center'}
    var history = useHistory()
    var displayUsers = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/users'
        })
        .catch(err => console.log(err))
        .then( response => setUsers(response.data))
    }

    var getUsersBooks = (user) => {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/displayBooksAdmin',
          data: {Email: user}
        })
        .catch(err => console.log(err))
        .then((response) => {
          console.log(response)
          
          history.push("/usersBooksAdmin", {Email: user, Response: response.data})
        })
    
      }
      var deleteUser = (user) => {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/deleteUser',
          data: {Email: user}
        })
        .catch(err => console.log(err))
        .then((response) => {
          console.log(response)
          // setUsersBooks(response.data)
        //   history.push("/usersBookslist", response.data)
        window.location.reload()
        })
    
      }
    return <div>
    <NavbarComp />
    <div style = {center}className = "mt-1">
    <Button   style = {center} onClick = {displayUsers} variant = "outline-secondary"><h3  style = {font} >Show Current Users </h3></Button>
    </div>
    <Container>
        <Row className = "mt-3">
            <Col xs = {6} md = {{span: 3, offset: 5}}>
            </Col>
        </Row>
        <Row className = "mt-3">
            <Col xs = {6} md = {{span: 7, offset: 3}}>
                
                        
            <Table striped bordered variant="dark" >{
                users.map( (ele) => 
                (
                        <tbody>
                            <tr key = {ele.Email}>
                                <td style = {font} >{++t % (users.length+1)}</td>
                                <td style = {font} >{ele.Name}</td>
                                <td style = {font} >{ele.Email}</td>
                                <td style = {font} ><Button variant = "outline-info" onClick = {() => {getUsersBooks(ele.Email)}}>Books</Button></td>
                                <td style = {font} ><Button variant = "outline-danger" onClick = {() => {deleteUser(ele.Email)}}>Delete</Button></td>
                            </tr>
                        </tbody>
                    
                ))
            }</Table>
                        
                   
            </Col>
        </Row>
        
        <Row className = "mt-3">
            <Col xs = {6} md = {{span: 6, offset: 3}}>
                <h2 style = {font} >Add New Books / Dept / Delete Books </h2>
            </Col>
        </Row>
        <Row className = "mt-3">
            <ButtonGroup>
            <Col xs = {4} style = {center}>
                        <Button variant = "success" style = {font} >Books</Button>
            </Col>
            <Col xs = {4} style = {center}>
                        <Button variant = "success" style = {font} >Dept</Button>
            </Col>
            <Col xs = {4} style = {center}>
                        <Button variant = "success" style = {font} >Delete Books</Button>
            </Col>
            </ButtonGroup>
        </Row>
    </Container>
    </div>
}
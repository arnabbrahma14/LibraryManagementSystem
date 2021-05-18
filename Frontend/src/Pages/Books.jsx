import React, {useState, useEffect} from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import DeptButton from '../Components/DeptButton'
// import CardComp from '../Components/CardComp'
import NavbarComp from '../Components/NavbarComp'
// import {Container, Row, Col} from 'react-bootstrap'

const axios = require('axios')

// const buttonStyle = {
//   padding: "80px 90px 80px 90px",
//   fontFamily: "'Quicksand', sans-serif",
//   background: "transparent",
//   border: "transparent",
//   borderRadius: "10px",
//   boxShadow: "0px 0px 20px 2px #FFB6C1",
//   fontSize: "30px",
// }

function Books(props) {
    var [books, setbooks] = useState([])
    // var [usersBooks, setUsersBooks] = useState([])
    var history = useHistory()
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

    // var display = (Item)  => {
    //   console.log(Item)
    //   return <>
    //   <Row>
      
    //     {Item.map(ele => {
    //         return  <Col xs = {12} md = {{span: 3}}><DeptButton Name = {ele.Name} /> 
    //     </Col>


    //     })}
    //     </Row>
    //   </>
    // }

    // var getDept = ()  => {
    //   axios({
    //     method: 'get',
    //     url: 'http://localhost:5000/api/depts',
    //   })
    //   .catch(err => console.log(err))
    //   .then( response => {
    //     console.log(response.data)
    //     // for(const ele of response.data)  {console.log(ele.Name)}
    //     //  return <DeptButton Name = {ele.Name} />}
    //     setDepts(response.data)
    //   })
    // }


    var getBooks = (dept) => {
      axios({
        method : 'post',
        url : 'http://localhost:5000/api/books',
        data : {Email: user, Dept: dept}
      })
      .then( function(response) {
          console.log(response)
          setbooks(response.data);
          console.log(books)
          history.push("/booksList", response.data)
         
      })
      .catch(function (error) {
          console.log(error);
        })
  }
//   var display = (item) => {
//     return <div>{item.map(ele => (
            
            
//             <li key = {ele.Isbn} style = {{listStyle : 'none'}}> 
//             <Container>
//               <Row>
//                 <Col md ={6} className = "mb-5">
//                   <CardComp Name = {ele.Name} Author = {ele.Author} Total = {ele.Total} Fun = {() => deleteBook(ele.Isbn)} message = {'Delete'}/>
//                 </Col>
//               </Row>
//             </Container>
//             </li>
//           ))}

//         </div>
// }
  /*var addBooks = (ele) => {
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
  }*/

  // var deleteBook = (isbn) => {
  //   axios({
  //     method : 'post',
  //     url: 'http://localhost:5000/api/deletebook',
  //     data: {Email: user, Isbn: isbn}
  //   })
  //   .catch(err => console.log(err))
  //   .then(response => {
  //     console.log(response)
  //     window.location.reload()
  //     history.push("/list")
  //   })
  // }
  // var getUsersBooks = () => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:5000/api/displayBooks',
  //     data: {Email: user}
  //   })
  //   .catch(err => console.log(err))
  //   .then((response) => {
  //     console.log(response)
  //     // setUsersBooks(response.data)
  //     history.push("/usersBookslist", response.data)
  //   })

  // }
  
    
    return <>
    <NavbarComp />
    {/* <button onClick = {getDept}> Dept</button> */}
    
    <Container className = "mt-5">
      {/* {console.log(props)} */}
      <Row>
      
        {props.location.state.map(ele => {
            return  <Col xs = {12} md = {{span: 3}} className = "mt-5"><DeptButton Name = {ele.Name} fun = {() => {getBooks(ele.Name)}}/> 
        </Col>


        })}
        </Row>
        </Container>


      {/* <Row>
        <Col xs = {12} md = {{span: 3}}> */}
          {/* <button onClick = {getBooks} style = {buttonStyle}>CSE</button> */}
          {/* <div>{arr}</div> */}
          {/* {display(depts)} */}
        {/* </Col>
      </Row> */}
    {/* <div>{display(books)}</div> */}
    {/* <button onClick = {getUsersBooks}>Users Books</button> */}
    {/* <div>{display(usersBooks)}</div> */}
    </>
}

export default Books











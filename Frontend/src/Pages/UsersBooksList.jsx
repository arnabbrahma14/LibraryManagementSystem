import React from 'react' 
import {Container, Row, Col} from 'react-bootstrap'
import NavbarComp from '../Components/NavbarComp'
// import {useHistory} from 'react-router-dom'
import CardCompUser from '../Components/CardCompUser'
// const axios = require('axios')

export default function UsersBooksList(props) {

    // var [user, setUser] = useState('')
    // let history = useHistory()
    // // var [books, setbooks] = useState([])

    // //Getting the Current User that has logged in
    // useEffect(() => {
    //   const loggedInUser = localStorage.getItem('Email');
    //   if (loggedInUser) {
    //     const foundUser = loggedInUser;
    //     setUser(foundUser);
    //   }
    // }, []);
    
    // var deleteBook = (isbn) => {
    //     axios({
    //       method : 'post',
    //       url: 'http://localhost:5000/api/deletebook',
    //       data: {Email: user, Isbn: isbn}
    //     })
    //     .catch(err => console.log(err))
    //     .then(response => {
    //       alert('Book Removed')
    //       console.log(response)

    //       axios({
    //         method: 'post',
    //         url: 'http://localhost:5000/api/increaseCount',
    //         data: {Isbn: isbn}
    //       })
    //       .catch(err => console.log(err))
    //       .then( (response) => {
    //       console.log(response.data)
    //       })

    //     //   window.location.reload()
    //       history.push("/")
    //     })
    //   }

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
                  <CardCompUser Name = {ele.Name} Author = {ele.Author} Sdate = {ele.Sdate} Edate = {ele.Edate}/>
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
import React from 'react' 
import {Container, Row, Col} from 'react-bootstrap'
import NavbarComp from '../Components/NavbarComp'
import {useHistory} from 'react-router-dom'
import CardCompAdmin from '../Components/CardCompAdmin'
const axios = require('axios')

export default function UsersBooksAdmin(props) {

    let history = useHistory()
    // var [user, setUser] = useState('')
    // var [books, setbooks] = useState([])

    //Getting the Current User that has logged in
    // useEffect(() => {
    //   const loggedInUser = localStorage.getItem('Email');
    //   if (loggedInUser) {
    //     const foundUser = loggedInUser;
    //     setUser(foundUser);
    //   }
    // }, []);
    var strToDate = (ele) => {

      let i = 0
      var d = '', m = '', y = ''
      while(ele[i] !== '/')
        d += ele[i++]
      i++
      while(ele[i] !== '/')
        m += ele[i++]

      y = ele.substring(i+1)

      var date = new Date(m+"/"+d+"/"+y)
      return date

    }

    var fine = (date2) => {
      // let i = 0
      // var d = '', m = '', y = ''
      // while(date2[i] !== '/')
      //   d += date2[i++]
      // i++
      // while(date2[i] !== '/')
      //   m += date2[i++]

      // y = date2.substring(i+1)
      

      

      console.log(date2)
      var Tdate = new Date()
      // console.log(`${d} ${m} ${y}`)
      var Edate = strToDate(date2)
      console.log(Tdate)
      console.log(Edate)
      console.log(Edate < Tdate)
      var days = Math.ceil(Math.abs(Edate-Tdate) / (1000 * 60 * 60 * 24))
      // console.log(Math.floor(Edate-date))
      return  Edate <= Tdate ?  (days-1) : 0
    }
    
    var deleteBook = (email, isbn) => {
        axios({
          method : 'post',
          url: 'http://localhost:5000/api/deletebook',
          data: {Email: email, Isbn: isbn}
        })
        .catch(err => console.log(err))
        .then(response => {
          alert('Book Removed')
          console.log(response)

          axios({
            method: 'post',
            url: 'http://localhost:5000/api/increaseCount',
            data: {Isbn: isbn}
          })
          .catch(err => console.log(err))
          .then( (response) => {
          console.log(response.data)
          })

        //   window.location.reload()
          history.push("/")
        })
      }

      var res = (email, isbn) => {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/getEdate',
          data: {Email: email, Isbn: isbn}
        })
        .catch(err => console.log(err))
        .then( response => {
          console.log(response.data[0].Edate)
          console.log(`${email} ${isbn}`)
          var d = response.data[0].Edate
          console.log(d);

          // var edate = new Date(20+d.substring(6)+"-"+d.substring(3,5)+"-"+d.substring(0,2))
          var edate = strToDate(d)
          console.log(edate)
          edate.setDate(edate.getDate() + 14);
          console.log(edate)
          edate = String(edate.getDate() + "/" + (edate.getMonth()%12+1) + "/" + (edate.getFullYear())) 
          console.log(edate)

          axios({
            method: 'post',
            url: 'http://localhost:5000/api/reissue',
            data: {Edate: edate, Email: email, Isbn: isbn}

          }).catch(err => console.log(err))
          .then( response => {
            console.log(response)
            history.push('/admin')
            // window.loaction.reload()
          })

        })


      }

    //   var show = () => {
        console.log(props)
        if(props.location.state.Response === undefined || props.location.state.Response.length <= 0) {
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
        <div>{props.location.state.Response.map(ele => (
                
            <li key = {ele.Isbn} style = {{listStyle : 'none'}}> 
            <Container>
              <Row>
                <Col md ={6} className = "m-3">
                  <CardCompAdmin Name = {ele.Name} Author = {ele.Author} Total = {ele.Total} Sdate = {ele.Sdate} Edate = {ele.Edate}
                  del = {() => deleteBook(props.location.state.Email, ele.Isbn)} reissue = {() => {res(props.location.state.Email, ele.Isbn)}} Fine = {fine(ele.Edate)}/>
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
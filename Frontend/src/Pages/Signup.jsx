import './Signup.css'
import {useState} from 'react'
import fb from '../img/fb.png'
import tw from '../img/tw.png'
import gp from '../img/gp.png'
import {useHistory} from 'react-router-dom'
import NavbarComp from '../Components/NavbarComp'
import '../App.css'
const axios = require('axios');
const font =  "'Quicksand', sans-serif";



function Signup(){
    let history = useHistory()
    const [flag, setFlag] = useState(false)


    var register = () => {
        var x= document.getElementById("login");
        var y= document.getElementById("register");
        var z= document.getElementById("btn");
        x.style.left ="-400px";
        y.style.left ="50px";
        z.style.left ="110px";
    }
    var login = () => {
        var x= document.getElementById("login");
        var y= document.getElementById("register");
        var z= document.getElementById("btn");
        x.style.left ="50px";
        y.style.left ="450px";
        z.style.left ="0px";
    }

    // Register data
    const [RName, setRName] = useState("")
    const [REmail, setREmail] = useState("")
    const [RPassword, setRPassword] = useState("")

    var getRName = (e) => {setRName(e.target.value)}
    var getREmail = (e) => {setREmail(e.target.value)}
    var getRPassword = (e) => {setRPassword(e.target.value)}

    
        
    
    var addUser = () => {
       

        axios({
            method : 'post',
            url: 'http://localhost:5000/api/registered',
            data: {Email: REmail}
        })
        .catch(err =>  console.log(err))
        .then( response => {setFlag(response.data) 
            console.log(response.data)
        console.log(flag)
    
        if(response.data) alert('User Already Exist')

        else 
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/signup', 
                data: {Name: RName, Email: REmail, Password: RPassword}})
                .catch( err => console.log(err) )
                .then( response => {
                    alert(response.data)
                    if(response.data === 'User Registered') {
                        history.push("/contact")
                        localStorage.setItem('Email', REmail)
                    }

                    else history.push("/signup")
                    
                })
            })
            
        }
        
    

    // Login data
    const [LEmail, setLEmail] = useState("")
    const [LPass, setLPass] = useState("")

    var getLEmail = (e) => {setLEmail(e.target.value)}
    var getLPass = (e) => {setLPass(e.target.value)}

    var getUser = () => {
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/signin',
            data: {Email: LEmail, Password: LPass}
        }).catch( err => console.log(err))
        .then( response => {
        alert(response.data)
        if(response.data === 'Email Input field cannot be empty' || response.data === 'Password Input field cannot be empty' || response.data === 'User Doesnot exist')
        history.push("/signup")
        else {
            history.push("/about")
            localStorage.setItem('Email', LEmail)
        }
        console.log(response.config.data)
        })
    }
    
    return (
        <>
        <NavbarComp />
        <div className="box">
            <div className="form-box">
                <div className="button-box" style = {{fontFamily: font}}>
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" onClick={login}>LogIn</button>
                    <button type="button" className="toggle-btn" onClick={register}>Register</button>
                </div>
                <div className="social-icons">

                    <img src= {fb} alt="fb"/>
                    <img src= {tw} alt="tw"/>
                    <img src= {gp} alt="gp"/>
                </div>
                <div id="login" className="inputGroup" style = {{fontFamily: font}}>

                    <input type="text" className="input-field" placeholder="Enter userId" required onChange = {getLEmail}/>
                    <input type="password" className="input-field" placeholder="Enter Password" required onChange = {getLPass}/>
                    <button className="submit-btn" onClick = {getUser}>Login</button>
                </div>
                <div id="register" className="inputGroup" style = {{fontFamily: font}} >

                    <input type="text" className="input-field" placeholder="Enter Name" required onChange = {getRName} />
                    <input type="email" className="input-field" placeholder="Enter email" required onChange = {getREmail} />
                    <input type="password" className="input-field" placeholder="Enter Password" required onChange = {getRPassword}/>
                    <button className="submit-btn" onClick = {addUser}>Register</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup

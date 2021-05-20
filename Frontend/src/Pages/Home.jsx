import React from 'react'
import './Home.css'
import '../App.css'
import NavbarComp from '../Components/NavbarComp';
import Particles from "react-particles-js";
import author from "../img/about.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FooterComp from '../Components/FooterComp';

export default function Home() {
    const font =  "'Quicksand', sans-serif";
    
    return (
        <>
            <Particles
                className="particles-canvas"
                params = {{ particles: { number: { value:30, density:{ enable:true, value_area: 900}},
                shape: {type: "circle", stroke: {width:6, color:"#f9ab00"}}}}}/>

            <NavbarComp />
            <div className="header-wrapper">
                <div className="main-info">
                    <h1 style = {{fontFamily: font, fontSize: "60px", wordSpacing: "10px"}}>Welome To Library Management System</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/> 
                    </div> 
                    </div>
                    <div className="col-lg-6 col-xm-12" >
                        <h1 className="about-heading" style = {{fontFamily: font , textDecoration: 'none'}}>About Us</h1>
                        
                            <h1 style = {{fontFamily: font}}>Let’s discuss on how to improve your skills</h1>
                            <p style = {{fontFamily: font}}>
                            The Library Management System is an application for assisting a librarian in managing a book library in a university or in a public library.</p>
                        
                    
                            <h1 style = {{fontFamily: font}}>We can help you to grow your skill sets</h1>
                            <p style = {{fontFamily: font}}>The system would provide a basic set of features like add or update members, add or update books and other functions based on client’s statements or needs.</p>
                        
                    </div>
                </div>
            </div>

            
            <FooterComp />

        </>
    )
}
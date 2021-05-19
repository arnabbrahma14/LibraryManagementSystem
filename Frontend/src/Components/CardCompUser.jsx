import React from 'react'
import {Card, } from 'react-bootstrap'
import '../App.css'
var font = {fontFamily : "'Quicksand', sans-serif"}
export default function CardCompUser(props) {
    return <>
          <Card>
              <Card.Header style = {font}>Book: {props.Name}</Card.Header>
              <Card.Body>
                  <Card.Title style = {font}>Author: {props.Author}</Card.Title>
              <Card.Text style = {font}>
                  {`Last Date for Returning: ${props.Edate}`}
              </Card.Text>
              </Card.Body>
         </Card>  
    </>
}
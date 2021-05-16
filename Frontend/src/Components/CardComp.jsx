import React from 'react'
import {Card, Button, } from 'react-bootstrap'
import '../App.css'
var font = {fontFamily : "'Quicksand', sans-serif"}
export default function CardComp(props) {
    return <>
          <Card>
              <Card.Header style = {font}>{props.Name}</Card.Header>
              <Card.Body>
                  <Card.Title style = {font}>{props.Author}</Card.Title>
              <Card.Text style = {font}>
                  {props.Total}
              </Card.Text>
                  <Button onClick = {props.Fun}  style = {font}>{props.message}</Button>
              </Card.Body>
         </Card>  
    </>
}
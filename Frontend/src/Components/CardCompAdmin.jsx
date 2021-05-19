import React from 'react'
import {Card, Button, } from 'react-bootstrap'
import '../App.css'
var font = {fontFamily : "'Quicksand', sans-serif"}
export default function CardCompAdmin(props) {
    return <>
          <Card>
              <Card.Header style = {font}>Book Name: {props.Name}</Card.Header>
              <Card.Body>
                  <Card.Title style = {font}>Author: {props.Author}</Card.Title>
                  <Card.Text style = {font}>No. of Books Left: {props.Total}</Card.Text>
                  <Card.Text style = {font}>Book Taken on: {props.Sdate}</Card.Text>
                  <Card.Text style = {font}>Book to be Returned: {props.Edate}</Card.Text>
                  <Card.Text style = {font}>Late Fees: {props.Fine}</Card.Text>
                  <Button onClick = {props.del} style = {font}>Return </Button>&nbsp;
                  <Button onClick = {props.reissue} style = {font}>Re-issue</Button>
              </Card.Body>
         </Card>  
    </>
}
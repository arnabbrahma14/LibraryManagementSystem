import React from 'react'

const buttonStyle = {
    padding: "80px 90px 80px 90px",
    fontFamily: "'Quicksand', sans-serif",
    background: "transparent",
    border: "transparent",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 2px #FFB6C1",
    fontSize: "30px",
  }
  

export default function DeptButton(props) {
    return <button style = {buttonStyle} onClick = {props.fun}>{props.Name}</button>

}
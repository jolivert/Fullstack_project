import React from 'react'
import '../assets/style/header.css'


const Header = (props) => {

  const title = props.title;
  const user = props.user;
  const subtitle = `Hi ${user} `

  return (
    <div id='header'>
     <h1>{title}</h1>
     <h2>{subtitle}</h2>
    </div>
  )
}

export default Header

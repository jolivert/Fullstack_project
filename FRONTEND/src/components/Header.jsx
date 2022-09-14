import React from 'react'
import '../assets/style/header.css'


const Header = (props) => {

  const title = props.title;
  const user = props.user;
  const subtitle = `Hi ${user}`
  console.log(user);

  return (
    <div id='header'>
      <div id='lateral'>

      </div>
      <div className='title'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div id='lateral'>
        <button> <img class="icon" src="https://img.icons8.com/windows/32/41527E/logout-rounded-down.png"/> </button>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import '../assets/style/header.css'

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload(true);
};

const Header = (props) => {

  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div id='header'>
      <div id='lateral'>

      </div>
      <div className='title'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div id='lateral'>
        <button onClick={logout}> <img class="icon" src="https://img.icons8.com/windows/32/41527E/logout-rounded-down.png"/> </button>
      </div>
    </div>
  )
}

export default Header

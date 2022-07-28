import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="container-initial">
      <div className="box-signin">
        <h1>Login</h1>
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />

        <button>Login</button>
      </div>
      <Link to="/">
      <p className="registerNow">
        if you havn’t Registed yet ?<span>Register Now</span>{' '}
      </p>
      </Link>
    </div>
  )
}
export default Footer

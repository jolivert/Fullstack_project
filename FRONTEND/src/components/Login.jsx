import React from 'react'
import { Link } from "react-router-dom";
import '../assets/style/login.css'



const Login = () => {
  return (
    <div className="container-initial">
      <div className="box-signin">
        <h1>Login</h1>
        <div>
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        </div>
      
        <button>Login</button>
      </div>
      <Link to="/signUp">
      <p className="registerNow">
        if you havn’t Registed yet ?<span> Register Now</span>{' '}
      </p>
      </Link>
    </div>
  )
}
export default Login

import React from 'react'
import { Link } from "react-router-dom";
import '../assets/style/login.css'
import Layout from '../pages/Layout';
import SignUp from './SignUp';



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
      
        <Link to="/projects"> <button>Login</button> </Link>
        {/* <button> <Link to="/signUp">Login</Link></button> */}
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

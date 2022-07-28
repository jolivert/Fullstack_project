import React from 'react'
import '../assets/style/login.css'
import '../assets/style/singUp.css'
import Login from '../components/Login.jsx'
import SingUp from '../components/SignUp.jsx'


const Initial = () => {
  return (
    <div>
      <Login />
      <SingUp />
    </div>
  )
}
export default Initial

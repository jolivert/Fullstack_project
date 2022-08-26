import React from 'react'
import '../assets/style/login.css'
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp'
import PlanningPocker from './PlanningPocker'
import { Link } from 'react-router-dom';

const Initial = () => {
  return (
    <div>
       <h1>pagina inicial para probar las paginas: </h1>
      <br />
      <Link to="PlanningPocker">-  ir a PlanningPocker</Link>
    <br />
      <Link to="Tasks">-  ir a tasks</Link>
    <br />
    <Link to="TodoTasks">-  ir a to do tasks</Link>
    </div>
   
  )
}
export default Initial

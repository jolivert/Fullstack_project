import React from 'react'
import '../assets/style/login.css'
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp'
import PlanningPocker from './PlanningPocker'
import { Link, useNavigate } from 'react-router-dom';
import Projects from "./Projects.jsx";

const Initial = () => {

  const navigate = useNavigate();
  setTimeout(5000);
  //navigate("projects",{ replace: true });

  return (
    <>    
        {/*<div>
       <h1>pagina inicial para probar las paginas: </h1>
      <br />
      <Link to="PlanningPocker">-  ir a PlanningPocker</Link>
    <br />
    <Link to="AllVotesPlanningPocker">-  ir a votos finales PlanningPocker</Link>
    <br />
      <Link to="Tasks">-  ir a tasks</Link>
    <br />
      <Link to="TodoTasks">-  ir a to do tasks</Link>
    <br />
      <Link to="projects">-  ir a projects</Link>
  </div>*/}
    </>
  )
}
export default Initial

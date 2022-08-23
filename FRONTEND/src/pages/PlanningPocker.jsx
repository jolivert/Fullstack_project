import React from 'react'
import { Link } from 'react-router-dom';

const PlanningPocker = () => {
  
  return (
    <div>
    <h1>soy una pagina prueba de planning pocker</h1>

    <Link to="Tasks"> ir a tasks</Link>
    <br />
    <Link to="TodoTasks"> ir a to do tasks</Link>
    </div>
  )
}
export default PlanningPocker;
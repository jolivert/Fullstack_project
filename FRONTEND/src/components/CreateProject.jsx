import React from 'react'
import Projects from '../pages/Projects'
import * as api from "./api";
// import '../assets/style/header.css'


const CreateProject = () => {
  
  const [Title, setTitle] = React.useState('');
  const [Po, setPo] = React.useState('');
  const [Description,setDescription] = React.useState('');

  // // const Data = [{Po, Title, Description}]

  const [Data,setData] = React.useState([]);
    

  const SaveProjects = (e) => {
     e.preventDefault()

     setData([...Data,{title:Title, po:Po, description:Description}])
     e.target.reset()
     console.log(Data);
  }

  return (
    <div>
     <h3>New project</h3>
     {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
     <form class="new-project" onSubmit={SaveProjects}>
        <input type="text" id='title' placeholder='Project name' onChange={(e) => setTitle(e.target.value)}/> 
        <p>Description</p>
        <textarea name="description" placeholder='Enter project description' onChange={(e) => setDescription(e.target.value)}></textarea>
        <p>Add members</p>
        <input type="text" placeholder='Member Name' onChange={(e) => setPo(e.target.value)}/>
        <button className='btn-projects' type='submit'>+ add</button>
     </form>
     <button>prueba</button>
    </div>
  )
}
export default CreateProject
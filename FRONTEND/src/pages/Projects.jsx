import React, { useState, useEffect }  from "react";
import Header from '../components/Header.jsx'
import CreateProject from '../components/CreateProject.jsx'
import '../assets/style/projects.css'

const Projects = () => {
 
  const ReadProjects = () => {
    const info = [
      {
        title: "Project 1",
        description: "Fullstack project based on scrum and planning poket methodologies",
        poname: "Jose"
      },
      {
        title: "Project 2",
        description: "Fullstack project based on scrum and planning poket methodologies",
        poname: "Davina"
      },
      {
        title: "Project 3",
        description: "Fullstack project based on scrum and planning poket methodologies",
        poname: "Gerard"
      }
    ]
    return info;
  }

  const [data, setData] = useState(ReadProjects);


  return (
    <div>
      <Header/>
      <div class="projectpage">
        <div class="create">
          <CreateProject/>+
        </div>
        <div class="list">
          <ul>
            {data.map(item=> (
              <div id="listitem">
                <div>
                  <h3>{item.title}</h3>
                  <p id="po" >{item.poname} </p>
                </div>
                <p>{item.description} </p>
                <img class="icon" src="https://img.icons8.com/FE4B2B/delete"/>    
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Projects
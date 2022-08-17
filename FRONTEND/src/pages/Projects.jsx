import React, { useState, useEffect }  from "react";
import Header from '../components/Header.jsx'
import CreateProject from '../components/CreateProject.jsx'
import '../assets/style/projects.css'

const Projects = () => {
 
  const ReadProjects = () => {
    const info = [
      {
        title: "Project 1",
        description: "Fullstack project based on scrum and planning poket methodologies ",
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
      },
      {
        title: "Project 4",
        description: "Planning Poker es una técnica para calcular una estimación basada en el consenso, en su mayoría utilizada para estimar el esfuerzo o el tamaño relativo ",
        poname: "María"
      },
      {
        title: "Project 5",
        description: "Planning Poker es una técnica para calcular una estimación basada en el consenso, en su mayoría utilizada para estimar el esfuerzo o el tamaño relativo ",
        poname: "María"
      },
      {
        title: "Project 6",
        description: "Planning Poker es una técnica para calcular una estimación basada en el consenso, en su mayoría utilizada para estimar el esfuerzo o el tamaño relativo ",
        poname: "Marina"
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
          <CreateProject/>
        </div>
        <div class="list">
          <ul>
            {data.map(item=> (
              <div id="listitem">
                <div>
                  <h3>{item.title}</h3>
                  <p id="po" >{item.poname} </p>
                </div>
                <div>
                  <p>{item.description} </p>
                </div>
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
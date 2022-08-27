import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CreateProject from "../components/CreateProject.jsx";
import "../assets/style/projects.css";

const Projects = () => {
  // const SaveProjects = () => {
  //   const info = []
  //     // {
  //     //   title: "Project 1",
  //     //   description: "Fullstack project based on scrum and planning poket methodologies ",
  //     //   poname: "Jose"
  //     // },
  //   return info;
  // }

  // useEffect( ()=> {
  // },[<CreateProject/>]);

  const [Title, setTitle] = React.useState("ñe");
  const [Po, setPo] = React.useState("ñe");
  const [Description, setDescription] = React.useState("ñe");

  // const Data = [{Po, Title, Description}]

  const [Data, setData] = React.useState([]);

  let productOwnercomponent = null;
  if (isProductOwner) {
    productOwnercomponent = (
      <div class="create">
        <CreateProject data={Data} onNewProject={(proj)=> setData(Data=>[...Data,proj])}/>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div class="projectpage">
        {productOwnercomponent}

        <div class="list">
          <ul>
            {Data.map((item) => (
              <div id="listitem">
                <div>
                  <h3>{item.Title}</h3>
                  <p id="po">{item.Po} </p>
                </div>
                <div>
                  <p>{item.Description} </p>
                </div>
                <img class="icon" src="https://img.icons8.com/FE4B2B/delete" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;

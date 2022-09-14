import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CreateProject from "../components/CreateProject.jsx";
import "../assets/style/projects.css";
import * as api from "../components/api";

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

  const [Title, setTitle] = React.useState("ñe");
  const [Po, setPo] = React.useState("ñe");
  const [Description, setDescription] = React.useState("ñe");
  const [Data, setData] = React.useState([]);
  const [showMessage, setViewMessage] = React.useState(false);
  const [contentMessage, setContentMessage] = React.useState("");
  const [proba, setProba] = React.useState([]);

  const utype= JSON.parse(localStorage.getItem("token"));
  const isProductOwner= utype.userType==="PO"??true;
  const user_name= utype.username;
  console.log(user_name);
  const myId= "631d8ecb47f6a7f7432adcb8"
  // console.log(myId);

  const page = "My Projects"

  //obtener proyectos del po
  const getPoProjects = async () => {
    const { success, results} = await api.getProjectByPo(myId);

    if (!success) {
      setViewMessage(true);
      setContentMessage("Error retrieving project tasks");
    } else {
      // setProba(results);
      setData(Data=>[...Data,...results])
      
      // setTasksCount(results.length)
    }
  };

  //obtener proyectos del po
  const getMemberProjects = async () => {
    const { success, results} = await api.getProjectByMember(myId);

    if (!success) {
      setViewMessage(true);
      setContentMessage("Error retrieving project tasks");
    } else {
      // setProba(results);
      console.log(results);
      setData(Data=>[...Data,...results])
      
      // setTasksCount(results.length)
    }
  };

  
  console.log(Data);

  useEffect( ()=> {
    getPoProjects();
    getMemberProjects();
    console.log(Data);
  },[]);

  // console.log(Data)

  //TODO: create useffect to gather projects from the bbdd once the page is loaded. Set into Data
  //TODO: when one element is destroyed, execute useffect and set into Data, but see if need mapping of the data coming from the bbdd to match
  // the Data.map of line 47
  //TODO: other way to do the destroy is to then filter the remaining Data array elements :

  const onDestroyProject = (indexProj) => {
    var filteredProjects = Data.filter(function(value, index, arr){ 
      return index != indexProj;
    });
    setData(filteredProjects);
  };

  

  let productOwnercomponent = null;

  if (isProductOwner) {
    productOwnercomponent = (
      <div class="create">
        <CreateProject userId={myId} onNewProject={(proj)=> setData(Data=>[...Data,proj])}/>
      </div>
    );
  }

  return (
    <div>
      <Header title={page} user={user_name} />
      <div class="projectpage">
        {productOwnercomponent}
        <div class="list">
          <ul>
            {Data.map((item) => (
              <div id="listitem" key={item.projId}>{/*TODO: once the proj is created in CreateProject, send back the id from the bbdd to use here as key*/}
                <div>
                  <h3>{item.project_name}</h3>
                  <p id="po">{item.po}</p>
                </div>
                <div id="description">
                  <p>{item.description} </p>
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

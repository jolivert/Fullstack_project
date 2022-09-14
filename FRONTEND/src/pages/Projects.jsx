import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CreateProject from "../components/CreateProject.jsx";
import "../assets/style/projects.css";
import * as api from "../components/api";
import { Link } from 'react-router-dom';

const Projects = () => {

  const [Title, setTitle] = React.useState("ñe");
  const [Po, setPo] = React.useState("ñe");
  const [Description, setDescription] = React.useState("ñe");
  const [Data, setData] = React.useState([]);
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");

  const utype= JSON.parse(localStorage.getItem("token"));
  const isProductOwner= utype.userType==="PO"??true;
  
  const ContentMessage = () => <p className="message_feedback">{contentMessage}</p>;

  const destroyProject = async (info) => {
    const { success, error } = await api.destroyProject(info.projId);

    if(success){
      var filteredProjects = Data.filter(function(value, index, arr){ 
        return index != info.index;
      });
      setData(filteredProjects);
      setViewMessage(false);
    }else{
      setViewMessage(true);
      setContentMessage(`${error}`);
    }
  };

  //TODO: create useffect to gather projects from the bbdd once the page is loaded. Set into Data
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
          {showMessage ? <ContentMessage /> : null}{" "}
            {Data.map((item, index) => (
              
                <div id="listitem" key={item.projId}>
                  <Link to="/TodoTasks" state={{projId: item.projId, title: item.title}}>
                    <div>
                      <h3> {item.title} </h3>
                      <p id="po">{item.po} </p>
                    </div>
                  </Link>
                  <div id="description">
                    <p> {item.description} </p>
                  </div>
                  <button onClick={() => destroyProject({projId: item.projId, index: index})}>
                    <div className="imgPaperBin" >
                      <img className="icon" src="https://img.icons8.com/FE4B2B/delete" ></img>
                    </div>
                  </button>
                </div>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;

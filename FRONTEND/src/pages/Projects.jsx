import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CreateProject from "../components/CreateProject.jsx";
import "../assets/style/projects.css";
import * as api from "../components/api";
import { Link } from "react-router-dom";

const Projects = () => {
  const [Title, setTitle] = React.useState("ñe");
  const [Po, setPo] = React.useState("ñe");
  const [Description, setDescription] = React.useState("ñe");
  const [Data, setData] = React.useState([]);
  const [showMessage, setViewMessage] = React.useState(false);
  const [contentMessage, setContentMessage] = React.useState("");
  const [proba, setProba] = React.useState([]);

  const utype = JSON.parse(localStorage.getItem("token"));
  const isProductOwner = utype.userType === "PO" ?? true;
  const user_name = utype.username;
  const id = utype.userid;

  console.log(id);
  console.log(id.replace(/['"]+/g, ""));
  const myId = id.replace(/['"]+/g, "");

  const page = "My Projects";
  const subtitle = `Hi ${user_name}`;

  const ContentMessage = () => (
    <p className="message_feedback">{contentMessage}</p>
  );

  //obtener proyectos del po
  const getPoProjects = async () => {
    const { success, results } = await api.getProjectByPo(myId);

    if (!success) {
      setViewMessage(true);
      setContentMessage("Error retrieving project tasks");
    } else {
      setData((Data) => [...Data, ...results]);
    }
  };

  //obtener proyectos del po
  const getMemberProjects = async () => {
    const { success, results } = await api.getProjectByMember(myId);

    if (!success) {
      setViewMessage(true);
      setContentMessage("Error retrieving project tasks");
    } else {
      console.log(results);
      setData((Data) => [...Data, ...results]);
    }
  };

  console.log(Data);

  useEffect(() => {
    if (isProductOwner) {
      getPoProjects();
    } else {
      getMemberProjects();
    }
    console.log(Data);
  }, []);

  // console.log(Data)

  //TODO: create useffect to gather projects from the bbdd once the page is loaded. Set into Data
  //TODO: when one element is destroyed, execute useffect and set into Data, but see if need mapping of the data coming from the bbdd to match
  // the Data.map of line 47
  //TODO: other way to do the destroy is to then filter the remaining Data array elements :

  const destroyProject = async (info) => {
    const { success, error } = await api.destroyProject(info.projId);

    if (success) {
      var filteredProjects = Data.filter(function (value, index, arr) {
        return index != info.index;
      });
      setData(filteredProjects);
      setViewMessage(false);
    } else {
      setViewMessage(true);
      setContentMessage(`${error}`);
    }
  };

  let productOwnercomponent = null;

  if (isProductOwner) {
    productOwnercomponent = (
      <div class="create">
        <CreateProject
          userId={myId}
          onNewProject={(proj) => setData((Data) => [...Data, proj])}
        />
      </div>
    );
  }

  console.log(Data);
  return (
    <div>
      <Header title={page} subtitle={subtitle} />
      <div class="projectpage">
        {productOwnercomponent}
        <div class="list">
          <ul>
            {showMessage ? <ContentMessage /> : null}{" "}
            {Data.map((item, index) => (
              <div id="listitem" key={item.projId}>
                <Link
                  to="/TodoTasks"
                  state={{ projId: item._id, title: item.project_name }}
                >
                  <div>
                    <h3> {item.project_name} </h3>
                    <p id="po">{item.po} </p>
                  </div>
                </Link>
                <div id="description">
                  <p> {item.description} </p>
                </div>
                <button
                  onClick={() =>
                    destroyProject({ projId: item._id, index: index })
                  }
                >
                  <div className="basura-project">
                    <img
                      className="icon"
                      src="https://img.icons8.com/FE4B2B/delete"
                    ></img>
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

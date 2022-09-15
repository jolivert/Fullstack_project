import React, { useState, useEffect } from "react";
import Projects from "../pages/Projects";
import * as api from "./api";

const CreateProject = (props) => {
  const [project_name, setTitle] = useState("");
  const [po, setPo] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState("");
  const [team, setTeam] = useState([]);
  const [teamIds, setTeamIds] = useState([]);
  const [proj, setProj] = useState({});
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");
  //TODO: get user id from the cookies
  // const [userId, setUserId] = useState("");
  
  const myId = props.userId;
  
  const ContentMessage = () => (
    <p className="message_feedback">{contentMessage}</p>
  );

  const SaveProject = async (e) => {
    e.preventDefault();
    if (project_name == "" || description == "" || team.length == 0) {
      setViewMessage(true);
      setContentMessage("No field can be empty for a new project");
    } else {
      const { success, results, error } = await api.createProject({
        project_name,
        description,
        teamIds,
        myId,
      });
      if (success) {
        setViewMessage(false);
        props.onNewProject({title: proj.project_name, description: proj.description, projId: results._id});
        e.target.reset();
        setTeam([]);
        setTeamIds([]);
        setProj((proj) =>proj = {});
        setTitle("");
        setDescription("");
      } else {
        setViewMessage(true);
        setContentMessage(`There was a server error: ${error}`);
      }
    }
  };

  const addData = () =>{
    setProj({
      project_name,
      description,
    });
  };

  const addMember = async () => {
    const { success, userId, error } = await api.checkUserExists(member);
    if (success && userId != myId) {
      setViewMessage(false);
      setTeam((Team) => [...Team, member]);
      setTeamIds((TeamIds) => [...TeamIds, userId]);
      setMember("");
    } else {
      setViewMessage(true);
      setContentMessage(`${error}`);
    }
  };

  return (
    <div>
      <h3>New project</h3>
      {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <form className="new-project" onSubmit={SaveProject}>
        <div id="form">
          <p>Project name</p>
          <input
            type="text"
            id="title"
            placeholder="Project name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div id="form">
          <p>Description</p>
          <textarea
            name="description"
            placeholder="Enter project description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div id="form">
          <p>Add members</p>
          <div id="add-member">
            <input
              type="text"
              placeholder="Member Name"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
            <button type="button" onClick={addMember}>
              ADD
            </button>
          </div>
          {showMessage ? <ContentMessage /> : null}{" "}
          <div>
            <ul>
              {team.map((item) => (
                <div>
                  <p>{item}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="btn-projects">
          <button type="submit" onClick={addData}>
            create
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateProject;

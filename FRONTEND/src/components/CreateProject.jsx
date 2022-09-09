import React, { useState, useEffect }from "react";
import Projects from "../pages/Projects";
import * as api from "./api";

const CreateProject = (props) => {
  const [title, setTitle] = useState("");
  const [po, setPo] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState("");
  const [team, setTeam] = useState([]);
  const [teamIds, setTeamIds] = useState([]);
  const [proj, setProj] = useState({});
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");
  //TODO: get user id from the cookies
  const [userId, setUserId] = useState("6308fafe5b7c059a452a3c79");

  const ContentMessage = () => <p className="message_feedback">{contentMessage}</p>;

  const SaveProject = async (e) => {
    e.preventDefault();
    if(title == "" || description == "" || team.length == 0){
      setViewMessage(true);
      setContentMessage("No field can be empty for a new project");
    }else{
      const { success, results, error}  = await api.createProject({title,description,teamIds,userId});
      if(success){
        setViewMessage(false);
        addData(results._id);
        props.onNewProject(proj);
        e.target.reset();
        setTeam([]);
        setTeamIds([]);
        setProj(proj => proj={});
        setTitle("");
        setDescription("");
      }else{
        setViewMessage(true);
        setContentMessage(`There was a server error: ${error}`);
      }
    }
  };

  const addData = (projId) =>{
    setProj({
      title,
      description,
      projId,
    });
  }

  const addMember = async () => {
    const { success, userId, error }  = await api.checkUserExists(member);
    if(success){
      setViewMessage(false);
      setTeam((Team) => [...Team, member]);
      setTeamIds((TeamIds) => [...TeamIds, userId]);
      setMember('');
    }else{
      setViewMessage(true);
      setContentMessage(`${error}`);
    }
  };

  return (
    <div>
      <h3>New project</h3>
      {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <form className="new-project" onSubmit={SaveProject}>
        <input
          type="text"
          id="title"
          placeholder="Project name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Description</p>
        <textarea
          name="description"
          placeholder="Enter project description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <p>Add members</p>
        <div id="add-member">
          <input
            type="text"
            placeholder="Member Name"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <button type='button' onClick={addMember}>
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
        <button className="btn-projects" type="submit" onClick={addData}>
          create
        </button>
      </form>
    </div>
  );
};
export default CreateProject;

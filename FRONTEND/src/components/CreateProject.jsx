import React, { useState, useEffect }from "react";
import Projects from "../pages/Projects";
import * as api from "./api";
// import '../assets/style/header.css'

const CreateProject = (props) => {
  const [title, setTitle] = useState("");
  const [po, setPo] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState("");
  const [team, setTeam] = useState([]);
  const [proj, setProj] = useState({});

  // // const Data = [{Po, Title, Description}]

  // const [Data,setData] = React.useState([]);

  const SaveProject = (e) => {
    e.preventDefault();
    addData();
    props.onNewProject(proj);
    e.target.reset();
    setProj(proj => proj={});
    console.log(proj);
  };

  const addData = () =>{
    setProj({
      title,
      description,
    });
  }
  

  const addMember = () => {
    setTeam((Team) => [...Team, member]);
    setMember('');
  };

  return (
    <div>
      <h3>New project</h3>
      {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <form class="new-project" onSubmit={SaveProject}>
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
          {/* <input type="text" placeholder='Member Name' onChange={(e) => setMembers(Members=>[...Members,e.targ */}
          <button type='button' onClick={addMember}>
            ADD
          </button>
        </div>
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

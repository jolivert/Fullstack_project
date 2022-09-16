import React, { useState, useEffect} from "react";
import "../assets/style/TodoTasks.css";
import * as api from "../components/api";
import Task from "./Task";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import BtnLogout from '../components/BtnLogout'

const TodoTasks = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(props.state);

  //Unused. But it would be the way to use Params to retrieve the id and title from the URL
  //const {id} = useParams();
  //console.log(`id: ${id}`);

  const page = state.project_title;
  const subtitle = "To Do Tasks";

  const [project_id, setProjId] = useState(state.projId);
  const [project_title, setProjTitle] = useState(state.title);
  const [tasksCount, setTasksCount] = useState(0);
  const [data, setData] = useState([]);
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");
  const [taskDescription, setTaskDesc] = useState("");
  const [taskUserStory, setUserStory] = useState("");
  const [taskTitle, setTaskTitle] = useState("");

  const ContentMessage = () => <p className="message_feedback">{contentMessage}</p>;

  useEffect(() => {
    const getData = async () => {
      const { success, results} = await api.getTasksList(state.projId);

      if (!success) {
        setViewMessage(true);
        setContentMessage("Error retrieving project tasks");
      } else {
        setData(results);
        setTasksCount(results.length)
      }
    };

    getData();

    return () => {
      console.log("cleaning");
    };
  }, [tasksCount/*,id*/]);

  const saveTask = async () => {
    let task = {
      project_id: project_id,
      task_name: taskTitle,
      description: taskDescription,
      finished: false,
      isvoted: false,
      story_points: 0};

    const { success, results} = await api.saveTask(task);

      if (!success) {
        setViewMessage(true);
        setContentMessage("Error retrieving project tasks");
      } else {
        setTasksCount(prevCounter => prevCounter + 1);
      }
  };

  const onDestroyTask= () => {
    setTasksCount(prevCounter => prevCounter - 1);
  };
  
  return (
    <div className="containerTodoTasks">
      <Header title="Project tasks" subtitle={project_title} />
    {/* <Header title={page} subtitle={subtitle} /> */}

      <main style={{marginTop: 160}}>
        <div className="containerPostTasks">
          {/* <label htmlFor="">
            <input id="task-title" type="text" placeholder=" Write your task title" onChange={(e) => setTaskTitle(e.target.value)} />
            <input id="user-story" type="text" placeholder=" Write the user story it's part of" onChange={(e) => setUserStory(e.target.value)}/>
            <textarea className="taskDescriptionClass" type="text" placeholder=" Write your task description" onChange={(e) => setTaskDesc(e.target.value)}></textarea>
          </label> */}
          <label className="titulos-Input-task" htmlFor="">
            <p>Task title</p>
            <input id="task-title" type="text" placeholder=" Write the task title" onChange={(e) => setTaskTitle(e.target.value)} />
            <p>User story</p>
            <input id="user-story" type="text" placeholder=" Write the user story it's part of" onChange={(e) => setUserStory(e.target.value)}/>
            <p>Description</p>
            <textarea className="taskDescriptionClass" type="text" placeholder=" Write the task description" onChange={(e) => setTaskDesc(e.target.value)}></textarea>
          </label>

          <div className="boxButtonPost">
            <button onClick={saveTask}> + Add</button>
          </div>
        </div>
        {showMessage ? <ContentMessage /> : null}{" "}
        <div className="containerGetTasks">
          {data.map((item) => (
            <Task onDestroyTask={onDestroyTask}>{item}</Task>
          ))}
        </div>
      </main>
    </div>
  );
};
export default TodoTasks;
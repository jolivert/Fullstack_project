import React, { useState, useEffect } from "react";
import "../assets/style/TodoTasks.css";
import * as api from "../components/api";
import axios from "axios";
import Task from "./Task";

const TodoTasks = () => {
  //id of project should come as prop
  const [project_id, setProjId] = useState("630b63011ee9180e38108a01");
  //title of project should come as prop
  const [project_title, setProjTitle] = useState("Project Juan");
  const [tasksCount, setTasksCount] = useState(0);
  const [data, setData] = useState([]);
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");
  const [count, setCount] = useState(0);

  const ContentMessage = () => <p className="message_feedback">{contentMessage}</p>;

  useEffect(() => {
    const getData = async () => {
      const { success, results, error } = await api.getTasksList(project_id);

      if (!success) {
        console.log("!success");
        setViewMessage(true);
        setContentMessage("Error retrieving project tasks");
      } else {
        console.log("success");
        console.log(results);
        setData(results);
      }
    };

    getData();

    return () => {
      console.log("cleaning");
    };
  }, [count]);

  return (
    <div className="containerTodoTasks">
      <header>
        <h1 className="title">Name Project Selected</h1>
        <p>To Do Tasks</p>
      </header>

      <main>
        <div className="containerPostTasks">
          <label htmlFor="">
            <input type="text" placeholder=" Write your task title" />
            <input type="text" placeholder=" Write the user story it's part of" />
            <textarea className="taskDescription" type="text" placeholder=" Write your task description"></textarea>
          </label>
          <div className="boxButtonPost">
            <button> + Add</button>
          </div>
        </div>
        {showMessage ? <ContentMessage /> : null}{" "}
        <div className="containerGetTasks">
          {data.map((item) => (
            <Task>{item}</Task>
          ))}
        </div>
      </main>
    </div>
  );
};
export default TodoTasks;

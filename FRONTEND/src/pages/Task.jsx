import React from "react";
import "../assets/style/TodoTasks.css";
import * as api from "../components/api";

function Task(props) {

  const destroyTaskActivate = async () => {
    const { success, results}  = await api.destroyTask(props.children._id);

      if (success) {
        props.onDestroyTask();
      }
  };

  return (
    <div key={props.children._id} className="boxTask" id={props.children.task_name}>
      <section className="infoTask">
        <h2 className="title-infoTask"> {props.children.task_name} </h2>
        <div className="buttonVote">
          <button>VOTE</button>
        </div>
        <button>
          <div className="imgPaperBin" onClick={destroyTaskActivate}>.</div>
        </button>
      </section>
      <section className="descriptionTask"> {props.children.description} </section>
    </div>
  );
}

export default Task;

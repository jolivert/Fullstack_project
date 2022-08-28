import React from "react";
import "../assets/style/TodoTasks.css";

function Task(props) {
  return (
    <div key={props.children.task_name} className="boxTask" id={props.children.task_name}>
      <section className="infoTask">
        <h2 className="title-infoTask"> {props.children.task_name} </h2>
        <div className="buttonVote">
          <button>VOTE</button>
        </div>
        <div className="imgPaperBin">.</div>
      </section>
      <section className="descriptionTask"> {props.children.description} </section>
    </div>
  );
}

export default Task;

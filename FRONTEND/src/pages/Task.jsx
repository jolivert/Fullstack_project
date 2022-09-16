import React from "react";
import "../assets/style/TodoTasks.css";
import * as api from "../components/api";
import { Link } from "react-router-dom";

function Task(props) {
  const utype = JSON.parse(localStorage.getItem("token"));
  const isProductOwner = utype.userType === "PO" ?? true;

  const destroyTaskActivate = async () => {
    const { success, results } = await api.destroyTask(props.children._id);

    if (success) {
      props.onDestroyTask();
    }
  };

  if (props.children.isvoted == true) {
    return (
      <div
        key={props.children._id}
        className="boxTask"
        id={props.children.task_name}
      >
        <section className="infoTask">
          <h2 className="title-infoTask"> {props.children.task_name} </h2>
          <div className="buttonVote">
            <button>{props.children.story_points}</button>
          </div>
          <button>
            <div className="basura-one-task" onClick={destroyTaskActivate}>
              <img src="https://img.icons8.com/FE4B2B/delete"></img>
            </div>
          </button>
        </section>
        <section className="descriptionTask">
          {" "}
          {props.children.description}{" "}
        </section>
      </div>
    );
  } else {
    if (!isProductOwner) {
      return (
        <div
          key={props.children._id}
          className="boxTask"
          id={props.children.task_name}
        >
          <section className="infoTask">
            <h2 className="title-infoTask"> {props.children.task_name} </h2>
            <div className="buttonVote">
              <Link
                to="/PlanningPocker"
                state={{
                  taskId: props.children._id,
                  taskTitle: props.children.task_name,
                  taskDesc: props.children.description,
                }}
              >
                <button>VOTE</button>
              </Link>
            </div>
            <button>
              <div className="basura-one-task" onClick={destroyTaskActivate}>
                <img
                  class="icon"
                  src="https://img.icons8.com/FE4B2B/delete"
                ></img>
              </div>
            </button>
          </section>
          <section className="descriptionTask">
            {" "}
            {props.children.description}{" "}
          </section>
        </div>
      );
    } else {
      return (
        <div
          key={props.children._id}
          className="boxTask"
          id={props.children.task_name}
        >
          <section className="infoTask">
            <h2 className="title-infoTask"> {props.children.task_name} </h2>
            <div className="buttonVote">
              <Link
                to="/AllVotesPlanningPocker"
                state={{
                  taskId: props.children._id,
                  taskTitle: props.children.task_name,
                  taskDesc: props.children.description,
                }}
              >
                <button>VOTE</button>
              </Link>
            </div>
            <button>
              <div className="" onClick={destroyTaskActivate}>
                <img
                  class="icon"
                  src="https://img.icons8.com/FE4B2B/delete"
                ></img>
              </div>
            </button>
          </section>
          <section className="descriptionTask">
            {" "}
            {props.children.description}{" "}
          </section>
        </div>
      );
    }
  }
}

export default Task;

import React, { useState, useEffect } from "react";
import "../assets/style/planningPocker.css";
import * as api from "../components/api";
import Header from "../components/Header.jsx";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BtnLogout from "../components/BtnLogout";
//import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const PlanningPocker = props => {
  const location = useLocation();
  const state = location.state;

  const token = JSON.parse(localStorage.getItem("token"));
  const testLocalStore = JSON.parse(token.userid);
  console.log(testLocalStore);
  const navigate = useNavigate();
  const [task_id, setTaskId] = useState(state.taskId);
  const [user_id, setUserId] = useState(testLocalStore);
  const [voteTask, setVoteTask] = useState("☕");

  const [task_name, setTaskName] = React.useState(state.taskTitle);
  const [description, setDescription] = React.useState(state.taskDesc);

  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");

  /* function UpdateTextoVoto() {

      useEffect((ValVote) => {
        setVoteTask(ValVote);
      });
    };
      var UpdateTextoVoto = (ValVote) => {
        setVoteTask(ValVote);
      };*/

  var modificar;

  const updateTask = async () => {
    let task = {
      all_votes: {
        user: [user_id],
        vote: [voteTask],
      },
    };

    const { success, results } = await api.updateTask(task_id, task);

    if (!success) {
      setViewMessage(true);
      setContentMessage("Error update project task");
    }
    console.log(results);
    navigate(-1);
  };

  return (
    <div className="containerTodoTasks">
      {/*<header>
        <BtnLogout />
        <h1 className="title">Planning Pocker</h1>
        <p className="subtitle">Estimación de Tarea</p>
        </header>*/}
      <Header title={"Planning Pocker"} subtitle={"Estimación de Tarea"} />
      <main style={{ marginTop: 160 }}>
        <div className="containerTaskToVote">
          <section className="infoTask">
            <h2 className="title-infoTask"> {task_name}</h2>
            {/* <h2 className='title-infoTask'> {props.children.task_name} </h2> */}
          </section>
          <section className="descriptionTask"> {description} </section>
        </div>

        <hr className="lineaTask" />
        <div className="wrapper2">
          <div className="wrapper">
            {/*  <img className="cards" src="http://wiki.vykar.com/skins/common/images/2000px-Playing_card_spade_A_svg.png" width="90rem" height="135rem"/> */}
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(0);
                })
              }
            >
              0
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask("½");
                })
              }
            >
              ½
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(1);
                })
              }
            >
              1
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(2);
                })
              }
            >
              2
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(3);
                })
              }
            >
              3
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(5);
                })
              }
            >
              5
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(8);
                })
              }
            >
              8
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(13);
                })
              }
            >
              13
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask(21);
                })
              }
            >
              21
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask("∞");
                })
              }
            >
              ∞
            </button>
            <button
              className="buttonP"
              onClick={
                (modificar = () => {
                  setVoteTask("?");
                })
              }
            >
              ?
            </button>
            <button
              className="buttonT"
              onClick={
                (modificar = () => {
                  setVoteTask("☕");
                })
              }
            >
              ☕
            </button>
          </div>
          <div class="carta-box">
            <div class="card">
              <a className="textoVoto">{voteTask}</a>
            </div>
            
            {/* <Link to="/TodoTask">
              <button className="buttonPost" onClick={updateTask}>
                {" "}
                Send{" "}
              </button>
            </Link> */}

            
              <button className="buttonPost" onClick={updateTask}>
                {" "}
                Send{" "}
              </button>

            {/* <div class="carta">    
    <div class="cara">
      <img src="https://www.maxplayingcards.com/es/wp-content/uploads/2014/01/Different-BikeBack.png" width="200" height="250px"/>
       <h1 className='textoVoto'>7</h1>
    </div>
    <div class="cara detras">
      <img src="http://wiki.vykar.com/skins/common/images/2000px-Joker_black_02_svg.png" width="200" height="250px"/>
    </div>    
  </div> */}
          </div>
        </div>

        <hr className="lineaTask" />
      </main>
    </div>
  );
};
export default PlanningPocker;

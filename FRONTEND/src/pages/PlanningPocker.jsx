import React, { useState, useEffect } from 'react'
import "../assets/style/planningPocker.css"
import * as api from "../components/api";
//import BtnLogout from '../components/BtnLogout'


const PlanningPocker = (props) => {
  //var testLocalStore = (localStorage.getItem('token')).getItem('expiresIn');
  //var testLocalStore = 'expiresnnIn';
  const token = JSON.parse(localStorage.getItem("token"));
  const testLocalStore = token.tokenType; //token id!!!!!! modificar cdo se añada el id al token y borrar del nombre de la tarea
  const [task_id, setTaskId] = useState("62f9b6dd57b35a80acb602d0");
  const [user_id, setUserId] = useState("62eff9e8284ad97961ae7c43");
  const [voteTask, setVoteTask] = useState("☕");
  const [task_name, setTaskName] = React.useState("Task one");
  const [description, setDescription] = React.useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias voluptates pariatur quis velit nam quo fuga, excepturi distinctio, molestiae repellendus deserunt quam autem quibusdam, tenetur quod nemo eos placeat a.");
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
      all_votes:{ 
        user: [user_id],
        vote: [voteTask]
      }
    };

    const { success, results} = await api.updateTask(task_id, task);

      if (!success) {
        setViewMessage(true);
        setContentMessage("Error update project task");
      } 
      console.log(results);
   
    };



  return (
    <div className='containerTodoTasks'>
    <header>
     {/* <BtnLogout/> */}
       <h1 className='title'>título</h1>
        <p className='subtitle'>Estimación de la tarea</p>
    </header>

    <main>
      
    <div className='containerTaskToVote'>
        <section className='infoTask'>
        <h2 className='title-infoTask'> {task_name}  {testLocalStore}</h2>
        {/* <h2 className='title-infoTask'> {props.children.task_name} </h2> */}
        </section>
        <section className='descriptionTask'> {description} </section>
        </div>

        <hr className='lineaTask'/>
  <div className='wrapper2'>
   <div className='wrapper'>   
       {/*  <img className="cards" src="http://wiki.vykar.com/skins/common/images/2000px-Playing_card_spade_A_svg.png" width="90rem" height="135rem"/> */}
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(0);}}>0</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask('½');}}>½</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(1);}}>1</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(2);}}>2</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(3);}}>3</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(5);}}>5</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(8);}}>8</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(13);}}>13</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask(21);}}>21</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask('∞');}}>∞</button>
       <button className="buttonP" onClick={  modificar = () => {setVoteTask('?');}}>?</button> 
       <button className="buttonT" onClick={  modificar = () => {setVoteTask('☕');}}>☕</button>
   </div>
                <div class="carta-box">
                <div class="card">
        <a className='textoVoto'>{voteTask}</a>
       
    </div>
    <button className='buttonPost'onClick={updateTask}> Send </button>
     
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

     
        <hr className='lineaTask'/>

      

  
    
    </main>
    </div>
  )
   
}
export default PlanningPocker;
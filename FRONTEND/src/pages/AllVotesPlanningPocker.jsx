import React, { useState, useEffect } from 'react'
import Card_AllVotes from '../components/Card_AllVotes.jsx'
import '../assets/style/AllVotesPlanningPocker.css'
import BtnLogout from '../components/BtnLogout'
import { Link, useNavigate } from "react-router-dom";
import * as api from "../components/api";

const AllVotesPlanningPocker = (props) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const testLocalStore = token.tokenType; 
  const project_name = React.useState("User Story");
  const task_name = React.useState("Title first task");
  const description = React.useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias voluptates pariatur quis velit nam quo fuga, excepturi distinctio, molestiae repellendus deserunt quam autem quibusdam, tenetur quod nemo eos placeat a.");
  const [FinalVote, setFinalVote] = useState()
  const [PropVote, setPropVote] = useState()
  const[IsVoted, setIsVoted]= useState(false)
  const navigate = useNavigate();
  const arrayOfObjects = [
   
    { usernameVote: "Davina", vote: "10" },
    { usernameVote: "Pepe", vote: "3" },
    { usernameVote: "Marina", vote: "5" },
    { usernameVote: "Gerard", vote: "☕" },
    { usernameVote: "Maria", vote: "20" },
    { usernameVote: "Saray", vote: "13" },
    { usernameVote: "David", vote: "5" },
    { usernameVote: "Monica", vote: "1" },
    { usernameVote: "Sol", vote: "3" },
    { usernameVote: "Cristina", vote: "8" },
    { usernameVote: "Mario", vote: "1/2" },
    { usernameVote: "Antonio", vote: "5" },
   
  ];

  const submit = async (e) => {
    try {
      e.preventDefault();
      setFinalVote(PropVote)
      navigate("/TodoTasks", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };
   
  useEffect(() => {
    setIsVoted(true)
    const task ={
      isvoted:IsVoted,
      story_points: FinalVote
    }
    updateFinalVote("630c6ec64e37195e233e7ace",task)
    console.log(task)
  },[FinalVote]);


  const updateFinalVote = async (id,t)=>{ 
    await api.updateTask(id,t)
  }; 
  
  const utype= JSON.parse(localStorage.getItem("token"));
  const isProductOwner= utype.userType==="PO"??true;

  let productOwnercomponent = null

  if (isProductOwner) {
    productOwnercomponent = (
      <div>
        <form className="finalVote" action="" method="post" onSubmit={submit}>
          <p>Task final vote: </p>
          <input  placeholder=".🔏"  onChange={(e) => setFinalVote(e.target.value)}/>
        </form>
      </div>
    )
    console.log(token)
  }
  
  

  return (
    <div>
      <hero>
        <div className="headerAllVote">
          <BtnLogout/>
  
          <h1>Votes Planning Pocker</h1>
          <h2> Project:  {project_name}  {testLocalStore}</h2>
           
        </div>
      </hero>
      <section className="section-PlanningVotes">
        <article>
          <div className="containerGetProject">
            <div className="boxGetProject">
              <section>
                <h2 className="title-infoProject"> Task: {task_name} </h2>
              </section>
              <section className="descriptionProject">
                {description}
              </section>
            </div>
          </div>
        </article>
        <article className="article-allVotes">
          <hr className="hr-allVotes" />

          <div className='gridCardsVote'>
          
          
          { arrayOfObjects.map(({usernameVote, vote})=>(
          <div >   
            <Card_AllVotes usernameVote={usernameVote} vote={vote} />
          </div>
         ))}

         </div>

          <hr className="hr-allVotes" />
        </article>
        {productOwnercomponent}
      </section>
    </div>
  )
}

export default AllVotesPlanningPocker
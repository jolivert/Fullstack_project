
import React, { useState, useEffect } from 'react'
import Card_AllVotes from '../components/Card_AllVotes.jsx'
import '../assets/style/AllVotesPlanningPocker.css'
import BtnLogout from '../components/BtnLogout'


const AllVotesPlanningPocker = (props) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const testLocalStore = token.tokenType; 
  const [task_id, setTaskId] = useState("62f988b36ebb6230ed3d9a97");
  const [voteTask, setVoteTask] = useState("☕");
  const [project_name, setProjectName] = React.useState("User Story");
  const [task_name, setTaskName] = React.useState("Title first task");
  const [description, setDescription] = React.useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias voluptates pariatur quis velit nam quo fuga, excepturi distinctio, molestiae repellendus deserunt quam autem quibusdam, tenetur quod nemo eos placeat a.");
  //const [names, setNames] = useState(["Davina","", ""...]);
  const [showVotes, setShowVotes] = useState(["10","3","5","☕","20","13","5","1","3","2","8",1/2]); 
  const [FinalVote, setFinalVote] = useState()
   



  const isProductOwner = true
  let productOwnercomponent = null

  if (isProductOwner) {
    productOwnercomponent = (
      <div className="postVotePo">
        <form className="postVotePO" action="" method="post">
          <p>Task final vote: </p>
          <input name="" id="" placeholder=".🔏"  onChange={(e) => setFinalVote(e.target.value)}/>
        </form>
      </div>
    )
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

          { showVotes.map((it)=>(
          <div >
            <Card_AllVotes it={it} />
          </div>
         ))}

         </div>

          {/* <div className=''>
            <Card_AllVotes />
          </div> */}

          <hr className="hr-allVotes" />
        </article>
        {productOwnercomponent}
      </section>
    </div>
  )
}

export default AllVotesPlanningPocker


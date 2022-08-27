import React from 'react'
import Card_AllVotes from '../components/Card_AllVotes.jsx'
import '../assets/style/AllVotesPlanningPocker.css'

const AllVotesPlanningPocker = () => {
  return (
    <div>
      <hero>
        <div id="header">
          <h1>Votos Planning Pocker</h1>
          <h2>Estimación de votos</h2>
        </div>
      </hero>

      <section className='section-PlanningVotes'>
        <article>
          <div className="containerGetProject">
            <div className="boxGetProject">
              <section className="">
                <h2 className="title-infoProject"> Title Task </h2>
              </section>
              <section className="descriptionProject">
                {' '}
                descripción de la tares
              </section>
            </div>
          </div>
        </article>
        <article className='article-allVotes'>
          <hr className="hr-allVotes" />
            <Card_AllVotes />
          <hr className="hr-allVotes" />
        </article>
        <div className='postVotePo'>
          <form className='postVotePO' action="" method="post">
          <p>Task final vote: </p>
          <input  name="" id="" placeholder='...'/>
          </form>
          
        </div>
      </section>
    </div>
  )
}

export default AllVotesPlanningPocker

import React from 'react'
import Card_AllVotes from '../components/Card_AllVotes.jsx'
import '../assets/style/AllVotesPlanningPocker.css'

const isProductOwner = true
let productOwnercomponent = null

if (isProductOwner) {
  productOwnercomponent = (
    <div className="postVotePo">
      <form className="postVotePO" action="" method="post">
        <p>Task final vote: </p>
        <input name="" id="" placeholder="..." />
      </form>
    </div>
  )
}

const AllVotesPlanningPocker = () => {
  return (
    <div>
      <hero>
        <div id="header">
          <h1>Votes Planning Pocker</h1>
          <h2> Project: título del proyecto evaluado</h2>
        </div>
      </hero>
      <section className="section-PlanningVotes">
        <article>
          <div className="containerGetProject">
            <div className="boxGetProject">
              <section >     
                <h2 className="title-infoProject"> Title Task </h2>
              </section>
              <section className="descriptionProject">
                {' '}
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </section>
            </div>
          </div>
        </article>
        <article className="article-allVotes">
          <hr className="hr-allVotes" />
        
          <div >
          <Card_AllVotes />
          </div>
          <hr className="hr-allVotes" />
        </article>
        {productOwnercomponent}
      </section>
    </div>
  )
}

export default AllVotesPlanningPocker

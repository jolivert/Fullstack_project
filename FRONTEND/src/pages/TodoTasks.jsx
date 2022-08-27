import React from 'react'
import '../assets/style/TodoTasks.css'

const TodoTasks = () => {
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
            <input
              type="text"
              placeholder=" Write the user story it's part of"
            />
            <textarea
              type="text"
              placeholder=" Write your task description"
            ></textarea>
          </label>
          <div className="boxButtonPost">
            <button> + Add</button>
          </div>
        </div>

        <div className="containerGetTasks">
          <div className="boxTask">
            <section className="infoTask">
              <h2 className="title-infoTask"> Title Task </h2>
              <p>more info</p>
              <button>VOTE</button>
              <div className="imgPaperBin">.</div>
            </section>
            <section className="descriptionTask">
              {' '}
              descripción de la tares
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
export default TodoTasks

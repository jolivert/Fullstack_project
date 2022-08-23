import React from 'react'
import "../assets/style/Tasks.css"


const Tasks = () => {
  return (
    <div className='containerTasks'>
    <header>
       <h1 className='title'>Name Project Selected</h1>
        <p>To Do Tasks</p>
    </header>
    <main>

      <div className='containerGetTasks'>
        <div className='boxTask'>
        <section className='infoTask'>
          <h2> Title Task </h2>
          <p>more info</p>
          <button>vote</button>
        </section>
        <section className='descriptionTask'> descripción de la tares</section>
        </div>

      </div>
    </main>
    </div>
  )
}
export default Tasks;
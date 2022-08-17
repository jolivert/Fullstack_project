import React from 'react'
// import '../assets/style/header.css'


const CreateProject = () => {
  return (
    <div>
     <h3>New project</h3>
     {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
     <form class="new-project">
        <input type="text" id='title' placeholder='Project name'/> 
        <p>Description</p>
        <textarea name="description" placeholder='Enter project description'></textarea>
        <p>Add members</p>
        <input type="text" placeholder='Member Name'/>
     </form>
     <button>+ add</button>
    </div>
  )
}

export default CreateProject
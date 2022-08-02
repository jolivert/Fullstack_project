import React from 'react'
import '../assets/style/signUp.css'


const SignUp = () => {
  return (
    <div className="container-initial">
      <div className="box-signup">
      <div class="containerSingUp">
      <div class="switch">
        <input type="radio" className='switch-input' name="view" value="week" id="week" checked/>
          <label for="week" class="switch-label switch-label-off">PO</label>
          <input type="radio" class="switch-input" name="view" value="month" id="month"/>
          <label for="month" class="switch-label switch-label-on">Team</label>
          <span class="switch-selection"></span>
      </div>
    </div>
        <h1>Sign Up</h1>
        <p>Name</p>
        <input type="text" />
        <p>Surname</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />

        <button>SingUp</button>
      </div>
      
    </div>
  )
}
export default SignUp

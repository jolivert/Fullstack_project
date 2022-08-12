import React from 'react'
import '../assets/style/signUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  
  return (
    <div className="container-initial">
      <div className="box-signup">
        <div class="containerSingUp">
          <div class="switch">
            <input
              type="radio"
              className="switch-input"
              name="view"
              value="po"
              id="po"
              checked
            />
            <label for="po" class="switch-label switch-label-off">
              PO
            </label>
            <input
              type="radio"
              class="switch-input"
              name="view"
              value="team"
              id="team"
            />
            <label for="team" class="switch-label switch-label-on">
              Team
            </label>
            <span class="switch-selection"></span>
          </div>
        </div>
        <h1>Sign Up</h1>
        <div>
          <p>Name</p>
          <input type="text" />
          <p>Surname</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
        </div>
        <button>SingUp</button>
      </div>
      <Link to="/">
          <p className="login_back">
            Are you already registered ?<span> Log in</span>{' '}
          </p>
        </Link>
    </div>
  )
}
export default SignUp

import React from 'react';
import {useState} from 'react';
import '../assets/style/signUp.css';
import { Link } from 'react-router-dom';
import * as api from "./api";

const SignUp = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkedPO, setCheckedPO] = useState(true);
  const [checkedTM, setCheckedTM] = useState(false);
  const [showMessage, setViewMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");


  const handleUserTypeChange = event => {
    if(event.target.checked){
      if(event.target.id === "po"){
        console.log("user is now PO");
        setCheckedPO(true);
        setCheckedTM(false);
      }else{
        console.log("user is now TM");
        setCheckedPO(false);
        setCheckedTM(true);
      }
    }
  };

  const ContentMessage = () => (
    <p className="message_feedback">
          {contentMessage}
    </p>
  );

  const register = async(registerData) => {
    const { success, error } = await api.register(registerData);
    setViewMessage(true);
    if(success){
      setContentMessage("Registration was successful!");
    }else{
      setContentMessage(error);
    }
  }

  const submit = (e) => {
    const userType = checkedPO == true ? "PO" : "TM"; //product owner : team member
    const passwordMatch = (password === password2) ? true : false;
    setViewMessage(true);
    if(!passwordMatch){
      setContentMessage("Passwords don't match, check again!");
    }else{
      register({name, surname, username, email, password, userType});
    }
  };

  return (
    <div className="container-initial">
      <div className="box-signup">
        <div class="containerSingUp">
          <div class="switch">
           <label htmlFor="">
           <input
              type="radio"
              className="switch-input"
              name="view"
              value="po"
              id="po"

              onChange={handleUserTypeChange}
              checked={checkedPO}
            />
             </label>

            <label for="po" class="switch-label switch-label-off">
              PO
            </label>
            <input
              type="radio"
              class="switch-input"
              name="view"

              value="tm"
              id="tm"
              onChange={handleUserTypeChange}
              checked={checkedTM}
            />
            <label for="tm" class="switch-label switch-label-on">

              Team
            </label>
            <span class="switch-selection"></span>
          </div>
        </div>
        <h1>Sign Up</h1>
        <div>
          <p>Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <p>Surname</p>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <p>Email</p>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <p>Repeat Password</p>
          <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
        </div>

        { showMessage ? <ContentMessage /> : null} {/*As seen in https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react*/}
        <button onClick={submit}>Sign Up</button>

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

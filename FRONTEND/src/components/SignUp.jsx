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
  const [showPwdError, setShowPwdError] = useState(false);
  const [showSuccess, setSuccess] = useState(false);


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

  const PwdMismatch = () => (
    <p className="error_pwd_comparison">
          Passwords don't match, check again!
    </p>
  );

  const SuccessfulRegistration = () => (
    <p className="error_pwd_comparison">
          Registration was successful!
    </p>
  );

  const register = async(registerData) => {
    const { success, error } = await api.register(registerData);
    if(success){

    }else{

    }
  }

  const submit = (e) => {
    const userType = checkedPO == true ? "PO" : "TM";
    const passwordMatch = (password === password2) ? true : false;
    if(!passwordMatch){
      setShowPwdError(true);
      setSuccess(false);
    }else{
      setShowPwdError(false);
      register(name, surname, username, email, password, userType);
      setSuccess(true);
    }
  };

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
              onChange={handleUserTypeChange}
              checked={checkedPO}
            />
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
        { showPwdError ? <PwdMismatch /> : null } {/*As seen in https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react*/}
        { showSuccess ? <SuccessfulRegistration /> : null}
        <button onClick={submit}>SingUp</button>
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

import '../assets/style/login.css'
import React , { useState } from 'react'
import "../assets/style/login.css";
import * as api from "./api";


const Login = ({ onLogin, ontoggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("register"); 
  const [message, setMessage] = useState(null);

  const login = async (userData) => {
    const { success, token, error } = await api.login(userData);
    if (success) {
      onLogin(token);
    } else {
      setMessage(error);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  const togglemode = (e) => {
    e.preventDefault();
    setMode("register");
    ontoggle(mode);
  };


  return (
    <div className="container-initial">
      <form className="box-signin" onSubmit={submit}>
        <h1>Login</h1>
        <div>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Login</button>
      </form>
      
        <p className="registerNow">
          if you haven’t Registered yet ?<button  onClick={togglemode}><span> Register Now</span>{" "} </button>
        </p>
    </div>
  );
};
export default Login;

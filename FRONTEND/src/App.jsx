import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import SignUp from "./components/SignUp";
import PlanningPocker from "./pages/PlanningPocker.jsx";
import "./assets/style/App.css";
import { useState } from "react";
import Login from "./components/Login.jsx";
import TodoTasks from "./pages/TodoTasks.jsx";
import Tasks from "./pages/Tasks.jsx";
import Initial from "./pages/Initial.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [toggle,setToggle] = useState("login")

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token",JSON.stringify(token));
  };

  const togfunct= (toggle) =>{
    console.log(toggle)
    setToggle(toggle);
  }


  if (token === null) {

    if (toggle=== "login") {return <Login onLogin={login} ontoggle={togfunct}/>}
    else if(toggle=== "register"){return <SignUp  ontoggle={togfunct}/> }
 

  }else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Initial />} />
            <Route path="TodoTasks" element={<TodoTasks/>} />
            <Route path="Tasks" element={<Tasks />} />
            <Route path="PlanningPocker" element={< PlanningPocker />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

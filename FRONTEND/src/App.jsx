import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import SignUp from "./components/SignUp";
import PlanningPocker from "./pages/PlanningPocker.jsx";
import "./assets/style/App.css";
import { useState } from "react";
import Login from "./components/Login.jsx";
import TodoTasks from "./pages/TodoTasks.jsx";
import Projects from "./pages/Projects.jsx";
import Initial from "./pages/Initial.jsx";
import AllVotesPlanningPocker from "./pages/AllVotesPlanningPocker.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [mode, setMode] = useState("login");

  const login = (token) => {

    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
    
  };

  const setmodefn = (toggle) => {
    setMode(toggle);
  };

  if (token === null) {
    if (mode === "login") {
      return <Login onLogin={login} onchangemode={setmodefn} />;
    } else if (mode === "register") {
      return <SignUp ontoggle={setmodefn} />;
    }
  } else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Initial />} />
            <Route path="TodoTasks" element={<TodoTasks />} />
            <Route path="project/:id/tasks" element={<TodoTasks />} /> {/*Pau said this would be the way to do this link if we used params (useParams)*/};
            <Route path="projects" element={<Projects />} />
            <Route path="PlanningPocker" element={<PlanningPocker />} />
            <Route path="AllVotesPlanningPocker" element={<AllVotesPlanningPocker />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

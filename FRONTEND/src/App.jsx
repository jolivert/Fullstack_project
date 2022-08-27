import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import SignUp from "./components/SignUp";
import PlanningPocker from "./pages/PlanningPocker.jsx";
import "./assets/style/App.css";
import { useState } from "react";
import Login from "./components/Login.jsx";
import TodoTasks from "./pages/TodoTasks.jsx";
import Tasks from "./pages/Tasks.jsx";
import Projects from "./pages/Projects.jsx";
import Initial from "./pages/Initial.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [mode, setMode] = useState("login");

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const setmodefn = (toggle) => {
    console.log(toggle);
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
            <Route path="Tasks" element={<Tasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="PlanningPocker" element={<PlanningPocker />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

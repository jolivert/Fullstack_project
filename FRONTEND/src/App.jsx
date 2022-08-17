import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Initial from "./pages/Initial.jsx";
import SignUp from "./components/SignUp";
import PlanningPocker from "./pages/PlanningPocker.jsx";
import "./assets/style/App.css";
import { useState } from "react";
import Login from "./components/Login.jsx";

function App() {
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
  };

  if (token === null) {
    return (
    <div>
   
    <Routes>
          <Route path="/" element={<Login onLogin={login} />}>
          
          </Route>  
          <Route path="/signUp" element={<SignUp />}>
          </Route>
        </Routes>
    
    
    </div>
    );

  } else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlanningPocker />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

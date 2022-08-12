import * as tk from './token';
import { useState } from "react";
import PlanningPocker from '../pages/PlanningPocker';
import Login from '../components/Login';


function auth(){
    const [token, setToken] = useState(tk.readToken);

    const login = (token) => {
      setToken(token);
      tk.saveToken(token);
    };
    
    /*
    const logout = () => {
      setToken(null);
      tk.deleteToken();
    };
    */
    
    if (token === null) {
      return <Login onLogin={login} />;
    }
     else {
      return <PlanningPocker />;
    }
    
};

export default auth

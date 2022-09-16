import React from "react";
import "../assets/style/header.css";
import BtnLogout from "../components/BtnLogout";

const logout = () => {
  localStorage.removeItem("token");
  window.history.pushState(null, null, "/");
  window.location.reload(true);
};

const Header = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div id="header">
      <div id="lateral"></div>
      <div className="title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div id='lateral' className="lateral">
        <button onClick={logout}> <img class="icon" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> </button>
      </div>
    </div>
  );
};

export default Header;

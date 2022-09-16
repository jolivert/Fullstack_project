import React from 'react'

const logout = () => {
  localStorage.removeItem("token");
  window.history.pushState(null, null, "/");
  window.location.reload(true);
};
const BtnLogout = () => {
    return (
      <div className='container-logout'>
          <button onClick={logout} className="nav_logout"> <img src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png" alt="" />
          </button>
      </div>
    )
 
  }
  
  export default BtnLogout
  
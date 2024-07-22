"use client"

import { useAuth } from "../context/AuthContext";
const Sidebar = ({ setView }) => {
    const {logout} = useAuth();
    return (
      <div className="d-flex flex-column p-3 bg-light" style={{ height: '100vh', width: '250px' }}>
        <h4>Admin Dashboard</h4>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button className="nav-link active" onClick={() => setView('contact')}>Contact Admin</button>
          </li>
          <br />
          <li className="nav-item">
            <button className="nav-link" onClick={() => setView('newsletter')}>Newsletter Admin</button>
          </li>
          <br />    
          <button className="btn btn-info" onClick={logout}>Logout</button>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  
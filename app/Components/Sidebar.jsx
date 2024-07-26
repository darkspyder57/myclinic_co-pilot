"use client";

import React, { useState } from 'react';

const Sidebar = ({ setView }) => {
  const [activeButton, setActiveButton] = useState('side-1');

  const handleClick = (buttonId, view) => {
    setActiveButton(buttonId);
    setView(view);
  };

  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ height: '100vh', width: '250px' }}>
      <h4>Admin Dashboard</h4>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            id="side-1"
            className={`sidebar-btn ${activeButton === 'side-1' ? 'active' : ''}`}
            onClick={() => handleClick('side-1', 'contact')}
          >
            Contact Admin
          </button>
        </li>
        <br />
        <li className="nav-item">
          <button
            id="side-2"
            className={`sidebar-btn ${activeButton === 'side-2' ? 'active' : ''}`}
            onClick={() => handleClick('side-2', 'newsletter')}
          >
            Newsletter Admin
          </button>
        </li>
        <br />
      </ul>
    </div>
  );
};

export default Sidebar;

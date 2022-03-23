import React from "react";
import './nav.css';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();
    return (
      <div className="box">
        <div className="container">
          <button className="first" onClick={() => navigate('/about')}>About</button>
          <button className="second" onClick={() => navigate('/study')}>Study</button>
          <button className="third">App</button> 
        </div>
      </div>
    );
  }
  
  export default Nav;
  
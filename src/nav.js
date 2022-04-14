import React from "react";
import './nav.css';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();
    return (
      <div className="box">
        <div className="container">
          <button className="first" onClick={() => navigate('')}>About</button>
          <button className="second" onClick={() => navigate('/study')}>Study</button>
          <button className="third" onClick={() => navigate('/logIn')}>Log in</button> 
        </div>
      </div>
    );
  }
  
  export default Nav;
  
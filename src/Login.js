import React, {useEffect, useState} from "react";
import './Login.css';

function Login() {
    const  [gmail, setGmail] = useState("")
    const [pass, setPass] = useState("")

    return (
      <div>
          <input 
        type="text" 
        className="userName"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
        >
        </input>

        <input 
        type="password" 
        className="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        >
        </input>

        <h3>Sign up</h3>
        <h5 className='gmailT'>gmail:</h5>
        <h5 className='pass'>password:</h5>
        <button className='signUpBtn' onClick={console.log(pass, gmail)}>Sign Up</button>
      </div>
    );
  }
  
  export default Login;
  
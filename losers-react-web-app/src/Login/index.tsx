import { useState } from "react";
import Nav from "../Nav";
import "./login.css";
import { User } from "../Users/client";
import { useNavigate } from "react-router";


function LoginPage(){

    // fill in the user data in JSON form - {username:"...", password:"..."} 
    const [credentials, setCredentials] = useState<User>();
    const navigate = useNavigate();
    // const signin = async () => {
    //     await client.signin(credentials);
    //     navigate("/Kanbas/Account/Profile");
    //   };
    

    
  return (
    <>
    <Nav/>
    <div id="login-form">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={credentials?.username}
        // after we add-in the model
        // onClick={(e) => setCredentials({ ...credentials, username: e.target.value}) }
        />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={credentials?.password} 
        // onClick={(e)=>setCredentials({ ...credentials, password: e.target.value })}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default LoginPage;
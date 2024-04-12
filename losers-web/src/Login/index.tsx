import { useState } from "react";
import Nav from "../Nav";
import "./login.css";
import { User } from "../Users/client";
import * as client from "../Users/client"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function LoginPage() {

    // fill in the user data in JSON form - {username:"...", password:"..."} 
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "",
        password: "",
        email: "",
        agree: false
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };


    return (
        <>
            <Nav />
            <div id="login-form">
                <h1>Login</h1>
                <form onSubmit={signin}>
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


                    <div>
                        <p>Don't have an account? </p>
                        <Link to={"/Register"}>Create an account</Link>
                    </div>



                </form>
            </div>
        </>
    );
};

export default LoginPage;
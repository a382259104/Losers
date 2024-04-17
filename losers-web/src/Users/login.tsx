import { useState } from "react";
import Nav from "../Nav";
import "./login.css";
import { User } from "./client";
import * as client from "./client"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../StateVariables/UserRole";

function LoginPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState<string>("");


    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "",
        password: "",
        email: "",
        role: "MEMBER"
    });


    const signin = async (e: any) => {
        e.preventDefault();
        await client.signin(credentials).then((result) => {
            if (result.error) {
                setErrorMessage("Username or password incorrect. Please try again.")
            } else if (result.poop) {
                setErrorMessage("Incorrect user role.")
            } else {
                
                dispatch(setUserProfile(result)); 
                navigate("/Profile");
            }
        });
    };




    return (
        <>
            <Nav />
            <div id="login-form">
                <h1>Login</h1>
                <form onSubmit={signin}>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials?.username}
                        // after we add-in the model
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials?.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />

                    <div>
                        <input type="checkbox" checked={credentials?.role === "ADMIN"}
                            onChange={(e) => setCredentials({
                                ...credentials,
                                role: e.target.checked ? "ADMIN" : "MEMBER"
                            })
                            }
                        />
                        <p>Are you an administrator?</p>

                    </div>

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
import { useState } from "react";
import Nav from "../Nav";
import "../Users/login.css";
import { User } from "./client";
import * as client from "./client"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function RegisterPage() {

    // fill in the user data in JSON form - {username:"...", password:"..."} 
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "",
        password: "",
        email: "",
        role: "MEMBER"
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();
    // const signin = async () => {
    //     await client.signin(credentials);
    //     navigate("/Kanbas/Account/Profile");
    //   };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setCredentials({ ...credentials, [name]: newValue });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!credentials.email || !credentials.username || !credentials.password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        if (credentials.password !== confirmPassword) {
            setErrorMessage("Please make sure to enter the same passwords");
            return;
        }
        if (!agree) {
            setErrorMessage("Please agree to the terms!");
            return;
        }
        // Now you can proceed with registration
        // For example:
        client.signup(credentials).then((result) => {
            if (result.error) {
                setErrorMessage("Username is taken, please try another one.");
            } else {
                navigate("/Profile"); // navigate to success page
            }
        });


    };


    return (
        <>
            <Nav />
            <div id="login-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={credentials?.email}
                        onChange={handleChange} />

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials?.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials?.password}
                        onChange={handleChange}
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div>
                        <input type="checkbox" checked={credentials?.role === "ADMIN"}
                            onChange={(e) => setCredentials({
                                ...credentials,
                                role: e.target.checked ? "ADMIN" : "MEMBER"
                            })
                            }
                        />
                        <label>Registering as an administrator?</label>

                    </div>


                    <div>
                        <input type="checkbox" id="agree" name="agree" checked={agree} onChange={() => setAgree(!agree)} />
                        <label htmlFor="agree">I accept the Terms and Conditions</label>
                    </div>

                    <input type="submit" value="Submit" />


                    <div>
                        <p>Already has an account? </p>
                        <Link to={"/Login"}>Sign in</Link>
                    </div>



                </form>
            </div>
        </>
    );
};

export default RegisterPage;
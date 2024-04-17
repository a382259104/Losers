import * as UserModel from "./client"
import {User} from "./client"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import { stat } from "fs";

export default function Profile() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "",
        password: "",
        email: "",
        role: "MEMBER"
    });

    const [loggedIn, setLogin] = useState(false);

    const navigate = useNavigate();
    const fetchProfile = async () => {
        const account = await UserModel.profile();

        if (account.username != '') {
            setLogin(true)
            setCredentials(account);
        }
    };




    useEffect(() => {
        fetchProfile();
    }, []);


    const save = async () => {
        await UserModel.updateUser(credentials).then((result)=> {
            if (result.success) {
                // make a state variable true and pop up a success message
            }
        } )
    };


    const signout = async () => {
        const empty = await UserModel.signout();
        setCredentials(empty);
        navigate("/Login");
    };

    const profilePicURL = 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'

    return (
        <div>
            <Nav />
            {/* <Link to="/Kanbas/Account/Admin/Users"
                className="btn btn-warning w-100">
                Users
            </Link> */}

            {credentials.username ?
                <>
                    <div className="profile-picture">
                        <img src={profilePicURL}></img>
                    </div>
                    <div className="inline">
                        <p>Username:</p>
                        <input value={credentials.username} onChange={(e) =>
                            setCredentials({ ...credentials, username: e.target.value })} />
                        <br />
                        <input value={credentials.password} onChange={(e) =>
                            setCredentials({ ...credentials, password: e.target.value })} />
                        <br />
                        <input value={credentials.email} onChange={(e) =>
                            setCredentials({ ...credentials, email: e.target.value })} />
                        <br />
                        <select onChange={(e) =>
                            setCredentials({ ...credentials, role: e.target.value })}
                            disabled>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                        </select>
                        <button onClick={save}>
                            Save
                        </button>
                        <button onClick={signout}>
                            Signout
                        </button>


                    </div>
                </>
                :
                <div className="inline">
                    <p>You are not logged in. Please Login:</p> <Link to={"/login"}>Here</Link>
                </div>

            }
        </div>
    );
}

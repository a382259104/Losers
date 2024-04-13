import User from "./userModel.js";

let currentUserLocal = {
    username: '',
    password: '',
    email: '',
    role: ''
};

const findAllUsers = async (req, res) => {
    console.log("Server attempting get all users")
    const users = await User.find();
    res.json(users);
};

const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await User.findOne({ username, password });
    if (currentUser) {
        req.session["currentUser"] = currentUser;
        currentUserLocal = currentUser;
        console.log("Login Successful!!!!!!!!")
        res.json(currentUser);
    } else {
        res.sendStatus(402);
    }
};


const profile = (req, res) => {
    if (!currentUserLocal.username) {
        console.log("we don't have a user")
        console.log(currentUserLocal)
        res.json(currentUserLocal);
        return;
    }
    console.log(currentUserLocal);
    res.json(currentUserLocal);
};


const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
        res.status(400).json(
            { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
};

const signout = (req, res) => {
    req.session.destroy();
    currentUserLocal.username = '';
    res.json(currentUserLocal)
    res.sendStatus(currentUser);
};


function UserRoutes(app) {
    app.get('/', (req, res) => {
        res.send('You have connected to Losers! There\'s nothing to see here ')
    });
    app.get("/api/users", findAllUsers);
    app.post("/api/users/signin", signin);
    app.post("/api/users/profile", profile);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signout", signout);
}

export default UserRoutes
import User from "./userModel.js";

let currentUserLocal = {
    username: '',
    password: '',
    email: '',
    role: 'MEMBER'
};

const findAllUsers = async (req, res) => {
    console.log("Server attempting get all users")
    const users = await User.find();
    res.json(users);
};

const updateUser = async (req,res) => {
    console.log("Hitting update user")

    const user = await User.findOne({ username: req.body.username });

    if (user && user.username !== currentUserLocal.username) {
        console.log("USER NAME TAKEN")
        return res.status(200).json({ error: "Username already taken" });
    }
    const id = req.params.userid;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    currentUserLocal = updatedUser

    console.log(currentUserLocal)
    res.status(200).json({success:"!"})
}

const signin = async (req, res) => {
    const { username, password, role } = req.body;

    console.log(`We are signing in with ${username},${password},${role} `)


    const currentUser = await User.findOne({ username, password });

    if (currentUser) {

        if (currentUser.role === role) {
            req.session["currentUser"] = currentUser;
            currentUserLocal = currentUser;
            console.log("Login Successful!!!!!!!!")
            res.json(currentUser);
        } else {
            console.log(`the roles didn't match... expected ${currentUser.role}, actual:${role}`)
            return res.status(200).json({ poop: "Wrong role" });
        }

    } else {
        return res.status(200).json({ error: "Wrong username or password." });
    }
};


const profile = (req, res) => {
    if (!currentUserLocal.username) {
        console.log("we don't have a user")
        console.log(currentUserLocal)
        res.json(currentUserLocal);
        return;
    }
    res.json(currentUserLocal);
    console.log(`Fetching profile for: ${currentUserLocal}`)
};


const signup = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    console.log(`Found user: ${user} in signing up`)
    if (user) {
        console.log("USER NAME TAKEN")
        return res.status(200).json({ error: "Username already taken" });
    }


    delete req.body._id;
    const newUser = await User.create(req.body);

    req.session["currentUser"] = newUser;
    currentUserLocal = newUser;

    console.log(`LocalUser created:${currentUserLocal.username}`)
    res.json(newUser);
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

    app.put("/api/users/profile/:userid", updateUser);

}

export default UserRoutes
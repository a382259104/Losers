import User from "./userModel.js";

const findAllUsers = async (req, res) => {
    console.log("Server attempting get all users")
    const users = await User.find();
    res.json(users);
};



function UserRoutes(app) {
    app.get('/', (req, res) => {
        res.send('You have connected to Losers! There\'s nothing to see here ')
    });
    app.get("/api/users", findAllUsers);
}

export default UserRoutes
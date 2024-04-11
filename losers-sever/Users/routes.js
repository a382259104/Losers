import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    role: { type: String, enum: ["MEMBER", "LEADER", "ADMIN", "USER"], default: "MEMBER" }
},
    { collection: "project_users" });

const model = mongoose.model("UserModel", userSchema, "Winners");

const findAllUsers = async (req, res) => {
    console.log("Server attempting get all users")
    const users = await model.find();
    res.json(users);
};



// -------------------------------

function UserRoutes(app) {

    app.get('/', (req, res) => {
        res.send('You have connected to Losers! There\'s nothing to see here ')
    });



    app.get("/api/users", findAllUsers);
    

}

export default UserRoutes
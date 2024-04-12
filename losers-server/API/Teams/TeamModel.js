import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    Project_Name: { type: String, required: true },
    p_id: { type: String, required: true, unique: true },
    Project_Description: String,
    Leader_ID: { type: String, required: true },
    Team_Members_ID: { type: [String], required: true },
    Project_Stages: [{
        Pro_Stage: { type: String, required: true },
        Pro_Complete: { type: Boolean, default: false },
        Pro_Assigned: { type: [String], required: true }
    }],
    Completed_Project: { type: Boolean, default: false }
});

const Team = mongoose.model("Team", teamSchema);

export default Team;

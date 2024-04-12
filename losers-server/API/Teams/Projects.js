import Team from "./TeamModel.js";

export default function Projects(app) {
    // Test route
    app.get('/test', async (req, res) => {
        try {
            const project = await Team.findOne({ Project_Name: 'Team(2-1)' });
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.json(project.Team_Members_ID);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Get projects of a certain user AS LEADER
    app.get('/api/projects/user/:uid/leader', async (req, res) => {
        const { uid } = req.params;
        try {
            const projects = await Team.find({ Leader_ID: uid });
            res.json(projects);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Get projects of a certain user
    app.get('/api/projects/user/:uid', async (req, res) => {
        const { uid } = req.params;
        try {
            const projects = await Team.find({
                $or: [{ Leader_ID: uid }, { Team_Members_ID: uid }]
            });
            res.json(projects);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Get all projects
    app.get('/api/projects', async (req, res) => {
        try {
            const projects = await Team.find();
            res.json(projects);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}

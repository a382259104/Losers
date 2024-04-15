import Team from "./TeamModel.js";

export default function ProjectStatusAPI(app) {
    // Test route
    app.get('/test/team/test/ps', (req, res) => {
        res.send("ps test");
    });

    // Get certain project stage of current project stages
    app.get('/api/projects/team/:tid/stages/:stid', async (req, res) => {
        const { tid, stid } = req.params;
        try {
            const project = await Team.findOne({ p_id: tid });
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            const stage = project.Project_Stages.find(s => s.Pro_Stage === stid);
            res.json(stage);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Get all project stages of current project
    app.get('/api/projects/team/:tid/stages', async (req, res) => {
        const { tid } = req.params;
        try {
            const project = await Team.findOne({ p_id: tid });
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.json(project.Project_Stages);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Get all project info for current project
    app.get('/api/projects/team/:tid', async (req, res) => {
        const { tid } = req.params;
        try {
            const project = await Team.findOne({ p_id: tid });
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.json(project);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Add new project status to current project
    app.post('/api/projects/team/:tid', (req, res) => {
        // Implement the post route logic here
        // TODO: ADD PROJECT FROM DATA FROM API
    });

    // Update project status - complete status
    // Implement update route logic here

    // Update project status - assign member
    // Implement update route logic here
}

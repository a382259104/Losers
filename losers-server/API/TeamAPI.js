import db from '../db_Server/index.js'

export default function Projects(app) {
    //always for test
    //test test
    app.get('/test', (req, res) => {
        const project = db.teams.filter((p) => p.Project_Name === 'Team(2-1)');
        const members = project.map((p) => p.Team_Members_ID);
        res.send(members)
    })

    //get projects of a certain user AS LEADER
    //good
    app.get('/api/projects/user/:uid/leader', (req, res) => {
        const { uid } = req.params;
        const projects = db.teams.filter
            ((p) => p.Leader_ID === uid)
        res.send(projects)
    })

    //get projects of a certain user
    //good
    app.get('/api/projects/user/:uid', (req, res) => {
        const { uid } = req.params;
        const projects = db.teams.filter
            ((p) => ((p.Leader_ID === uid) || (p.Team_Members_ID.includes(uid))))
        res.send(projects)
    })

    //get all projects (mainly for test)
    //good
    app.get('/api/projects', (req, res) => {
        const projects = db.teams
        res.send(projects)
    })


}
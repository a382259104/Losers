import db from '../db_Server/index.js'

export default function ProejectStatusAPI(app) {
    //always for test
    //test test
    app.get('/test/team/test/ps', (req, res) => {
        res.send("ps test")
    })

    //Get certain project stage of current project stages
    app.get('/api/projects/team/:tid/stages/:stid', (req, res) => {
        const { tid } = req.params;
        const { stid } = req.params;
        const project = db.teams.filter((p) => p.p_id === tid)
        const stages = project[0].Project_Stages
        const stage = stages.filter((s) => s.Pro_Stage === stid)
        res.send(stage)
    })


    //Get all project stages of current project
    app.get('/api/projects/team/:tid/stages', (req, res) => {
        const { tid } = req.params;
        const project = db.teams.filter((p) => p.p_id === tid)
        const stages = project[0].Project_Stages
        res.send(stages)
    })

    //Get all project info for current project
    app.get('/api/projects/team/:tid', (req, res) => {
        const { tid } = req.params;
        const project = db.teams.filter((p) => p.p_id === tid)
        res.send(project)
    })
    //Add new project status to current project
    app.post('/api/projects/team/:tid', (req, res) => {
        
    })

    //Update project status - complete status


    //Update project status - assign member
}
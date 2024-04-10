import db from '../db_Server/index.js'

export default function ProejectStatusAPI(app){
    //Get project status for current project
    app.get('api/project/:tname/project_status',(req,res) => {
        const {tname} = req.params;
        const project = db.teams.filter((p) => p.Project_Name === tname)
        res.send(project)
    })
    //Add new project status to current project

    
    //Update project status - complete status


    //Update project status - assign member
}
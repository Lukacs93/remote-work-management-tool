import React, { useCallback, useState } from 'react'

import TaskList from './tasks/TaskList.jsx'
import ProjectList from './projects/ProjectList.jsx'
import './ProjectDashboard.css'

const ProjectDashboard = () =>
{

const [Dashboard, changeDashboard] = useState(true)






    return (
        <div>
                <button onClick={()=>{changeDashboard(true)}} className = "basic-button" >My Projects</button>
                <button onClick={()=>{changeDashboard(false)}} className = "basic-button" >My Tasks</button>
                {Dashboard && (<div><ProjectList /></div>)}
                {!Dashboard && (<div><TaskList /></div>)}
        </div>
    )
}

export default ProjectDashboard
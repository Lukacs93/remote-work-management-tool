import React, { useCallback, useState } from 'react'

import ListTasks from './Tasks/ListTasks.jsx'
import ListProjects from './Projects/ListProjects.jsx'

const ProjectDashboard = () =>
{

const [Dashboard, changeDashboard] = useState(true)






    return (
        <div>
                <button onClick={()=>{changeDashboard(true)}}>My Projects</button>
                <button onClick={()=>{changeDashboard(false)}}>My Tasks</button>
                {Dashboard && (<div><ListProjects /></div>)}
                {!Dashboard && (<div><ListTasks /></div>)}

                
        </div>
    )
}

export default ProjectDashboard
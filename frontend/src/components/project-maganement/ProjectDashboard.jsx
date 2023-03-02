import React, { useCallback, useState } from 'react'
import CreateProject from './projects/CreateProject.jsx'
import TaskList from './tasks/TaskList.jsx'
import ProjectList from './projects/ProjectList.jsx'
import './ProjectDashboard.css'

const ProjectDashboard = () =>
{

const [Dashboard, changeDashboard] = useState(true)
const [isSubmit, setIsSubmit] = useState(false)





    return (
        <div>
            
                <button onClick={()=>{changeDashboard(true)}} className = "basic-button" >My Projects</button>
                <button onClick={()=>{changeDashboard(false)}} className = "basic-button" >My Tasks</button>
                <CreateProject setIsSubmit={setIsSubmit} isSubmit={isSubmit}/>
                {Dashboard && (<div  className='fbox'><ProjectList isSubmit={isSubmit} setIsSubmit={setIsSubmit}/></div>)}
                {!Dashboard && (<div><TaskList /></div>)}
        </div>
    )
}

export default ProjectDashboard
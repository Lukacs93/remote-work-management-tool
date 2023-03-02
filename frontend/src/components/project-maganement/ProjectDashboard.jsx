import React, {  useState } from 'react'
import CreateProject from './projects/CreateProject.jsx'
import TaskList from './tasks/TaskList.jsx'
import ProjectList from './projects/ProjectList.jsx'

import './ProjectDashboard.css'

const ProjectDashboard = () =>
{

const [Dashboard, changeDashboard] = useState("none")
const [Option, changeOption]=useState("none")
const [isSubmit, setIsSubmit] = useState(false)





    return (
        <div className='dashboard'>
            
                <button onClick={()=>{changeDashboard("Projects")}} className = "basic-button" >My Projects</button>
                <button onClick={()=>{changeDashboard("Tasks")}} className = "basic-button" >My Tasks</button>
                
                {Dashboard==="Projects" && (<div>
                    <button onClick={()=>{changeOption("Create")}} className = "basic-button-option" >Create Project</button>
                    
                    {Option==="Create"&&(<CreateProject setIsSubmit={setIsSubmit} changeOption={changeOption} isSubmit={isSubmit} className='create-project'/>)}
                                                        <div  className='fbox'>
                                                            <ProjectList isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
                                                        </div>
                                                 </div>)}
                {Dashboard==="Tasks" && (<div>   <TaskList /></div>)}
        </div>
    )
}

export default ProjectDashboard
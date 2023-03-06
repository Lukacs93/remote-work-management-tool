import React, {  useState } from 'react'
import CreateProject from './projects/CreateProject.jsx'
import ProjectList from './projects/ProjectList.jsx'
import './ProjectDashboard.css'

const ProjectDashboard = () =>
{
    const [Option, changeOption]=useState("none")
    const [showSearch, setShowSearch] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [showForm, setShowForm] = useState(false)
    
    const handleCreateNewTask = () => {
        setShowForm(!showForm)
        setIsSubmit(!isSubmit)
    }
    
    return (
        <div>
            <div onClick={handleCreateNewTask} className="add-new-container">
                <div className="minimize-add-new-project">
                    <button className="add-new-button"  type="button">
                        <span className="add-new-button-icon">
                            +
                        </span>
                    </button>
                    <div>Add New Project</div>
                </div>
            </div>
            {showForm && (
                <div>
                    <CreateProject
                        changeOption={changeOption}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        isSubmit={isSubmit}
                        setIsSubmit={setIsSubmit}
                        className='add-task-form-container'
                    />
                </div> 
            )}
            <div>
                <ProjectList isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
            </div>
    </div>
    )
}

export default ProjectDashboard
import React, {  useState } from 'react'
import CreateProject from './projects/CreateProject.jsx'
import ProjectList from './projects/ProjectList.jsx'
import './ProjectDashboard.css'

const ProjectDashboard = ({ user, token, props }) =>
{
    const [Option, changeOption]=useState("none")
    const [isSubmit, setIsSubmit] = useState(false)
    const [showForm, setShowForm] = useState(false)
    
    const handleCreateNewTask = () => {
        setShowForm(!showForm)
        setIsSubmit(!isSubmit)
    }
    
    return (
        <div className="project-list-wrapper">
            <div className="project-list-action-button-container">
                <div className="project-list-search-container">
                    <form className="task-list-search-input-container">
                        {/*<i className="fa fa-search"></i>*/}
                        <input className="task-list-search-input" type="search" placeholder="Search..."/>
                    </form>
                </div>
                <div onClick={handleCreateNewTask} className="add-new-container">
                    <div className="minimize-add-new">
                        <button className="add-new-button"  type="button">
                            <span className="add-new-button-icon">
                                +
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {showForm && (
                <div>
                    <CreateProject
                        loggedInUser={user}
                        changeOption={changeOption}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        isSubmit={isSubmit}
                        setIsSubmit={setIsSubmit}
                        user={props.userid}
                        className='add-task-form-container'
                    />
                </div> 
            )}
            <div>
                <ProjectList userid={props.userid} token={token} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
            </div>
    </div>
    )
}

export default ProjectDashboard
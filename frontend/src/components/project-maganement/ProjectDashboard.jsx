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
        <div >
             <div className="task-header-button-container">
        { showSearch &&
            <div className={`search-container ${showSearch ? "show" : ""}`}></div>
        }

        { isSubmit && (<div><CreateProject setIsSubmit={setIsSubmit} changeOption={changeOption} isSubmit={isSubmit} setShowForm={setShowForm} showForm={showForm} className='add-task-form-container'/></div> )}
       
        <button className="search-btn-project" onClick={() => setShowSearch(!showSearch)}>
            <i className="fa fa-search"></i>
            </button>

        <button onClick={handleCreateNewTask} className="new-btn">New</button>
    </div>

    <div className='fbox'>
        <ProjectList isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
         </div>
    </div>
    )
}

export default ProjectDashboard
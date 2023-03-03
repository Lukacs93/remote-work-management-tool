import React, {  useState } from 'react'
import CreateProject from './projects/CreateProject.jsx'
import ProjectList from './projects/ProjectList.jsx'
import './ProjectDashboard.css'

const ProjectDashboard = () =>
{

const [Option, changeOption]=useState("none")
const [showSearch, setShowSearch] = useState(false)
const [isSubmit, setIsSubmit] = useState(false)
const [wantToCreate, setWantToCreate] =useState(false)
const [showForm, setShowForm] = useState(false)

const handleCreateNewTask = () => {
    setShowForm(!showForm)
    setIsSubmit(!isSubmit)
    setWantToCreate(!wantToCreate)
}


    return (
        <div >
             <div className="project-header-container">
                 <div>
                    <p className="project-header-text">Projects</p>
                 </div>
        { showSearch &&
            <div className={`search-container ${showSearch ? "show" : ""}`}></div>
        }

        { wantToCreate && (<div><CreateProject setWantToCreate={setWantToCreate}
         wantToCreate = {wantToCreate}
          changeOption={changeOption}
            setShowForm={setShowForm}
             showForm={showForm}
             isSubmit={isSubmit}
             setIsSubmit={setIsSubmit}

             className='add-task-form-container'/></div> )}
       
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
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
             <header className="project-header-container">
                 <div className="title">Projects</div>
                 <div className="task-header-button-container">
                     {showSearch &&
                         <div className={`search-container ${showSearch ? "show" : ""}`}>
                             <input type="text" placeholder="Search" />
                         </div>
                     }
                     <button className="search-btn" onClick={() => setShowSearch(!showSearch)}><i className="fa fa-search"></i></button>
                     <button onClick={handleCreateNewTask} className="new-btn">New</button>
                 </div>
             </header>
                        
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
import React, { useState } from 'react'
import ModifyProject from './ModifyProject.jsx'
import UserList from './UsersList'
import './Project.css'

const Project = (props) => {
    const [modal,setModal]=useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showSuccessText, setShowSuccessText] = useState(false)
    
    const handleClick=async ()=>{
        await fetch(await fetch(`https://localhost:7029/projects/${props.id}`,{
            method: 'DELETE'
        }))
        
        setShowSuccessText(true)
        
        setTimeout(() => {
            setShowDetails(false)
            props.setIsSubmit(!props.IsSubmit)
            setShowSuccessText(false)
        }, 2000);

    }

    return(
        <div className="single-project-container">
            <div className="single-project">
                <div>
                    <div className="project-id">ProjectID: {props.project.id}</div>
                    <div className="date-id">DateID: {props.project.dateId}</div>
                    <div className="manager-id">ManagerID: {props.project.managerId}</div>
                    {props.project.usersInTheProject.$values !== null && (
                        <div className="users">
                            <div className="users-title">Users in the project:</div>
                            {props.project.usersInTheProject.$values.map(user => {
                                return <UserList user={user}/>
                            })}
                        </div>
                    )}
                    <div className="project-status">Project Status: {props.project.projectStatus}</div>
                    <button onClick={() => setShowDetails(!showDetails)}>See More</button>
                </div>
            </div>
            <div className={`App ${showDetails ? "project-details-open" : ""}`}>

                {showDetails ?
                    <div className="project-details-popup-wrapper">
                        {showSuccessText ? 
                            <div className="project-details-content animate">
                                <p className="project-delete-message">Project Successfully Deleted</p>
                            </div>
                            :
                            <div className="project-details-content animate">
                                <div>
                                <span onClick={() => setShowDetails(!showDetails)}
                                      className="project-details-close">
                                    &times;
                                </span>
                                </div>
                                <header className="project-details-header">
                                    <div className="single-project-button-container">
                                        <button className='single-project-button' onClick={() => {
                                            setModal(!modal)
                                        }}>Modify
                                        </button>
                                        <button className='single-project-button'>Tasks for the Project</button>
                                        <button className='single-project-button'
                                                onClick={handleClick}>Delete
                                        </button>
                                    </div>
                                </header>
                                <div className="project-details-container">
                                    <div className="project-description">
                                        <h2>Project Details</h2>
                                        <p>Purpose of the project is to improve organizational efficiency, increase
                                            profitability, reduce costs, or create new business opportunities. It may
                                            involve the development of new products or services, the implementation of
                                            new technology or processes, or the expansion of existing operations into
                                            new markets or geographies.
                                        </p>
                                    </div>
                                    <div className="project-id">ProjectID: {props.project.id}</div>
                                    <div className="date-id">DateID: {props.project.dateId}</div>
                                    <div className="manager-id">ManagerID: {props.project.managerId}</div>
                                    {props.project.usersInTheProject.$values !== null && (
                                        <div className="users">
                                            <div className="users-title">Users in the project:</div>
                                            {props.project.usersInTheProject.$values.map(user => {
                                                return <UserList user={user}/>
                                            })}
                                        </div>
                                    )}
                                    <div className="project-status">Project Status: {props.project.projectStatus}</div>
                                </div>

                                {modal &&
                                    (<div>
                                        <ModifyProject
                                            setIsLoading={props.setIsLoading} isModified={props.isModified}
                                            setIsModified={props.setIsModified} project={props.project}
                                            setIsSubmit={props.setIsSubmit} isSubmit={props.isSubmit} modal={modal}
                                            setModal={setModal} class='modify-project'/>
                                    </div>)
                                }
                                <div className="project-details-btn-container">
                                    <span>
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}


export default Project
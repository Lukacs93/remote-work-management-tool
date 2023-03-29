import React, { useState } from 'react'
import ModifyProject from './ModifyProject.jsx'
import UserList from './UsersList'
import './Project.css'
import PopUpWindow from '../popup/BaseWindow.jsx'

const Project = (props) => {
    const [modal,setModal]=useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showSuccessText, setShowSuccessText] = useState(false)
    
    const [showPupUp, setShowPupUp] =useState(false);
    const [targetWindow, setTargetWindow] = useState("");

    const handleClick=async ()=>{
        await fetch(await fetch(`https://localhost:7029/projects/${props.id}`,{
            method: 'DELETE'
        }))
        setShowPupUp(false)
        setShowSuccessText(true)
        
        setTimeout(() => {
            setShowPupUp(false)
            props.setIsSubmit(!props.IsSubmit)
            setShowSuccessText(false)
        }, 2000);

    }

    const handleClose=()=>{
        setShowPupUp(false);
    }
    const handlePopUp=(incTarget)=>{
        setTargetWindow(incTarget)
        setShowPupUp(true);
    }

    return(
        <div className="single-project-container">
            <div className="single-project" onClick={()=>handlePopUp('Project')}>
                <div className="single-project-close-button-container">
                    
                <button className="single-project-close-button">&times;</button>
                </div>
                <div className="project-id">Title</div>
                <div className="project-id">ProjectID: {props.project.id}</div>
                <div className="date-id">DateID: {props.project.dateId}</div>
                <div className="manager-id">ManagerID: {props.project.managerId}</div>
                {props.project.usersInTheProject !== null && (
                    <div className="users">
                        <div className="users-title">Users in the project:</div>
                        {props.project.usersInTheProject.map(user => {
                            return <UserList user={user}/>
                        })}
                    </div>
                )}
                <div className="project-status">Project Status: {props.project.projectStatus}</div>
                <button className="see-more-button">See More</button>
            </div>
            {showPupUp ?  <PopUpWindow typeOfPopUp="Project" targetWindow={targetWindow} onClose={handleClose} deleteFunc={handleClick} props={props}></PopUpWindow> : "" }                     
            {showSuccessText ? 
                            <div className="project-details-content animate">
                                <p className="project-delete-message">Project Successfully Deleted</p>
                            </div>
                            :
                            <div className="project-details-content animate">            
                            </div>
                        }
        </div>
    )
}


export default Project
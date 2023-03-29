import React, { useState,useEffect } from 'react'
import ModifyProject from './ModifyProject.jsx'
import UserList from './UsersList'
import './Project.css'
import PopUpWindow from '../popup/BaseWindow.jsx'
import Date from '../date/Date'

const Project = (props) => {
    const [modal,setModal]=useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showSuccessText, setShowSuccessText] = useState(false)
    const taskLink=`/tasks/${props.project.id}`
    const [showPupUp, setShowPupUp] =useState(false);
    const [targetWindow, setTargetWindow] = useState("");
    const [dates,setDates]=useState()

    useEffect(()=>
    {
        const getDates=async()=>{
            await fetch(`https://localhost:7029/dates/${props.project.dateId}`)
                .then((resp)=>resp.json())
                .then((resp)=>{setDates(resp)
                    setTimeout(() => {
                    }, 3000);
                })
        }
        getDates()

    },[modal])





    const handleClick=async ()=>{
        await fetch(await fetch(`https://localhost:7029/projects/${props.project.id}`,{
            method: 'DELETE',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
            },
        }))
        
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
                <div className="project-id">Title: {props.project.name}</div>
                <div className="manager"> Manager: {props.manager.firstName} {props.manager.lastName}</div>
                {props.project.usersOnProject.length !== null && (
                    <div className="users">
                        <div className="users-title">Users in the project: {props.project.usersOnProject.length+1}</div>
                        
                    </div>
                )}
                <div className="project-status">Project Status: {props.project.projectStatus}</div>
                <button className="see-more-button">See More</button>
            </div>
            {showPupUp ?  <PopUpWindow typeOfPopUp="Project" targetWindow={targetWindow} onClose={handleClose} deleteFunc={handleClick} props={props}></PopUpWindow> : "" }                     
                {showDetails ?
                <div className={`App ${showDetails ? "project-details-open" : ""}`}>
                    <div className="project-details-popup-wrapper">
                        {showSuccessText ? 
                            <div className="project-details-content animate">
                                <p className="project-delete-message">Project Successfully Deleted</p>
                            </div>
                            :
                            <div className="project-details-content animate">
             
                                
                                <div className="project-details-container">
                                    <div className="project-description">
                                        <h1 className='projectDetailsHeader'>Details</h1>
                                        <p className="projectDescriptionParagraph">{props.project.description}
                                        </p>
                                    </div>
                                    <div className="project-details">
                                        <div className="project-id">Title: {props.project.name}</div>
                                        <div className="manager"> Manager: {props.manager.firstName} {props.manager.lastName}</div>
                        {dates!==undefined && <Date date={dates}/>}
                                        {props.project.usersOnProject !== null && (
                                            <div className="users">
                                                <div className="users-title">Users in the project: {props.project.usersOnProject.map(user => {
                                                    return <UserList user={user}/>
                                                })}</div>

                                            </div>
                                        )}
                                        <div className="project-status">Project Status:
                                        {
                                            props.project.projectStatus === 1 ? " In Progress"
                                                : props.project.projectStatus === 2 ? " Review"
                                                    : props.project.projectStatus === 3 ? " Done" 
                                                        : " Not Started"
                                        }
                                        
                                        </div>
                                    </div>
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
                            </div>
                        }
                    </div>
            </div> 
                    :
                    ""
                }
        </div>
    )
}


export default Project
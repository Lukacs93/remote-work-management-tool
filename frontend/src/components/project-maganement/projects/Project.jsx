import React, { useState,useEffect } from 'react'
import ModifyProject from './ModifyProject.jsx'
import UserList from './UsersList'
import './Project.css'
import Date from '../date/Date'
import {Link} from "react-router-dom";

const Project = (props) => {
    const [modal,setModal]=useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showSuccessText, setShowSuccessText] = useState(false)
    const taskLink=`/tasks/${props.project.id}`
    const handleClick=async ()=>{
        await fetch(await fetch(`http://localhost:7029/projects/${props.project.id}`,{
            method: 'DELETE',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
            },
        }))
        
        setShowSuccessText(true)
        
        setTimeout(() => {
            setShowDetails(false)
            props.setIsSubmit(!props.IsSubmit)
            setShowSuccessText(false)
        }, 2000);
    
    }

    const [dates,setDates]=useState()

    useEffect(()=>
    {
        const getDates=async()=>{
            await fetch(`http://localhost:7029/dates/${props.project.dateId}`)
                .then((resp)=>resp.json())
                .then((resp)=>{setDates(resp)
                    setTimeout(() => {
                    }, 3000);
                })
        }
        getDates()
        console.log(props.project)
    },[modal])

    return(
        <div className="single-project-container">
            <div className="single-project" onClick={() => setShowDetails(!showDetails)}>
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

                {showDetails ?
                <div className={`App ${showDetails ? "project-details-open" : ""}`}>
                    <div className="project-details-popup-wrapper">
                        {showSuccessText ? 
                            <div className="project-details-content animate">
                                <p className="project-delete-message">Project Successfully Deleted</p>
                            </div>
                            :
                            <div className="project-details-content animate">
             
                                <div className="project-details-btn-container">
                                    <div>
                                        <button className='single-project-button' onClick={() => {
                                            setModal(!modal)
                                        }}>Edit
                                        </button>
                                        <button className='single-project-button'>Assign</button>
                                        <Link to={taskLink}  role="button">
                                        <button className='single-project-button' >Tasks</button>
                                        </Link>
                                        <button className='single-project-button'
                                                onClick={handleClick}>Delete
                                        </button>
                                        
                                    </div>
                                    <div>
                                        <span onClick={() => setShowDetails(!showDetails)}
                                              className="project-details-close">
                                            &times;
                                        </span>
                                    </div>
                                </div>

                                <div className="project-details-container">
                                    <div className="project-description">
                                        <h1 className='projectDetailsHeader'>Details</h1>
                                        <p className="projectDescriptionParagraph">{props.project.description}
                                        </p>
                                    </div>
                                    <div className="project-details">
                                        <div className="project-id">Title: {props.project.name}</div>
                                        <div className="manager"> Manager: {props.manager.firstName} {props.manager.lastName}</div>
                                        <Date date={dates}/>
                                        {props.project.usersOnProject !== null && (
                                            <div className="users">
                                                <div className="users-title">Users in the project: {props.project.usersOnProject.map(user => {
                                                    return <UserList user={user}/>
                                                })}</div>

                                            </div>
                                        )}
                                        <div className="project-status">Project Status: {props.project.projectStatus}</div>
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
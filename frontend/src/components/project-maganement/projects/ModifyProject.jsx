import React, { useState } from 'react'
import './ModifyProject.css'

const UpdateProject = (props) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    const [form,setForm]=useState(
        {
        "id": props.project.id,
        "DateId": 0,
        "ManagerID": 0,
        "ProjectStatus": 0,
        "usersInTheProject": props.project.usersInTheProject,
        "tasks": props.project.tasks
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        console.log(props.project)
        await fetch(`https://localhost:7029/projects/${props.project.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        setShowSuccessText(true)
        setTimeout(() => {
            props.setModal(!props.modal)
            setShowSuccessText(false)
        }, 2000);
        props.setIsModified(!props.isModified)
        props.setIsSubmit(!props.isSubmit)
    }

    return (
        <div className="update-project-container">
            <div className="update-project-form-container">
                {showSuccessText ?
                    <p className="project-delete-message">Project Successfully Updated</p>
                    :                    
                    <form className="update-project-form" onSubmit={handleSubmit}>
                        <h2>Update Project</h2>
                        <input className="update-project-input" id="DateID" 
                             placeholder='DateID'
                             onChange={(e) => setForm({...form, DateId: parseInt(e.target.value)})}
                         />
                        <input className="update-project-input" id="ManagerID"
                              placeholder='ManagerID'
                              onChange={(e) => setForm({...form, ManagerID: parseInt(e.target.value)})}
                        />
                        <input className="update-project-input" id="ProjectStatus"
                              placeholder='Project Status'
                              onChange={(e) => setForm({...form, ProjectStatus: parseInt(e.target.value)})}
                        />
                        <button className="update-project-submit-button" type="submit">Update</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UpdateProject
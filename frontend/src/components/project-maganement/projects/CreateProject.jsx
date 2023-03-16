import React, { useState } from 'react'
import './CreateProject.css'

const CreateProject = (props) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    const [Form,setForm]=useState({
        "DateId": 712,
        "ManagerId": 742,
        "ProjectStatus": 720
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(Form)
    
        await fetch('https://localhost:7029/projects',{
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Form)
        })
        setShowSuccessText(true)
        
        setTimeout(() => {
            props.setShowForm(!props.showForm)
            setShowSuccessText(false)
        }, 2000);
    
        props.setIsSubmit(!props.isSubmit)
        props.changeOption("none")
    }
    
    return (
        <div className="add-task-form-container">
            <div>
                {showSuccessText ?
                    <p className="success-message">Project Successfully Created</p>
                    :
                    <form onSubmit={handleSubmit} className="add-task-form">
                        <input id="ManagerId"
                               placeholder='ManagerId'
                               type="number"
                               onChange={(e) => setForm({...Form, ManagerId: parseInt(e.target.value)})}
                               className="add-task-input"
                        ></input>
                        <input id="ProjectStatus"
                               type="number"
                               placeholder='ProjectStatus'
                               className="add-task-input"
                               onChange={(e) => setForm({...Form, ProjectStatus: parseInt(e.target.value)})}
                        ></input>
                        <input id="DateId"
                               type="number"
                               placeholder='DateId'
                               className="add-task-input"
                               onChange={(e) => setForm({...Form, DateId: parseInt(e.target.value)})}
                        ></input>
                        <button className="task-submit-button">Create Project</button>
                    </form>
                }
            </div>
            <div className="close-button-container">
                <button onClick={() => props.setShowForm(!props.showForm)} className="close-button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default CreateProject
import React, { useState } from 'react'
import {Link, useParams} from "react-router-dom";
import './ModifyProject.css'
import Status from '../status/Status'

const UpdateProject = (props) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    const [form,setForm] = useState(
        {
        "id": props.project.id,
        "DeadLine": "",
        "ProjectStatus": 0,
        "Finished":false,
        "tasks": props.project.tasks
    })

    const isValidDate=(dateString)=>{
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;
    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    
    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;
    
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    
    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    
    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
    }

    const isFinished=()=>{

        setForm({...form, Finished: !form.Finished})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
if(isValidDate(form.DeadLine))
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
                        <h2>Edit Project</h2>
                        <label>DeadLine
                        <input className="update-project-input" id="Date" 
                             placeholder='DD/MM/YYY'
                             onChange={(e) => setForm({...form, DeadLine: parseInt(e.target.value)})}
                         />
                         </label>
                        <Status className="update-project-input" id="ProjectStatus"
                              onChange={(e) => setForm({...form, ProjectStatus: parseInt(e.target.value)})}
                        />
                        {form.Finished && 
                        <button className="update-project-finished-button" onClick={isFinished}>Finished</button>}
                        {!form.Finished && 
                        <button className="update-project-finished-button" onClick={isFinished}>Not Finished</button>}

                        <button className="update-project-submit-button"  type="submit">Save</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UpdateProject
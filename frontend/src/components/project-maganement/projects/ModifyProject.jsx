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
        "name":props.project.name,
        "ProjectStatus": props.project.projectStatus,
        "tasks": props.project.tasks,
        "dateId":props.project.dateId
    })

    const [deadLine,setDeadLine]=useState(
        {
            "deadline":null
        })

    const isValidDate=(dateString)=>{
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString.deadline))
        {

            return false;
        }
    // Parse the date parts to integers
    var parts = dateString.deadline.split("/");
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

    const setStatus=(status)=>{
        setForm({...form, ProjectStatus: parseInt(status)})
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

if(deadLine.deadline !== null)
{
    
    if(isValidDate(deadLine)){
    if(form.name==="" || form.name===undefined)
    {

        await fetch(`https://localhost:7029/projects/${props.project.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        
        setShowSuccessText(true)
        
        setTimeout(() => {
            props.toDefault('Project');
            setShowSuccessText(false)
        }, 2000);
        
        props.setIsModified(!props.isModified)
        props.setIsSubmit(!props.isSubmit)
    }
            if(props.project.dateId!== null){
                console.log(deadLine.deadline)
           await fetch(`https://localhost:7029/dates/${props.project.dateId}`,{
                method: 'PUT',
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deadLine.deadline)
            })

            setShowSuccessText(true)
            
            setTimeout(() => {
                props.setModal(!props.modal)
                setShowSuccessText(false)
            }, 2000);
        }
        else{
            
           const resp = await fetch(`https://localhost:7029/dates/project/${props.project.id}`,{
                method: 'POST',
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deadLine.deadline)
            })
            const data=await resp.json()

            form.dateId = data

            setShowSuccessText(true)
            
            setTimeout(() => {
                props.setModal(!props.modal)
                setShowSuccessText(false)
            }, 2000);
        }
        
        }
    }
    await fetch(`https://localhost:7029/projects/${form.id}`,{
        method: 'PUT',
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

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
                        <label>Name
                        <input className="update-project-input" id="Name" 
                             placeholder='Name'
                             onChange={(e) => setForm({...form, Name: e.target.value})}
                         />
                         </label>
                        <label>DeadLine
                        <input className="update-project-input" id="Date" 
                             placeholder='DD/MM/YYYY'
                             onChange={(e) => setDeadLine({ deadline: e.target.value})}
                         />
                         </label>

                        <Status setStatus={setStatus} status={form.ProjectStatus} />
                        
                        <button className="update-project-submit-button"  type="submit">Save</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UpdateProject
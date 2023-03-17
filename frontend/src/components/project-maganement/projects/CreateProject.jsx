import React, { useState } from 'react'
import './CreateProject.css'

const CreateProject = (props) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    const [Form,setForm]=useState(
        {
        "DeadLine":"",
        "ManagerId":parseInt(props.user),
        "ProjectName":"",
        "Description": "",
        "ProjectStatus": 0
            
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(Form)
        if(isValidDate(Form.DeadLine)) {
            await fetch('https://localhost:7029/projects', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
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
        else{
            alert('Invalid date format!')
        }
    }
    console.log(props.loggedInUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
    return (
        <div className="add-task-form-container">
            <div>
                {showSuccessText ?
                   props.loggedInUser && props.loggedInUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin'
                        || props.loggedInUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'ProjectManager'
                        ?
                        <p className="success-message">Project Successfully Created</p> 
                        :   
                        <p className="success-message error-message">You dont have permission to create a project</p>
                    :
                    <form onSubmit={handleSubmit} className="add-task-form">

                        <input id="ProjectName"
                               placeholder='Project Name'
                               className="add-task-input"
                               onChange={(e) => setForm({...Form, ProjectName: e.target.value})}
                        ></input>
                        <input id="Description"
                               placeholder='Description'
                               className="add-task-input"
                               onChange={(e) => setForm({...Form, Description: e.target.value})}
                        ></input>
                        <input id="Date"
                               placeholder='DD/MM/YYYY'
                               className="add-task-input"
                               onChange={(e) => setForm({...Form, DeadLine: e.target.value})}
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
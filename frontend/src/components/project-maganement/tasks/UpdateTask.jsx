import React, { useState } from 'react'

const UpdateTask = ({ taskItem }) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    
    const [form,setForm] = useState (
        {
            "id": taskItem.id,
            "dateId": 0,
            "projectId": 20,
            "description": "",
            "note": "Empty Note",
            "taskStatus": 0
        })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch(`https://localhost:7029/task/${taskItem.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        setShowSuccessText(true)

        setTimeout(() => {

            setShowSuccessText(false)
        }, 2000);
        
    }
    
    return (
        <div className="update-project-container">
            <div className="update-project-form-container">
                {showSuccessText ?
                    <p className="project-delete-message">Project Successfully Updated</p>
                    :
                    <form className="update-project-form" onSubmit={handleSubmit}>
                        <h2>Edit Project</h2>
                        <input className="update-project-input" id="DateID"
                               placeholder='DateID'
                               onChange={(e) => setForm({...form, dateId: parseInt(e.target.value)})}
                        />
                        <input className="update-project-input" id="ManagerID"
                               placeholder='ManagerID'
                               // onChange={(e) => setForm({...form, ManagerID: parseInt(e.target.value)})}
                        />
                        <input className="update-project-input" id="description"
                               placeholder='Description'
                               onChange={(e) => setForm({...form, description: e.target.value})}
                        />
                        <input className="update-project-input" id="taskStatus"
                               placeholder='Task Status'
                               onChange={(e) => setForm({...form, taskStatus: parseInt(e.target.value)})}
                        />
                        <button className="update-project-submit-button" type="submit">Save</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UpdateTask
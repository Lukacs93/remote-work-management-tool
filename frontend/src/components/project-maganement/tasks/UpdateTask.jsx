import React, { useState,useEffect } from 'react'
import Status from '../status/Status'

const UpdateTask = ({ taskItem,doReload }) =>
{
    const [showSuccessText, setShowSuccessText] = useState(false)
    
    const [form,setForm] = useState (
        {
            "id": taskItem.id,
            "name":"",
            "description":"",
            "taskStatus":-1,
            "dateId":taskItem.dateId,
            "projectId":taskItem.projectId
        })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        await fetch(`http://localhost:7029/task/${taskItem.id}`,{
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
    useEffect(()=>{

doReload(true)
setTimeout(() => {

    doReload(false)
}, 2000);
    },[showSuccessText])


const setStatus=(status)=>{
    setForm({...form, taskStatus: parseInt(status)})
}

    return (
        <div className="update-project-container">
            <div className="update-project-form-container">
                {showSuccessText ?
                    <p className="project-delete-message">Project Successfully Updated</p>
                    :
                    <form className="update-project-form" onSubmit={handleSubmit}>
                        <h2>Edit Project</h2>
                        <input className="update-project-input" id="description"
                               placeholder='Name'
                               onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                        <input className="update-project-input" id="description"
                               placeholder='Description'
                               onChange={(e) => setForm({...form, description: e.target.value})}
                        />
                        <Status setStatus={setStatus}/>

                        <button className="update-project-submit-button" type="submit">Save</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UpdateTask
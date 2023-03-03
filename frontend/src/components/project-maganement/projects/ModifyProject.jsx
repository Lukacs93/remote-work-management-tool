import React, { useState } from 'react'
import './ModifyProject.css'



const UpdateProject = (props) =>
{
const [form,setForm]=useState(
    {
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

    setTimeout(() => {
    }, 2000);
    props.setIsSubmit(!props.isSubmit)
    props.setisModified(!props.isModified)
    props.setModal(!props.modal)
}

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input id="DateID" 
                placeholder='DateID'
                 className='modify-input'
                 onChange={(e) => setForm({...form, DateId: parseInt(e.target.value)})}
                 ></input><br/>
                <input id="ManagerID"
                 placeholder='ManagerID'
                  className='modify-input'
                  onChange={(e) => setForm({...form, ManagerID: parseInt(e.target.value)})}
                  ></input><br/>
                <input id="ProjectStatus"
                 placeholder='Project Status'
                  className='modify-input'
                  onChange={(e) => setForm({...form, ProjectStatus: parseInt(e.target.value)})}
                  ></input><br/>

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProject
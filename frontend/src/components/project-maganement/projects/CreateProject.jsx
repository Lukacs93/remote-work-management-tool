import React, { useState } from 'react'


const CreateProject = (prop) =>
{
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Form)
    })

    setTimeout(() => {
    }, 2000);
    
    prop.setIsSubmit(!prop.isSubmit)
    prop.changeOption("none")
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="ManagerId" 
                placeholder='ManagerId'
                type="number"
                onChange={(e) => setForm({...Form, ManagerId: parseInt(e.target.value)})}
                ></input>
                <input id="ProjectStatus" 
                type="number"
                placeholder='ProjectStatus'
                onChange={(e) => setForm({...Form, ProjectStatus: parseInt(e.target.value)})}
                ></input>
                <input id="DateId"
                type="number"
                 placeholder='DateId'
                 onChange={(e) => setForm({...Form, DateId: parseInt(e.target.value)})}
                 ></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateProject
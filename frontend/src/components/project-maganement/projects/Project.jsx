import React, { useState } from 'react'
import ListTasks from '../tasks/TaskList'
import './Project.css'

const Project = (props) => {
    const [modal,setModal]=useState(false);


    console.log(props.project)
    return(
        <div className='single-project' >
            <div className='projects-div'>
                <div>ProjectID: {props.project.id}</div>
                <div>DateID: {props.project.dateId}</div>
                <div>ManagerID: {props.project.managerId}</div>
                Users in the project:{props.project.usersInTheProject.$values!==null &&( <div>{props.project.usersInTheProject.$values.map(user=>{return (<div>{user.firstName} {user.lastName}</div>)})}</div>)}
                
                {props.project.tasks.$values!==null &&(<div> <ListTasks /> </div>)}
                <div>Project Status: {props.project.projectStatus}</div>
            </div>
        </div>
    )
}


export default Project
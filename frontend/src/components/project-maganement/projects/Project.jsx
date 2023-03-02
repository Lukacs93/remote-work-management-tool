import React, { useState } from 'react'
import ListTasks from '../tasks/TaskList'
import UserList from './UsersList'
import './Project.css'

const Project = (props) => {
    const [modal,setModal]=useState(false);


    
    return(
        <div classNameName='single-project' >
            <div classNameName='projects-div'>
            <table className="tg">
<thead>
  <tr>
    <th className="tg-0lax">ProjectID: {props.project.id}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="tg-0lax">DateID: {props.project.dateId}</td>
  </tr>
  <tr>
    <td className="tg-0lax">ManagerID: {props.project.managerId}</td>
  </tr>
  {props.project.usersInTheProject.$values!==null &&(
  <tr>
    <td className="tg-0lax">Users in the project:
         <tr>{props.project.usersInTheProject.$values.map(user=>{  return <UserList user={user} />})}</tr>
         
    </td>
  </tr>
  )}
  <tr>
    <td className="tg-0lax">Project Status: {props.project.projectStatus}</td>
  </tr>
</tbody>
<tfoot>
    <button >Tasks for the Project</button>
</tfoot>
</table>
            </div>
        </div>
    )
}


export default Project
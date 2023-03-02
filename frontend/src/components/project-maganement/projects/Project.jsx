import React, { useState } from 'react'
import ModifyProject from './ModifyProject.jsx'
import UserList from './UsersList'
import './Project.css'

const Project = (props) => {
    const [modal,setModal]=useState(false);

const handleClick=async ()=>{
await fetch(await fetch(`https://localhost:7029/projects/${props.id}`,{
  method: 'DELETE'
}))
setTimeout(() => {}, 2000);

props.setIsSubmit(!props.IsSubmit)
}
    
    return(
      <div>
        <div className='single-project' >
            <div className='projects-div'>
             
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
    <button className='single-project-task-button'>Tasks for the Project</button>
</tfoot>
</table>

<button className='single-project-button' onClick={handleClick}>Delete</button>
<button className='single-project-button' onClick={()=>{setModal(!modal)}}>Modify</button>
            </div>
        </div>
        {modal && (<div>
              <ModifyProject setIsLoading={props.setIsLoading} isModified={props.isModified} setisModified={props.setisModified} project={props.project} setIsSubmit={props.setIsSubmit} isSubmit={props.isSubmit} modal={modal} setModal={setModal} className='modify-project'/>
            </div>)}
        </div>
    )
}


export default Project
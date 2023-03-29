import React from 'react';
import UserList from './UsersList';

const ProjectDetails = (project) =>{
    console.log(project.project);

    return(
        <>
        <div className="project-details-content animate">
            <div className="project-details-container"> 
                <div className="project-description">
                    <h2>Project Details</h2>
                    <p>{/*project.projectItem.details*/}</p>
                </div>
                <div className="project-id">ProjectID: {project.project.id}</div>
                <div className="date-id">DateID: {project.project.dateId}</div>
                <div className="manager-id">ManagerID: {project.project.managerId}</div>
                {project.project.usersInTheProject !== null && (
                    <div className="users">
                        <div className="users-title">Users in the project:</div>
                        {project.project.usersInTheProject.map(user=>{
                            return <UserList user={user}/>
                        })}
                    </div>
                )}
                <div className="project-status">Project Status: {project.project.projectStatus}</div>
            </div>
        </div>
        </>
    )
}
export default ProjectDetails;

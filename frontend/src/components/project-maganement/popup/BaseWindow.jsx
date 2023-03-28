import React, {useState} from 'react';
import "../tasks/Task.css";
import UpdateTask from '../tasks/UpdateTask';
import PopUpAssign  from '../tasks/PopUpAssign';
import PopUpList from '../tasks/PopUpList';
import ModifyProject from '../projects/ModifyProject'
import {Link} from "react-router-dom"

const PopUpWindow = ({typeOfPopUp, taskItem,onClose, targetWindow, deleteFunc, props}) =>{
    const [activeWindow, setActiveWindow] = useState(targetWindow)
    console.log(targetWindow)
    const handleActiveSelection = (selectedWindow) =>{
        setActiveWindow(selectedWindow);       
        
        //Possible options: Task, Edit, Assign, Users, Project, Delete
    }  
    const taskLink=`/tasks/${props.project.id}`;
    const TaskData ={
        Task: "Task details",
        Edit: <UpdateTask taskItem={taskItem}/>,
        Assign: <PopUpAssign taskItem={taskItem} />,
        Users: <PopUpList taskItem={taskItem} />,       
    }
    const ProjectData ={       
        Edit: <ModifyProject
        setIsLoading={props.setIsLoading} isModified={props.isModified}
        setIsModified={props.setIsModified} project={props.project}
        setIsSubmit={props.setIsSubmit} isSubmit={props.isSubmit} toDefault={handleActiveSelection}
         class='modify-project'/>,
        Assign: <PopUpAssign taskItem={taskItem} />,
        Users: <PopUpList taskItem={taskItem} />,
        Project: "Project details",
    }
if(typeOfPopUp ==="Task"){
    return (
        <>
            <div className={"App task-details-open"}>
                <div className='task-details-popup-wrapper'>
                    <div className="task-details-content task-animate">           
                        <div className="task-details-btn-container">
                            <div>              
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Task')}>Task</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Edit')}>Edit</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Assign')}>Assign</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Users')}>Users</button>
                                <button className='single-task-button' onClick={() => {deleteFunc(taskItem.id)}}>Delete</button>
                            </div>
                            <div>
                                <span onClick={() => onClose()}
                                className="task-details-close">
                                &times;
                                </span>
                            </div>
                        </div>
                        <div className='task-details-container'>
                            {TaskData[activeWindow]}
                        </div>
                    </div>
                </div>
            </div>
    
    
        </>
    )
}
else if(typeOfPopUp ==="Project"){
    return (
        <>
            <div className={"App task-details-open"}>
                <div className='task-details-popup-wrapper'>
                    <div className="task-details-content task-animate">           
                        <div className="task-details-btn-container">
                            <div>              
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Project')}>Project</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Edit')}>Edit</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Assign')}>Assign</button>
                                <button className='single-task-button' onClick={()=>handleActiveSelection('Users')}>Users</button>
                                <Link to={taskLink}  role="button">
        <button className='single-project-button' >Tasks</button>
        </Link>
                                <button className='single-task-button' onClick={() => {deleteFunc()}}>Delete</button>
                            </div>
                            <div>
                                <span onClick={() => onClose()}
                                className="task-details-close">
                                &times;
                                </span>
                            </div>
                        </div>
                        <div className='task-details-container'>
                            {ProjectData[activeWindow]}
                        </div>
                    </div>
                </div>
            </div>
    
    
        </>
    )
}

}
export default PopUpWindow;
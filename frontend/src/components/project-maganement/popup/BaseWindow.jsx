import React, {useState} from 'react';
import "../tasks/Task.css";
import UpdateTask from '../tasks/UpdateTask';
import PopUpAssign  from '../tasks/PopUpAssign';
import PopUpList from '../tasks/PopUpList';


const PopUpWindow = ({taskItem,onClose, targetWindow,deleteTaskItem}) =>{
    const [activeWindow, setActiveWindow] = useState(targetWindow)
    console.log(targetWindow)
    const handleActiveSelection = (selectedWindow) =>{
        setActiveWindow(selectedWindow);       
        
        //Possible options: Task, Edit, Assign, Users, Project, Delete
    }  

    const selectedData ={
        Task: "Task details",
        Edit: <UpdateTask taskItem={taskItem}/>,
        Assign: <PopUpAssign taskItem={taskItem} />,
        Users: <PopUpList taskItem={taskItem} />,
    }
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
                            <button className='single-task-button'>Delete</button>
                        </div>
                        <div>
                            <span onClick={() => onClose()}
                            className="task-details-close">
                            &times;
                            </span>
                        </div>
                    </div>
                    <div className='task-details-container'>
                        {selectedData[activeWindow]}
                    </div>
                </div>
            </div>
        </div>


    </>
)
}
export default PopUpWindow;
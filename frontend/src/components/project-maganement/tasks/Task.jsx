import React,{ useState } from 'react'
import './Task.css'
import PopUpWindow from "../popup/BaseWindow";


const Task = ({taskItem, deleteTaskItem}) => {
    const [showPupUp, setShowPupUp] =useState(false);
    const [targetWindow, setTargetWindow] = useState("");

    const handleClose=()=>{
        setShowPupUp(false);
    }
    const handleTest=(incTarget)=>{
        setTargetWindow(incTarget)
        setShowPupUp(true);
    }
    return (
        <>
   
            <tr className="task-content" >
                <td >
                    <p>name</p>
                </td>
                <td>
                    <p>{taskItem.description}</p>
                </td>
                <td>
                    <select className="task-status-dropdown">
                        <option value='notStarted'>Not Started</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='review'>Review</option>
                        <option value='done'>Done</option>
                    </select>
                </td>
                <td>2023-05-10</td>
                <td>2023-01-10</td>
                <td>                    
                    <div className="task-button-container">
                        <div className="task-show-more-button">
                            <div className="task-action-button" onClick={()=>handleTest('Edit')}>Edit</div>
                        </div>
                        <div className="task-show-more-button">
                            <div className="task-action-button" onClick={()=>handleTest('Assign')}>Assign</div>
                        </div>
                        <div className="task-show-more-button">
                            <div className="task-action-button" onClick={()=>handleTest('Users')}>Users</div>
                        </div>
                        <div className="task-show-more-button">
                            <span className="task-action-icon" onClick={()=>handleTest('Task')}>
                                &#xFE19;
                            </span>
                        </div>
                        <div className="task-action-icon" onClick={() => {deleteTaskItem(taskItem.id)}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>        
            {showPupUp ?  <PopUpWindow taskItem={taskItem} targetWindow={targetWindow} onClose={handleClose}></PopUpWindow> : "" }          
        </>
    )
}

export default Task
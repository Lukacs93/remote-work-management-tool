import React,{ useState } from 'react'
import './Task.css'
import PopUpAssign from "./PopUpAssign";
import PopUpList from "./PopUpList";
import UserList from "../projects/UsersList";
import UpdateTask from "./UpdateTask";


const Task = ({taskItem, deleteTaskItem}) => {
    const [showAssign, setShowAssign] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [updateTask, setUpdateTask] = useState(false);
    
    const handleClose=()=>{
        setShowAssign(false);
        setShowList(false);
    }

    return (
        <div>
            <div className="task-content" onClick={() => setShowDetails(true)}>
                <div>
                    <h2>name</h2>
                    <p>{taskItem.description}</p>
                </div>
                <select>
                    <option value='notStarted'>Not Started</option>
                    <option value='inProgress'>In Progress</option>
                    <option value='review'>Review</option>
                    <option value='done'>Done</option>
                </select>
                <div className="task-button-container">
                    <button onClick={() => setShowAssign(true)}>Assign Users</button>
                    <button onClick={() => setShowList(true)}>Assigned Users</button>
                    
                    <button>
                        Edit
                    </button>
                    <button onClick={() => {deleteTaskItem(taskItem.id)}}>
                        Delete
                    </button>
                </div>
            </div>

            {showDetails ?
                <div className={`App ${showDetails ? "task-details-open" : ""}`}>
                    <div className="task-details-popup-wrapper">
                        <div className="task-details-content task-animate">

                            <div className="task-details-btn-container">
                                <div>
                                    <button className='single-task-button'>Task</button>
                                    <button className='single-task-button' onClick={() => setUpdateTask(!updateTask)}>Edit</button>
                                    <button className='single-task-button' onClick={() => setShowAssign(!showAssign)}>Assign</button>
                                    <button className='single-task-button'>Project</button>
                                    <button className='single-task-button' onClick={() => {deleteTaskItem(taskItem.id)}}>Delete</button>
                                </div>
                                <div>
                                    <span onClick={() => setShowDetails(false)}
                                          className="task-details-close">
                                    &times;
                                    </span>
                                </div>
                            </div>
                            <div className="task-details-container">
                                {updateTask &&
                                    <UpdateTask taskItem={taskItem}/>
                                }
                                {showList ? (

                                    <PopUpList onClose={handleClose} taskItem={taskItem} />
                                ) 
                                    : 
                                    <div>
                                        
                                        
                                        {showAssign ?
                                            <PopUpAssign onClose={handleClose} taskItem={taskItem}/> 
                                            :
                                            <div>
                                                <div className="task-description">
                                                    <h2>Project Details</h2>
                                                    <span>Purpose of the project is to improve organizational efficiency, increase
                                                        profitability, reduce costs, or create new business opportunities. It may
                                                        involve the development of new products or services, the implementation of
                                                        new technology or processes, or the expansion of existing operations into
                                                        new markets or geographies.
                                                    </span>
                                                </div>
                                                    <div className="task-details">
                                                        <div className="task-id">Task ID: {taskItem.id}</div>
                                                        <div className="">Project: </div>
                                                        <div className="task-id">Name: Lorem Ipsum</div>
                                                        <div>Description: {taskItem.description}</div>
                                                        <div className="">Team members: {taskItem.usersOnTask.map(user => `${user.firstName} ${user.lastName}`).join(', ')}</div>
                                                        <div className="task-status">Project Status: {
                                                            taskItem.taskStatus === 1 ? "In Progress"
                                                                : taskItem.taskStatus === 1 ? "Review"
                                                                    : taskItem.taskStatus === 1 ? "Done" 
                                                                        :"Not Started"
                                                        }
                                                        </div>
                                                    </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}

export default Task
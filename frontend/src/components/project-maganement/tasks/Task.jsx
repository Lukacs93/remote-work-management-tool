import React,{ useState } from 'react'
import './Task.css'
import PopUpAssign from "./PopUpAssign";
import PopUpList from "./PopUpList";
import UserList from "../projects/UsersList";
import ModifyProject from "../projects/ModifyProject";


const Task = ({taskItem, deleteTaskItem}) => {
      const [showAssign, setShowAssign] = useState(false);
      const [showList, setShowList] = useState(false);
      const [showDetails, setShowDetails] = useState(false);
    
      const handleClose=()=>{
        setShowAssign(false);
        setShowList(false);
      }
  
    return (
        <div className="task-content" onClick={() => setShowDetails(!showDetails)}>
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
     
                  {showAssign && (
                      <div className="PopUpAssign-parent">
                          <PopUpAssign onClose={handleClose} taskItem={taskItem}/>
                      </div>
                  )}
                  {showList && (
                      <div className="PopUpList-parent">
                          <PopUpList onClose={handleClose} taskItem={taskItem} />
                      </div>)}
    
                    <button>
                        Edit
                    </button>
                    <button onClick={() => {deleteTaskItem(taskItem.id)}}>
                        Delete
                    </button>
              </div>
            
            {showDetails ?
            <div className={`App ${showDetails ? "task-details-open" : ""}`}>
                <div className="task-details-popup-wrapper">
                        <div className="task-details-content task-animate">

                                <div className="task-details-btn-container">
                                    <div>
                                        <button className='single-task-button'>Edit</button>
                                        <button className='single-task-button' onClick={() => setShowAssign(true)}>Assign</button>
                                        <button className='single-task-button'>Tasks</button>
                                        <button className='single-task-button'>Delete</button>
                                    </div>
                                    <div>
                                        <span onClick={() => setShowDetails(!showDetails)}
                                              className="task-details-close">
                                        &times;
                                        </span>
                                        
                                    </div>
                                </div>
                            <div className="task-details-container">
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
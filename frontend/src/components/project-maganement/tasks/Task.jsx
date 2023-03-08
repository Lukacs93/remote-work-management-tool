import React,{ useState } from 'react'
import './Task.css'
import PopUpAssign from "./PopUpAssign";
import PopUpList from "./PopUpList";


const Task = ({taskItem, deleteTaskItem}) => {
      const [showAssign, setShowAssign] = useState(false);
      const [showList, setShowList] = useState(false);
    
      const handleClose=()=>{
        setShowAssign(false);
        setShowList(false);
      }
  
    return (
        <div className="task-content">
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
        </div>
    )
}

export default Task
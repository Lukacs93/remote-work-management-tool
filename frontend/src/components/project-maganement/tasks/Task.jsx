import React from 'react'
import './Task.css'

const Task = ({deleteMessage, taskItem, deleteTaskItem}) => {
    
    return (
        <div className="task-content">
            <div>
                <h4>name</h4>
                <p>{taskItem.description}</p>
            </div>
            <select>
                <option value='notStarted'>Not Started</option>
                <option value='inProgress'>In Progress</option>
                <option value='review'>Review</option>
                <option value='done'>Done</option>
            </select>
            <div className="task-button-container">
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
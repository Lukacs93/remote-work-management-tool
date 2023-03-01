import React from 'react'
import './Task.css'

const Task = () => {
    return (
        <div className="task-content">
            <div>
                <h4>name</h4>
                <p>desc</p>
            </div>
            <div className="task-button-container">
                <button>
                    Edit
                </button>
                <button>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task
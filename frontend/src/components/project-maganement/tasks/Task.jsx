import React from 'react'

const Task = () => {
    return (
        <div className="task-container">
            <div>
                <div>
                    <h4>name</h4>
                    <p>desc</p>
                </div>
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
import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const TaskList = () =>
{
    const [taskItems, setTaskItems] = useState([])
    const [deletedItemId, setDeletedItemId] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const [form, setForm] = useState({
        dateId: 1,
        projectId: 5,
        description: "",
        note: "Empty note",
        taskStatus: 1
    })

    const onSubmit = async (e) => {
        e.preventDefault();
       console.log(form)
        await fetch('https://localhost:7029/projects/20/add-task', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })

        setTimeout(() => {
            setShowForm(false)
        }, 2000);
        
        setIsSubmit(true)
    }

    useEffect(() => {
        const getTaskItems = async () => {
            const response = await fetch(`https://localhost:7029/tasks`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const items = await response.json();
            setTaskItems(items);
        }

        getTaskItems();
    }, [isSubmit]);

    const deleteTaskItem = async (id) => {
        setDeletedItemId(id);
        
        setTimeout(() => {
            const remainingItems = taskItems.filter((taskItem) => taskItem.id !== id);
            setTaskItems(remainingItems);
            
        }, 2000);

        await fetch(`https://localhost:7029/tasks/${id}`, {
            method: "DELETE"
        });        
    }

    const handleCreateNewTask = () => {
        console.log(taskItems)
        setShowForm(!showForm)
        setIsSubmit(false)
    }
    
    return (
        <div >
            {showForm ?
                <div className="add-task-form-container">
                    <div>
                        <div>
                            {/*<h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>*/}
                        </div>
                        {!isSubmit ?
                            //form can be replaced to another component
                            <form onSubmit={onSubmit} className="add-task-form">
                                <label htmlFor="title" className="description-label">
                                    Task Name:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="title"
                                    className="add-task-input"
                                    // value={inputTitle}
                                />
                                <label className="description-label" htmlFor="description">
                                    Add Description:
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    className="add-task-input"
                                    onChange={(e) => setForm({...form, description: e.target.value})}
                                    // value={inputDesc}
                                />
                                <button className="task-submit-button">Add New Task</button>
                            </form>
                            :
                            <p className="success-message">Task Successfully Created</p>
                        }
                    </div>
                    <div className="close-button-container">
                        <button onClick={() => setShowForm(!showForm)} className="close-button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                : ""
            }

            <div onClick={handleCreateNewTask} className="add-new-container">
                <div className="minimize-add-new">
                    <button className="add-new-button"  type="button">
                        <span className="add-new-button-icon">
                            +
                        </span>
                    </button>
                    <div>Add New Task</div> 
                </div>
            </div>
            <div className="task-container">
                {taskItems && 
                    taskItems.map(taskItem => {
                        return (
                            <div className="task-item" key={taskItem.id}>
                            {deletedItemId === taskItem.id  ? 
                                <p className="delete-message">Task Successfully Deleted</p>
                                 :
                                <Task taskItem={taskItem} deleteTaskItem={deleteTaskItem} key={taskItem.id}/>
                            }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskList


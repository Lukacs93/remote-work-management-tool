import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const ListTasks = () =>
{
    const [taskItems, setTaskItems] = useState([])
    const [deletedItemId, setDeletedItemId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const getTaskItems = async () => {
            const response = await fetch(`https://localhost:7029/tasks`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const items = await response.json();
            setTaskItems(items.$values);
            console.log(items)
        }

        getTaskItems();
        
    }, []);

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

    return (
        <div>
            <header>
                <div className="title">Tasks</div>
                <button onClick={() => setShowForm(!showForm)} className="new-btn">New</button>
            </header>
            {showForm ?
                <div className="add-task-form-container">
                    <div>
                        <div>
                            {/*<h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>*/}
                        </div>
                        <form className="add-task-form">
                            <label htmlFor="title" className="description-label">
                                Task Name:
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="title"
                                className="add-task-input"
                                // onChange={handleInput}
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
                                // onChange={handleInputdesc}
                                // value={inputDesc}
                            />
                            <button className="task-submit-button">Add New Task</button>
                        </form>
                    </div>
                    <div className="close-button-container">
                        <button onClick={() => setShowForm(!showForm)} className="close-button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                : ""
            }
            <div className="task-container">
                {taskItems && 
                    taskItems.map(taskItem => {
                        return (
                            <>
                            {deletedItemId === taskItem.id  ? 
                                <p className="delete-message">Task Successfully Deleted</p>
                                 :
                                <Task taskItem={taskItem} deleteTaskItem={deleteTaskItem} key={taskItem.$id}/>
                            }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListTasks


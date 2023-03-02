import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const ListTasks = () =>
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
        await fetch('https://localhost:7029/projects/4/add-task', {
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
            setTaskItems(items.$values);
            console.log(items)
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
        setShowForm(!showForm)
        setIsSubmit(false)
    }
    
    return (
        <div>
            <header>
                <div className="title">Tasks</div>
                <div className="task-header-button-container">
                    {showSearch &&
                        <div className={`search-container ${showSearch ? "show" : ""}`}>
                            <input type="text" placeholder="Search" />
                        </div>
                    }
                    <button className="search-btn" onClick={() => setShowSearch(!showSearch)}><i className="fa fa-search"></i></button>
                    <button onClick={handleCreateNewTask} className="new-btn">New</button>
                </div>
            </header>
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


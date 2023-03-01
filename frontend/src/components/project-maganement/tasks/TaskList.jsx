import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const ListTasks = () =>
{
    const [taskItems, setTaskItems] = useState([])
    const [deletedItemId, setDeletedItemId] = useState(null);

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
                <button className="new-btn">New</button>
            </header>
            <div className="task-container">

                {taskItems && 
                    taskItems.map(taskItem => {
                        return(
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


import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const ListTasks = () =>
{
    const [taskItems, setTaskItems] = useState()

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
            console.log(response)
        }

        getTaskItems();
        
    }, []);
    
    return (
        <div>
            <header>
                <div className="title">Tasks</div>
                <button className="new-btn">New</button>
            </header>
            <div className="task-container">
                {taskItems && taskItems.map(taskItem => <Task />)}
                
            </div>
        </div>
    )
}

export default ListTasks


import React from 'react'
import { useState , useEffect } from 'react'
import './TaskList.css'
import Task from "./Task";

const ListTasks = () =>
{
    
    return (
        <div>
            <header>
                <div className="title">Tasks</div>
                <button className="new-btn">New</button>
            </header>
            <div className="task-container">
                <Task />
            </div>
        </div>
    )
}

export default ListTasks


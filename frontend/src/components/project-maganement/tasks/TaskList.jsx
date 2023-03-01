import React from 'react'
import { useState , useEffect } from 'react'
import Task from "./Task";

const ListTasks = () =>
{
    
    return (
        <div>
            <header>
                <div className="title">Tasks</div>
                <button className="new-btn">New</button>
            </header>
            <Task />
        </div>
    )
}

export default ListTasks


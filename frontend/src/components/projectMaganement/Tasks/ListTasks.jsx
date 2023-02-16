import React from 'react'
import { useState } from 'react'
import {ListTask} from 'ListTask.jsx'


const ListTasks = () =>
{
    const[loading,IsLoading] = useState(true)
    const[tasks,setTasks] = useState({},{},{})

    return (
        <div>
            {loading &&(<div> Loading...</div> )}
            {!loading &&(<div>
                {tasks.map(task=>(<ListTask task={task}/>))}
                </div>)}
        </div>
    )
}

export default ListTasks
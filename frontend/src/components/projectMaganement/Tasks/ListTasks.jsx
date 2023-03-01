import React from 'react'
import { useState , useEffect } from 'react'
import  ListTask  from './ListTask'


const ListTasks = () =>
{
    const[loading,IsLoading] = useState(true)
    const[tasks,setTasks] = useState({},{},{})


    
    return (
        <div>
            {loading &&(<div> Loading...2</div> )}
            {!loading &&(<div>LOADOLT
               {/* {tasks.map(task=>(<ListTask task={task}/>))}*/ }
                </div>)}
        </div>
    )
}

export default ListTasks
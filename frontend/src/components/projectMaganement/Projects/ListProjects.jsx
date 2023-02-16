import React from 'react'
import { useState } from 'react'
import {ListProject} from 'ListProject.jsx'


const ListTasks = () =>
{
    const[loading, IsLoading] = useState(true)
    const[projects, setProjects] = useState({},{},{})

    return (
        <div>
            {loading &&(<div> Loading...</div> )}
            {!loading &&(<div>
                {projects.map(project=>(<ListProject project={project}/>))}
            </div>)}
        </div>
    )
}

export default ListTasks
import React from 'react'
import { useState } from 'react'
import ListProject  from './ListProject.jsx'


const ListProjects = () =>
{
    const[loading, IsLoading] = useState(true)
    const[projects, setProjects] = useState({},{},{})

    return (
        <div>
            {loading &&(<div> Loading...1</div> )}
            {!loading &&(<div>BETÖLTÖTT
               {/* {projects.map(project=>(<ListProject project={project}/>))}*/ }
            </div>)}
        </div>
    )
}

export default ListProjects
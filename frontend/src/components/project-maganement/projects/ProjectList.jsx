import {React,  useEffect, useState } from 'react'
import { useFetcher } from 'react-router-dom'
import Project  from './Project.jsx'
import './ProjectList.css'

const ProjectList = () =>
{
    const[isLoading, setIsLoading] = useState(true)
    const[projects, setProjects] = useState([])
    const[userID, setUserID]=useState(0)


useEffect(()=>
{
        const getProjects = async() =>{ await fetch(`https://localhost:7029/projects`)
                                                .then((resp)=>resp.json())
                                                .then((resp)=>{setProjects(resp.$values)
                                                            setIsLoading(!isLoading)
                                                            console.log(projects)
                                                        })
                                                            }
        getProjects()
},[])

    return (
        <div>
            {isLoading &&( <div class="loader"></div>  )}
            {!isLoading &&(<div>
               {projects.map(project=>(<Project id={project.id} project={project}/>))}
            </div>)}
        </div>
    )
}

export default ProjectList
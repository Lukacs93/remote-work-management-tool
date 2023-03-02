import {React,  useEffect, useState } from 'react'
import Project  from './Project.jsx'
import './ProjectList.css'

const ProjectList = (prop) =>
{
    const[isLoading, setIsLoading] = useState("loading")
    const[projects, setProjects] = useState([])

    const[userID, setUserID]=useState(0)

useEffect(()=>
{
        const getProjects = async() =>{ await fetch(`https://localhost:7029/projects`)
                                                .then((resp)=>resp.json())
                                                .then((resp)=>{setProjects(resp.$values)
                                                    setIsLoading("done")
                                                            console.log(projects)
                                                        })
                                                            }
        getProjects()

},[prop.isSubmit])

    return (
        <div>
            {isLoading==="loading" &&( <div className="loader"></div>  )}
            {isLoading==="done" &&(<div  className='fbox'>
               {projects.map(project=>(<div><Project id={project.id} project={project} setIsSubmit={prop.setIsSubmit} IsSubmit={prop.isSubmit} /></div>))}
            </div>)}
        </div>
    )
}

export default ProjectList
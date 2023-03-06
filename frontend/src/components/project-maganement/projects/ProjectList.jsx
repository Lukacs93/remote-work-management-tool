import {React,  useEffect, useState } from 'react'
import Project  from './Project.jsx'
import './ProjectList.css'

const ProjectList = (prop) =>
{
    const[isLoading, setIsLoading] = useState("loading")
    const[projects, setProjects] = useState([])
    const[isModified, setIsModified] = useState(false)
    
    useEffect(()=>
    {
        const getProjects = async() => { 
            await fetch(`https://localhost:7029/projects`)
                .then((resp)=>resp.json())
                .then((resp)=>{setProjects(resp.$values)
                    setTimeout(() => {
                    setIsLoading("done")
                    }, 1000);
                })
        }
        getProjects()
    
    },[prop.isSubmit, isModified])
    
    return (
        <div>
            {isLoading === "loading" ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                )
                :

                <div className="project-list-container">
                    {isLoading === "done" && (
                        <div className='projects-container'>
                            {projects.map(project => (
                                <Project id={project.id} isModified={isModified} setIsModified={setIsModified}
                                         setIsLoading={setIsLoading} project={project} setIsSubmit={prop.setIsSubmit}
                                         IsSubmit={prop.isSubmit}/>
                            ))}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ProjectList
import {React,  useEffect, useState } from 'react'
import Project  from './Project.jsx'
import './ProjectList.css'

const ProjectList = (prop) =>
{
    const[isLoading, setIsLoading] = useState("loading")
    const[projects, setProjects] = useState([])
    const[isModified, setisModified] = useState(false)
    

useEffect(()=>
{
        const getProjects = async() =>{ await fetch(`https://localhost:7029/projects`)
                                                .then((resp)=>resp.json())
                                                .then((resp)=>{setProjects(resp.$values)
                                                    setIsLoading("done")
                                                        })
                                                            }
        getProjects()

},[prop.isSubmit,isModified])
console.log("Helloke")
    return (
        <div>
            {isLoading==="loading" &&( <div className="loader"></div>  )}
            {isLoading==="done" &&(<div  className='fbox'> 
               {projects.map(project=>(<div><Project id={project.id} isModified={isModified} setisModified={setisModified} setIsLoading={setIsLoading} project={project} setIsSubmit={prop.setIsSubmit} IsSubmit={prop.isSubmit} /></div>))}
            </div>)}
        </div>
    )
}

export default ProjectList
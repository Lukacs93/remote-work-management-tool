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
        async function getProjects() {
            const response = await fetch(`https://localhost:7029/projects`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                alert(message);
                return;
            }

            const result = await response.json();
            setProjects(result)
            setTimeout(() => {
                setIsLoading("done")
            }, 1000);
        }

        getProjects();

    },[prop.isSubmit, isModified])
    
    return (
        <div className="project-list-container">
            {isLoading === "loading" ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                )
                :

                <div >
                    {isLoading === "done" && (
                        <div className='projects-container'>
                            {projects && projects.map(project => (
                                <Project key={project.id} id={project.id} isModified={isModified} setIsModified={setIsModified}
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
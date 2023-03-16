import React,{ useState,useEffect } from 'react'
import './Task.css'
import PopUpAssign from "./PopUpAssign";
import PopUpList from "./PopUpList";
import UserList from "../projects/UsersList";
import UpdateTask from "./UpdateTask";
import Status from '../status/Status'


const Task = ({taskItem, deleteTaskItem}) => {
    const [showAssign, setShowAssign] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [updateTask, setUpdateTask] = useState(false);
    const [date,setDate]=useState(
        {
            "createdDate":"",
            "deadLine":""
        }
    );

    const handleShowAssign = () => {
        setShowDetails(true)
        setShowList(true);
        setShowAssign(false);
    }
    const handleShowUsers = () => {
        setShowDetails(true)
        setShowList(false);
        setShowAssign(true);
    }
    
    const handleClose=()=>{
        setShowAssign(false);
        setShowList(false);
    }


    useEffect(()=>{
const setNewDate=(date)=>{
setDate({
    createdDate:date.createdDate,
    deadLine:date.deadLine
})
}

    const getDates=async()=>{
        await fetch(`https://localhost:7029/dates/${taskItem.dateId}`)
            .then((resp)=>resp.json())
            .then((resp)=>{setNewDate(resp)
                setTimeout(() => {
                }, 3000);
            })
    }

    getDates()
    console.log(date)
},[ ])


    return (
        <>
   
            <tr className="task-content" >
                <td >
                    <p>{taskItem.name}</p>
                </td>
                <td>
                    <p>{taskItem.description}</p>
                </td>
                <td>
                    <Status />
                </td>
                <td>{date.createdDate}</td>
                <td>{date.deadLine}</td>
                <td>                    
                    <div className="task-button-container">
                        <div className="task-show-more-button">
                            <div className="task-action-button">Edit</div>
                        </div>
                        <div className="task-show-more-button">
                            <div className="task-action-button" onClick={handleShowUsers}>Assign</div>
                        </div>
                        <div className="task-show-more-button">
                            <div className="task-action-button" onClick={handleShowAssign}>Users</div>
                        </div>
                        <div className="task-show-more-button">
                            <span className="task-action-icon" onClick={() => setShowDetails(true)}>
                                &#xFE19;
                            </span>
                        </div>
                        <div className="task-action-icon" onClick={() => {deleteTaskItem(taskItem.id)}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>

            {showDetails ?
                <tr className={`App ${showDetails ? "task-details-open" : ""}`}>
                    <div className="task-details-popup-wrapper">
                        <div className="task-details-content task-animate">

                            <div className="task-details-btn-container">
                                <div>
                                    <button className='single-task-button'>Task</button>
                                    <button className='single-task-button' onClick={() => setUpdateTask(!updateTask)}>Edit</button>
                                    <button className='single-task-button' onClick={() => setShowAssign(!showAssign)}>Assign</button>
                                    <button className='single-task-button' onClick={() => setShowList(!showList)}>Users</button>
                                    <button className='single-task-button'>Project</button>
                                    <button className='single-task-button' onClick={() => {deleteTaskItem(taskItem.id)}}>Delete</button>
                                </div>
                                <div>
                                    <span onClick={() => setShowDetails(false)}
                                          className="task-details-close">
                                    &times;
                                    </span>
                                </div>
                            </div>
                            <div className="task-details-container">
                                {updateTask &&
                                    <UpdateTask taskItem={taskItem}/>
                                }
                                {showList ? (

                                    <PopUpList onClose={handleClose} taskItem={taskItem} />
                                ) 
                                    : 
                                    <div>
                                        {showAssign ?
                                            <PopUpAssign onClose={handleClose} taskItem={taskItem}/> 
                                            :
                                            <div>
                                                <div className="task-description">
                                                    <h2>Project Details</h2>
                                                    <span>Purpose of the project is to improve organizational efficiency, increase
                                                        profitability, reduce costs, or create new business opportunities. It may
                                                        involve the development of new products or services, the implementation of
                                                        new technology or processes, or the expansion of existing operations into
                                                        new markets or geographies.
                                                    </span>
                                                </div>
                                                    <div className="task-details">
                                                        <div className="task-id">Task ID: {taskItem.id}</div>
                                                        <div className="">Project: </div>
                                                        <div className="task-id">Name: Lorem Ipsum</div>
                                                        <div>Description: {taskItem.description}</div>
                                                        <div className="">Team members: {taskItem.usersOnTask.map(user => `${user.firstName} ${user.lastName}`).join(', ')}</div>
                                                        <div className="task-status">Project Status: {
                                                            taskItem.taskStatus === 1 ? "In Progress"
                                                                : taskItem.taskStatus === 1 ? "Review"
                                                                    : taskItem.taskStatus === 1 ? "Done" 
                                                                        :"Not Started"
                                                        }
                                                        </div>
                                                    </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </tr>
                :
                ""
            }
        </>
    )
}

export default Task
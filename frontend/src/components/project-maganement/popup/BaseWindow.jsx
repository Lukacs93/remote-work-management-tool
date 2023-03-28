import React, {useState} from 'react';




const PopUpWindow = () =>{
    const [activeWindow, setActiveWindow] = useState('Task')


    const handleActiveSelection = (window) =>{
        setActiveWindow(window);

        //Possible options: Task, Edit, Assign, Users, Project, Delete
    }

return (
    <>
        <div>
            <div className="task-details-btn-container">
                <div>              
                    <button className='single-task-button'>Task</button>
                    <button className='single-task-button'>Edit</button>
                    <button className='single-task-button'>Assign</button>
                    <button className='single-task-button'>Users</button>
                    <button className='single-task-button'>Delete</button>
                </div>
                <div>
                    <span onClick={() => /*close popup function*/}
                    className="task-details-close">
                    &times;
                    </span>
                </div>
            </div>
        </div>


    </>
)
}
export default PopUpWindow;
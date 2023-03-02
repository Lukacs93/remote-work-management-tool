import React, { useState } from 'react'


const handleSubmit = (e) => {


}

const CreateProject = () =>
{
const [Form,setForm]=useState({
ManagerId:1, //the users id that creates the project
ProjectStatus:0, // the project status
DateId:0 // The dates id(not)

})


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="projectName" placeholder='ProjectName'></input>
                <input id="assignedGroup" placeholder='ProjectName'></input>
                <input id="deadLine"  placeholder='deadLine(YYYY-MM-DD)'></input>
                <input id="" placeholder='Users'></input>
                <input id="" placeholder='projectName'></input>
                <input id="" placeholder='projectName'></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateProject
import React from 'react'


const handleSubmit = (e) =>{

}

const UpdateProject = () =>
{
    return (
        <div>
            <form onSubmit={handleSubmit}>   
                <input id="projectName"></input>
                <input id="assignedGroup"></input>
                <input id="deadLine"></input>
                <input id=""></input>
                <input id=""></input>
                <input id=""></input>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProject
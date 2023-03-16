import React from 'react'
import './Status.css'
const Status = () =>
{
return(
<div className='status-dropdown-container'>
    <label>Status: 
<select className="status-dropdown" placeholder='Not Started'>
                        <option value='notStarted'>Not Started</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='review'>Review</option>
                        <option value='done'>Done</option>
                    </select></label>
                    </div>)
}

export default Status
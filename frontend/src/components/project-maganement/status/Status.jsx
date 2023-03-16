import React from 'react'
import './Status.css'
const Status = ({setStatus}) =>
{
return(
<div className='status-dropdown-container'>
    <label>Status: 
<select className="status-dropdown" 
placeholder='Not Started'
onChange={(e) => setStatus(e.target.value)}
>
                        <option value='NotStarted'>Not Started</option>
                        <option value='InProgress'>In Progress</option>
                        <option value='Review'>Review</option>
                        <option value='Done'>Done</option>
                    </select>
                    </label>
                    </div>)
}

export default Status
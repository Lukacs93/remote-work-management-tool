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
                        <option value='0'>Not Started</option>
                        <option value='1'>In Progress</option>
                        <option value='2'>Review</option>
                        <option value='3'>Done</option>
                    </select>
                    </label>
                    </div>)
}

export default Status
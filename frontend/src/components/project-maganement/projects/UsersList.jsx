import React from 'react'

const UserList=(prop)=>{
    console.log(prop)
    return (
            <tr >{prop.user.firstName} {prop.user.lastName}</tr>
    )
}


export default UserList
import React, { useState, useEffect } from 'react';
import './PopUpList.css';

function PopUpList({ onClose, taskItem }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleted,isDeleted]=useState(false)

    useEffect(() => {
        const getTaskItems = async () => {
            const response = await fetch(`https://localhost:7029/tasks/${taskItem.id}/users`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const items = await response.json();
            setUsers(items);
        }

        getTaskItems();

    }, [deleted]);
    
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteUser = async (e) =>{
const usertodelete={
  "Id": parseInt(e.id),
    "FirstName": e.firstName,
    "LastName": e.lastName
}
e.id = parseInt(e.id)

    await fetch(`https://localhost:7029/tasks/user/${taskItem.id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(usertodelete)
  })

  setTimeout(() => {}, 2000);
  isDeleted(!deleted)
    //DELETE request
  }

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pop-up-assign">
      <div className="pop-up-assign-header">
        <input type="text" placeholder="Search Users" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <button className="popup-close" onClick={onClose}>
            X
          </button>     
      <div className="pop-up-assign-body">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className={`pop-up-assign-user`}
            
          >
            {user.firstName} {user.lastName}
            <button className="popup-close" onClick={() => deleteUser(user)}>
            X
          </button>  
          </div>
        ))}
      </div>
      <div className="pop-up-assign-footer">      
      </div>
    </div>
  );
}

export default PopUpList;

import React, { useState, useEffect } from 'react';
import './PopUpList.css';

function PopUpList({ onClose, taskItem }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://localhost:7029/users') //change to fetch assigned users
      .then((response) => response.json())
      .then((data) => setUsers(data.$values))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const deleteUser = async (e) =>{
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

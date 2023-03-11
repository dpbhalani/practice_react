import React, { useState } from 'react';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';

function App() {
const [usersList , setUsersList] = useState([]);

const addSubmitHandler = (uName , uAge) => {
  setUsersList((prevUserList) => {
    return [...prevUserList , {name:uName , age:uAge ,  id: Math.random().toString()}]
});
}

  return (
    <div>
      <AddUser onAddUser={addSubmitHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;

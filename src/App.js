import React from 'react';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';

function App() {
  return (
    <div>
      <AddUser/>
      <UserList users={[]}/>
    </div>
  );
}

export default App;

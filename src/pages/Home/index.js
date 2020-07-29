import React, {useState, useEffect, useMemo, useCallback} from 'react';
import logo from '../../logo.svg';

function App(props) {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');

  const getUsers = useCallback((() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`).then(response => {
      return response.json();
    }).then(data => {
      setUsers(data);
    })
  }), []);

  useEffect(() => {
    getUsers();
  }, [getUsers])


  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>UseMemo</h1>
        <input onChange={e => setQuery(e.target.value)} />
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <UserList users={users} query={query} />
      </div>
    </div>
  );
}

export default App;


function UserList({query, users}) {
  const filtered = useMemo(() => filterUsers(users, query), [query, users]);

  return filtered.map(user => 
    <p style={{margin: 0}} key={user.id}>{user.name}</p>
  )
}

const filterUsers = (users, query) => {
  console.log('--------Filter function called--------')
  return users.filter(user => user.name.toLowerCase().includes(query));
}
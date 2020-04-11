import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './index.css';

function App() {
  const [userName, getUsername] = useState('');
  const [password, getPassword] = useState('');
  let history = useHistory();

  const getUser = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/login?user=${userName}&password=${password}`).then(response => {
      return response.json();
    }).then(data => {
      if(!data.error) {
        localStorage.setItem('userData', JSON.stringify(data));
        history.push("/");
      } else {
        alert('Usuário e/ou senha inválidos');
      }
    })
  }

  return (
    <div className="App-header">
      <form onSubmit={getUser}>
        <div className='form-data'>
          <label htmlFor="userName">UserName</label>
          <input type="text" id="fname" name="userName" value={userName} onChange={e => getUsername(e.target.value)} className='input-text' />
        </div>

        <div className='form-data'>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" value={password} onChange={e => getPassword(e.target.value)} className='input-text' />
        </div>

        <input type="submit" value="Submit" className='form-button' />
      </form>
    </div>
  );
}

export default App;

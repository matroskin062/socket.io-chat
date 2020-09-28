import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Redirect, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function App() {
  const [name, setName] = React.useState('');
  const [logged, setLogged] = React.useState(false);

  return (
    <div className='App'>
      {!logged && <Redirect to='/' />}
      <Route path='/chat' render={() => <Chat name={name} />} />
      <Route
        path='/'
        exact
        render={() => (
          <Login
            setName={setName}
            name={name}
            logged={logged}
            setLogged={setLogged}
          />
        )}
      />
    </div>
  );
}

export default App;

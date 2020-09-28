import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setName, name, login, setLogged }) => {
  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Nickname</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <Link
          to='/chat'
          className={
            !name && !login ? 'btn btn-primary disabled' : 'btn btn-primary'
          }
          onClick={setLogged}
        >
          Go to chat
        </Link>
      </form>
    </div>
  );
};

export default Login;

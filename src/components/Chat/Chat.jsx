import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3005');

const Chat = ({ name }) => {
  const [messages, setMessages] = React.useState([]);
  const [usersCount, setUsersCount] = React.useState(0);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    socket.on('new message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('user joined', (data) => setUsersCount(data));
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      socket.emit('new message', { name, text: inputRef.current.value });
      inputRef.current.value = '';
    }
  };

  return (
    <div className='container w-50 d-flex-row'>
      <h3>{usersCount}</h3>
      {messages.map((msg) => (
        <div
          className={`${
            socket.id === msg.user ? 'ml-auto my-message' : 'message'
          } w-25 card mt-2 `}
          key={Date.now() * Math.random(-10, 10)}
        >
          <div className='card-body'>
            <h5 className='card-title'>{msg.name}</h5>
            <p className='card-text'>{msg.text}</p>
          </div>
        </div>
      ))}
      <form onSubmit={sendMessage}>
        <div className='input-group mt-3'>
          <input
            ref={inputRef}
            type='text'
            className='form-control'
            placeholder='Enter text'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-primary'
              type='submit'
              id='button-addon2'
            >
              Button
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chat;

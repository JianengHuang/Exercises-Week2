import { useState, useContext } from 'react';
import { UsernameContext } from './Helper/Context';

const Form = () => {
  const [name, setName] = useState('');
  const { username, setUsername } = useContext(UsernameContext);
  return (
    <>
      <div>Local Value: {name}</div>
      <div>Context Value: {username}</div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setUsername(name)}>Save to Context</button>
    </>
  );
};

export default Form;

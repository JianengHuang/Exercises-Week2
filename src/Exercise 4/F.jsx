import { useContext } from 'react';
import { UsernameContext } from './Helper/Context';

const F = () => {
  const Context = useContext(UsernameContext);
  const { username } = Context;

  return (
    <>
      <h1>F</h1>
      <h2>Username: {username}</h2>
      <hr />
    </>
  );
};

export default F;

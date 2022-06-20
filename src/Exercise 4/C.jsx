import { useContext } from 'react';
import E from './E';
import { UsernameContext } from './Helper/Context';

const C = () => {
  const Context = useContext(UsernameContext);
  const { username } = Context;

  return (
    <>
      <h1>C</h1>
      <h2>Username: {username}</h2>
      <E />
      <hr />
    </>
  );
};

export default C;

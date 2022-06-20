import { useContext } from 'react';
import { UsernameContext } from './Helper/Context';
import F from './F';

const E = () => {
  const Context = useContext(UsernameContext);
  const { username } = Context;

  return (
    <>
      <h1>E</h1>
      <h2>Username: {username}</h2>
      <F />
      <hr />
    </>
  );
};

export default E;

import { useContext } from 'react';
import { UsernameContext } from './Helper/Context';
import D from './D';
const B = () => {
  const Context = useContext(UsernameContext);
  const { username } = Context;

  return (
    <>
      <h1>B</h1>
      <h2>Username: {username}</h2>
      <D />
      <hr />
    </>
  );
};

export default B;

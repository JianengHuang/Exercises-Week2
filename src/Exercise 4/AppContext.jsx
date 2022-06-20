import { createContext, useState, useContext } from 'react';
import A from './A';
import B from './B';
import C from './C';
import { UsernameContext } from './Helper/Context';

const AppContext = () => {
  const [username, setUsername] = useState('');
  const { Provider } = UsernameContext;

  return (
    <Provider value={{ username, setUsername }}>
      <A></A>
      <B></B>
      <C></C>
    </Provider>
  );
};

export default AppContext;

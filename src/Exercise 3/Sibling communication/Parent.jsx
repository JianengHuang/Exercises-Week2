import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
  const [name, setName] = useState('No name');
  return (
    <>
      <Child1 name={name}></Child1>
      <Child2 setName={setName}></Child2>
    </>
  );
};

export default Parent;

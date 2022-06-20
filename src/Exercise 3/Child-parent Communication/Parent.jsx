import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child count={count} setCount={setCount}></Child>
    </>
  );
};

export default Parent;

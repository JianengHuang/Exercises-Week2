import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child count={count}></Child>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};

export default Parent;

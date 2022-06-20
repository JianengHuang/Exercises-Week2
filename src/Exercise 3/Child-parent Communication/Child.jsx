import React from 'react';

const Child = ({ count, setCount }) => {
  return (
    <>
      <p>Current Count: {props.count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};

export default Child;

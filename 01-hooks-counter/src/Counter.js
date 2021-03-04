import React, { useState } from "react";

// make a counter with -, + buttons
// using function component
// 1. useState for count, initialize to 0
// 2. return two buttons with count between
// 3. decrease, or increase count with onClick

// function Counter() {
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease
        </button>
        {count}
        <button onClick={() => setCount(count + 1)}>increase</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Counter;

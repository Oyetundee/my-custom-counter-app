import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newValue = e.target.elements.valueInput.value;
        setValue(Number(newValue));
      }}>
        <input type="number" name="valueInput" />
        <button type="submit">Set Value</button>
      </form>
    </div>
  );
}

export default Counter;

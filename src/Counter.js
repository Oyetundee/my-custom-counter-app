import React from 'react';
import useCounter from './useCounter';
import './App.css'

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div className='center'>
      <h1>Count: {count}</h1>
      <div style={{display: 'flex', gap: 30}}>
      <button className='button' onClick={increment}>Increment</button>
      <button className='button' onClick={decrement}>Decrement</button>
      <button className='button' onClick={reset}>Reset</button>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newValue = e.target.elements.valueInput.value;
        setValue(Number(newValue));
      }}>
        <input className='input' type="number" name="valueInput" />
        <button className='button' type="submit">Set Value</button>
      </form>
    </div>
  );
}

export default Counter;

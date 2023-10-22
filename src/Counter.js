import React, { useState } from 'react';
import useCounter from './useCounter';
import './App.css'
import Triggerbtn from './Triggerbtn';
import { Link } from 'react-router-dom';

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [countValue, setCountValue] = useState(Number);
  const [hasError, setHasError]=  useState(true);
  const handleSubmitCount = (e)=>{
    e.preventDefault()
    setValue(Number(countValue))
  }
  return (
    <>
    <div className='counter_container'>
      {hasError ? (
        <div>
          <div className='counter_displayCount'><h1>Count: {count}</h1></div>
        <div className='counter_fn_btn'>
        <button type='button' className='button' onClick={()=>increment()}>Increment</button>
        <button type='button' className='button' onClick={()=>decrement()}>Decrement</button>
        <button type='button' className='button' onClick={()=>reset()}>Reset</button>
        </div>
        <form onSubmit={(e)=>handleSubmitCount(e)}>
          <input className='input' onChange={(e)=> setCountValue(e.target.value)} type="number" name="valueInput" />
          <button className='button' type="submit">Set Value</button>
        </form>
        <div>
            <button className="error_button" onClick={()=>{setHasError(false)}}>Test Error Boundary</button>
            <Link to={'/watch'} className="error_button" >Test 404</Link>
        </div>
        </div>
      ):
      (
        <div  className='counter_container'> 
          <h1>"Error has occured"</h1>

          <div>
            <button className="error_button" onClick={()=>{setHasError(true)}}>Hide Error Boundary</button>
        </div>
        </div>
      )

      }
      {/* <button type='button' className='error_button' onClick={()=>setHasError(true)}>Trigger Error</button> */}
      

      
    </div>
    </>
  );
}

export default Counter;
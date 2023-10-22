import React, { useState } from 'react';
import Counter from './Counter';
import { Outlet } from 'react-router-dom';

function CounterTest() {

  return (
    <>
      <div className='counterTest_title'>
        <h1>Counter Test Page</h1>
      </div>
      <Outlet />
    </>
  );
}

export default CounterTest;

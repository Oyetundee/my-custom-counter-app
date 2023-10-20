import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Counter from './Counter';
import CounterTest from './CounterTest';
import ErrorBoundary from './ErrorBoundary';
import NotFound from './NotFound';

const App = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Counter/>} />
      <Route path="*" element={<NotFound />} />
      </>
    )
  )


function ErrorTestPage() {
  return (
    <ErrorBoundary>
      {/* Implement a page to test error boundaries here */}
      <CounterTest />
    </ErrorBoundary>
  );
}

export default App;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Counter from './Counter';
import CounterTest from './CounterTest';
import LandingPage from './LandingPage';
import NotFound from './NotFound';
// import ErrorBoundary from './ErrorBoundary';
// import NotFound from './NotFound';

const App = createBrowserRouter([
  // {
  //   element: <ErrorBoundary fallback={<div><h1>Something went wrong. Hold tight!</h1></div>}/>,
  //   children: [
      {
        // element: <CounterTest />,
        errorElement: <div><h1>Something went wrong. Hold tight!</h1></div>,
        children: [
          {
            path: "/",
            element: <LandingPage />, 
          },
          {
            path: "/counter",
            element: <Counter />, 
          }
        ]
      },
  //   ]
  // },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default App;
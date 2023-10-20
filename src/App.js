import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import CounterTest from './CounterTest';
import ErrorBoundary from './ErrorBoundary';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    
        <Route path="/" exact component={Counter} />
        {/* Add a route for testing error boundaries */}
        <Route path="/error-test" component={ErrorTestPage} />
        {/* Add a catch-all route for 404 */}
        <Route component={NotFound} />
      
    </Router>
  );
}

function ErrorTestPage() {
  return (
    <ErrorBoundary>
      {/* Implement a page to test error boundaries here */}
      <CounterTest />
    </ErrorBoundary>
  );
}

export default App;

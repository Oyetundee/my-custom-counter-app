import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
    // You can log the error or perform other actions here
  };

  if (hasError) {
    return <div>Something went wrong. Error caught by the boundary.</div>;
  }

  return children;
}

export default ErrorBoundary;

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // You can log the error or perform other actions here
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Error caught by the boundary.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

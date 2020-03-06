import React, { Component } from 'react';
import AltComponent from '../altComponent/AltComponent';

/**
 * Error boundary that catches react render errors and displays an alternative instead
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <AltComponent />
      );
    }
    return this.props.children;
  }  
}
export default ErrorBoundary;
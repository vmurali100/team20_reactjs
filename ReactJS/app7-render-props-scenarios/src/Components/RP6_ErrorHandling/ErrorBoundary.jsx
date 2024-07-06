import React, { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ errorInfo });
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.children({ error: this.state.error, errorInfo: this.state.errorInfo });
      }
  
      return this.props.children({ error: null, errorInfo: null });
    }
  }
  
  export default ErrorBoundary
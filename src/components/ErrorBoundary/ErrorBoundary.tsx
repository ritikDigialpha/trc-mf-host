import React from "react";
import SomethingWentWrong from "./SomethingWentWrong";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <SomethingWentWrong />;
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const ErrorHandling = () => {
  return (
    <div>
      <h1>Error Handling Example</h1>
      <ErrorBoundary>
        {({ error, errorInfo }) =>
          error ? (
            <div>
              <h2>Something went wrong.</h2>
              <details style={{ whiteSpace: "pre-wrap" }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            </div>
          ) : (
            <BuggyComponent />
          )
        }
      </ErrorBoundary>
    </div>
  );
};

export default ErrorHandling;

// Component that throws an error
const BuggyComponent = () => {
    throw new Error("I crashed!");
  };
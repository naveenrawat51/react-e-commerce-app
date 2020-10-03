import React, { Component } from "react";
import ErrorImage from "../../assets/error1.png";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error: ", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <img
            src={ErrorImage}
            style={{
              width: "400px",
              height: "400px",
              display: "block",
              margin: "0 auto",
            }}
            alt="Something went wrong!!"
          />
          <h4 style={{ textAlign: "center" }}>Something went wrong!!</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

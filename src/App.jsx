import React, { Component } from "react";
import profileImage from "./assets/profile.jpg";

class App extends Component {
  // Initial state
  state = {
    Person: {
      fullName: "hemjaygfx",
      bio: "A curious developer learning React step by step.",
      imgSrc: profileImage,
      profession: "Software Developer"
    },

    // Controls whether the profile shows
    shows: false,

    // Time since component mounted
    timeSinceMount: 0
  };

  // Lifecycle method: runs after component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  // Cleanup interval when component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle show/hide profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { Person, shows, timeSinceMount } = this.state;

    return (
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          fontFamily: "Arial"
        }}
      >
        <h1>Class-Based Component Checkpoint</h1>

        {/* Toggle button */}
        <button
          onClick={this.toggleProfile}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer"
          }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditionally render profile */}
        {shows && (
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "300px",
              margin: "0 auto",
              borderRadius: "10px"
            }}
          >
            <img
              src={Person.imgSrc}
              alt={Person.fullName}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            <h2>{Person.fullName}</h2>
            <h4>{Person.profession}</h4>
            <p>{Person.bio}</p>
          </div>
        )}

        {/* Time since component mounted */}
        <p style={{ marginTop: "20px" }}>
          Component mounted since: {timeSinceMount} second(s)
        </p>
      </div>
    );
  }
}

export default App;
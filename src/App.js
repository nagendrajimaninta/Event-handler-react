import "./styles.css";
import React, { Component } from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello hear is event is happen</h1>
      </div>
    );
  }
}
export default function App() {
  function eventHandler() {
    window.alert("Event is happen hear");
  }
  return (
    <div className="App">
      <Name />
      <button onClick={eventHandler}>Event Is Happen</button>
    </div>
  );
}

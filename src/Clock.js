import React from "react";
import "./App.css";

let time = new Date().toLocaleTimeString([], { timeStyle: "short" });

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    });
  }
  render() {
    return <span className="App-clock">{this.state.time}</span>;
  }
}
export default Clock;

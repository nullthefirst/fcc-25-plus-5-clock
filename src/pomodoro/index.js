import React from 'react';
import ControlElement from './ControlElement';
import DisplayPanel from './DisplayPanel';
import Footer from './Footer';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
    };
    this.breakTimeIncrease = this.breakTimeIncrease.bind(this);
    this.breakTimeDecrease = this.breakTimeDecrease.bind(this);
    this.sessionTimeIncrease = this.sessionTimeIncrease.bind(this);
    this.sessionTimeDecrease = this.sessionTimeDecrease.bind(this);
  }

  breakTimeIncrease() {
    let breakTimer = this.state.breakTime;

    this.setState({
      breakTime: breakTimer < 60 ? breakTimer + 1 : breakTimer,
    });
  }

  breakTimeDecrease() {
    let breakTimer = this.state.breakTime;

    this.setState({
      breakTime: breakTimer > 1 ? breakTimer - 1 : breakTimer,
    });
  }

  sessionTimeIncrease() {
    let sessionTimer = this.state.sessionTime;

    this.setState({
      sessionTime: sessionTimer < 60 ? sessionTimer + 1 : sessionTimer,
    });
  }

  sessionTimeDecrease() {
    let sessionTimer = this.state.sessionTime;

    this.setState({
      sessionTime: sessionTimer > 1 ? sessionTimer - 1 : sessionTimer,
    });
  }

  render() {
    return (
      <div id="content">
        <h1 id="title">25 + 5 clock</h1>
        <div id="control_panel">
          <ControlElement
            title="Break"
            time={this.state.breakTime}
            identity="break-label"
            increment="break-increment"
            decrement="break-decrement"
            increaseTime={this.breakTimeIncrease}
            decreaseTime={this.breakTimeDecrease}
          />
          <ControlElement
            title="Session"
            time={this.state.sessionTime}
            identity="session-label"
            increment="session-increment"
            decrement="session-decrement"
            increaseTime={this.sessionTimeIncrease}
            decreaseTime={this.sessionTimeDecrease}
          />
        </div>
        <DisplayPanel title="Title" time="00:00" />
        <Footer />
      </div>
    );
  }
}

export default Pomodoro;

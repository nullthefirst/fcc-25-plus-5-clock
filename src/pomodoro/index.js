import React from 'react';
import moment from 'moment';
import ControlElement from './ControlElement';
import DisplayPanel from './DisplayPanel';
import Footer from './Footer';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      timerRunning: false,
    };
    this.breakTimeIncrease = this.breakTimeIncrease.bind(this);
    this.breakTimeDecrease = this.breakTimeDecrease.bind(this);
    this.sessionTimeIncrease = this.sessionTimeIncrease.bind(this);
    this.sessionTimeDecrease = this.sessionTimeDecrease.bind(this);
    this.timerPlayAndPause = this.timerPlayAndPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
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

  timerPlayAndPause() {
    this.setState({
      timerRunning: !this.state.timerRunning,
    });
  }

  handleReset() {
    this.setState({
      breakTime: 5,
      sessionTime: 25,
    });
  }

  timerDisplay() {
    let minutes = `${this.state.sessionTime}`;

    const timerValue = moment(minutes, 'mm').format('mm:ss');
    return timerValue;
  }

  render() {
    return (
      <div id="content">
        <h1 id="title">Pomodoro Clock</h1>
        <div id="control_panel">
          <ControlElement
            title="Break"
            time={this.state.breakTime}
            identity="break-label"
            increment="break-increment"
            decrement="break-decrement"
            length="break-length"
            increaseTime={this.breakTimeIncrease}
            decreaseTime={this.breakTimeDecrease}
          />
          <ControlElement
            title="Session"
            time={this.state.sessionTime}
            identity="session-label"
            increment="session-increment"
            decrement="session-decrement"
            length="session-length"
            increaseTime={this.sessionTimeIncrease}
            decreaseTime={this.sessionTimeDecrease}
          />
        </div>
        <DisplayPanel
          title="Session"
          time={this.timerDisplay()}
          timerControl={this.timerPlayAndPause}
          reset={this.handleReset}
        />
        <p style={{ marginTop: 50 }}>
          timer running: {`${this.state.timerRunning}`}
        </p>
        <Footer />
      </div>
    );
  }
}

export default Pomodoro;

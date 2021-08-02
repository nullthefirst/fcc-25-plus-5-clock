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
      timerFace: moment(new Date(2000, 1, 0, 0, 25, 0)),
    };
    this.breakTimeIncrease = this.breakTimeIncrease.bind(this);
    this.breakTimeDecrease = this.breakTimeDecrease.bind(this);
    this.sessionTimeIncrease = this.sessionTimeIncrease.bind(this);
    this.sessionTimeDecrease = this.sessionTimeDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.countdownAction = this.countdownAction.bind(this);
    this.beginCountdown = this.beginCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.timerPlayAndPause = this.timerPlayAndPause.bind(this);
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
    let sessionCondition = sessionTimer < 60 ? sessionTimer + 1 : sessionTimer;
    let timeCondition = sessionCondition > 59 ? [0, 1] : [sessionCondition, 0];

    this.setState({
      sessionTime: sessionCondition,
      timerFace: moment(
        new Date(2000, 1, 0, timeCondition[1], timeCondition[0], 0),
      ),
    });
  }

  sessionTimeDecrease() {
    let sessionTimer = this.state.sessionTime;
    let sessionCondition = sessionTimer > 1 ? sessionTimer - 1 : sessionTimer;

    this.setState({
      sessionTime: sessionCondition,
      timerFace: moment(new Date(2000, 1, 0, 0, sessionCondition, 0)),
    });
  }

  handleReset() {
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      timerFace: moment(new Date(2000, 1, 0, 0, 25, 0)),
    });
  }

  countdownAction() {
    // console.log(
    //   'hr: ' +
    //     this.state.timerFace.hour().toString() +
    //     ' | mins: ' +
    //     this.state.timerFace.minutes().toString() +
    //     ' | secs: ' +
    //     this.state.timerFace.seconds().toString(),
    // );

    this.setState({ timerFace: this.state.timerFace.subtract(1, 'seconds') });
  }

  beginCountdown() {
    this.intervalId = setInterval(this.countdownAction, 1000);
    this.setState({ timerRunning: true });
  }

  stopCountdown() {
    clearInterval(this.intervalId);
    this.setState({ timerRunning: false });
  }

  timerPlayAndPause() {
    !this.state.timerRunning ? this.beginCountdown() : this.stopCountdown();
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
          time={
            this.state.timerFace.hour() < 1
              ? this.state.timerFace.format('mm:ss')
              : '60:00'
          }
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

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
      timerFace: moment(new Date(2000, 1, 2, 0, 25, 0)),
      title: 'Session',
    };

    this.breakTimeIncrease = this.breakTimeIncrease.bind(this);
    this.breakTimeDecrease = this.breakTimeDecrease.bind(this);
    this.sessionTimeIncrease = this.sessionTimeIncrease.bind(this);
    this.sessionTimeDecrease = this.sessionTimeDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.countdownAction = this.countdownAction.bind(this);
    this.beginCountdown = this.beginCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.breakAction = this.breakAction.bind(this);
    this.beginBreak = this.beginBreak.bind(this);
    this.stopBreak = this.stopBreak.bind(this);
    this.timerPlayAndPause = this.timerPlayAndPause.bind(this);
  }

  breakTimeIncrease() {
    let breakTimer = this.state.breakTime;

    this.setState({
      breakTime: !this.state.timerRunning
        ? breakTimer < 60
          ? breakTimer + 1
          : breakTimer
        : breakTimer,
    });
  }

  breakTimeDecrease() {
    let breakTimer = this.state.breakTime;

    this.setState({
      breakTime: !this.state.timerRunning
        ? breakTimer > 1
          ? breakTimer - 1
          : breakTimer
        : breakTimer,
    });
  }

  sessionTimeIncrease() {
    let sessionTimer = this.state.sessionTime;
    let sessionCondition = sessionTimer < 60 ? sessionTimer + 1 : sessionTimer;
    let timeCondition = sessionCondition > 59 ? [0, 1] : [sessionCondition, 0];

    this.setState({
      sessionTime: !this.state.timerRunning ? sessionCondition : sessionTimer,
      timerFace: !this.state.timerRunning
        ? moment(new Date(2000, 1, 0, timeCondition[1], timeCondition[0], 0))
        : this.state.timerFace,
    });
  }

  sessionTimeDecrease() {
    let sessionTimer = this.state.sessionTime;
    let sessionCondition = sessionTimer > 1 ? sessionTimer - 1 : sessionTimer;

    this.setState({
      sessionTime: !this.state.timerRunning ? sessionCondition : sessionTimer,
      timerFace: !this.state.timerRunning
        ? moment(new Date(2000, 1, 2, 0, sessionCondition, 0))
        : this.state.timerFace,
    });
  }

  handleReset() {
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      timerFace: moment(new Date(2000, 1, 2, 0, 25, 0)),
      timerRunning: false,
      title: 'Session',
    });

    clearInterval(this.intervalCountdownId);
    clearInterval(this.intervalBreakId);
  }

  countdownAction() {
    this.setState({ timerFace: this.state.timerFace.subtract(1, 'seconds') });

    const timerDisplay = document.querySelector('.timer-display');

    if (timerDisplay.innerHTML === '00:00') {
      this.stopCountdown();
      this.setState({
        title: 'Break',
        timerFace: moment(new Date(2000, 1, 2, 0, this.state.breakTime, 0)),
      });
      this.beginBreak();
    }
  }

  beginCountdown() {
    this.intervalCountdownId = setInterval(this.countdownAction, 1000);
    this.setState({ timerRunning: true });
  }

  stopCountdown() {
    clearInterval(this.intervalCountdownId);
    this.setState({ timerRunning: false });
  }

  breakAction() {
    this.setState({ timerFace: this.state.timerFace.subtract(1, 'seconds') });

    const timerDisplay = document.querySelector('.timer-display');

    if (timerDisplay.innerHTML === '00:00') {
      this.stopBreak();
      this.setState({
        title: 'Session',
        timerFace: moment(new Date(2000, 1, 2, 0, this.state.sessionTime, 0)),
      });
      this.beginCountdown();
    }
  }

  beginBreak() {
    this.intervalBreakId = setInterval(this.breakAction, 1000);
    this.setState({ timerRunning: true });
  }

  stopBreak() {
    clearInterval(this.intervalBreakId);
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
          title={this.state.title}
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

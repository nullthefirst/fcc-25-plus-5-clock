import React from 'react';
import ControlElement from './ControlElement';
import DisplayPanel from './DisplayPanel';
import Footer from './Footer';

class Pomodoro extends React.Component {
  render() {
    return (
      <div id="content">
        <h1 id="title">25 + 5 clock</h1>
        <div id="control_panel">
          <ControlElement
            title="Break"
            time="00"
            identity="break-label"
            increment="break-increment"
            decrement="break-decrement"
          />
          <ControlElement
            title="Session"
            time="00"
            identity="session-label"
            increment="session-increment"
            decrement="session-decrement"
          />
        </div>
        <DisplayPanel title="Title" time="00:00" />
        <Footer />
      </div>
    );
  }
}

export default Pomodoro;

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
          <ControlElement title="Title" time="00" identity="break-label" />
          <ControlElement title="Title" time="00" identity="session-label" />
        </div>
        <DisplayPanel title="Title" time="00:00" />
        <Footer />
      </div>
    );
  }
}

export default Pomodoro;

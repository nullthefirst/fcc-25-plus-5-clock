import React from 'react';

function DisplayPanel(props) {
  return (
    <div id="display_panel">
      <div>
        <span className="display-label" id="timer-label">
          {props.title}
        </span>
        <span className="timer-display" id="time-left">
          {props.time}
        </span>
      </div>
      <div className="timer-controls">
        <span className="ctrl-alt" id="start_stop">
          <i className="bi bi-play"></i>
          <i className="bi bi-pause"></i>
        </span>
        <span className="ctrl" onClick={props.reset} id="reset">
          <i className="bi bi-arrow-repeat"></i>
        </span>
      </div>
    </div>
  );
}

export default DisplayPanel;

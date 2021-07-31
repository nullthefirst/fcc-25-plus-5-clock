import React from 'react';

function DisplayPanel(props) {
  return (
    <div id="display_panel">
      <div>
        <span className="display-label">{props.title}</span>
        <span className="timer-display">{props.time}</span>
      </div>
      <div className="timer-controls">
        <span className="ctrl-alt">
          <i class="bi bi-play"></i>
          <i class="bi bi-pause"></i>
        </span>
        <span className="ctrl">
          <i class="bi bi-arrow-repeat"></i>
        </span>
      </div>
    </div>
  );
}

export default DisplayPanel;

import React from 'react';

import Footer from './Footer';

class Pomodoro extends React.Component {
  render() {
    return (
      <div id="content">
        <h1 id="title">25 + 5 clock</h1>
        <div id="control_panel">
          <div className="control-element">
            <p class="ctrl-label">
              Title
              <br />
              Time (MINs)
            </p>
            <div className="controls">
              <span className="ctrl">
                <i class="bi bi-arrow-bar-up"></i>
              </span>
              <span className="ctrl-display">00</span>
              <span className="ctrl">
                <i class="bi bi-arrow-bar-down"></i>
              </span>
            </div>
          </div>
          <div className="control-element">
            <p class="ctrl-label">
              Title
              <br />
              Time (MINs)
            </p>
            <div className="controls">
              <span className="ctrl">
                <i class="bi bi-arrow-bar-up"></i>
              </span>
              <span className="ctrl-display">00</span>
              <span className="ctrl">
                <i class="bi bi-arrow-bar-down"></i>
              </span>
            </div>
          </div>
        </div>
        <div id="display_panel">
          <div>
            <span className="display-label">Title</span>
            <span className="timer-display">00:00</span>
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
        <Footer />
      </div>
    );
  }
}

export default Pomodoro;

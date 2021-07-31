import React from 'react';

function ControlElement(props) {
  return (
    <div className="control-element">
      <p class="ctrl-label" id={props.identity}>
        {props.title}
        <br />
        (MINs)
      </p>
      <div className="controls">
        <span className="ctrl">
          <i class="bi bi-arrow-bar-up"></i>
        </span>
        <span className="ctrl-display">{props.time}</span>
        <span className="ctrl">
          <i class="bi bi-arrow-bar-down"></i>
        </span>
      </div>
    </div>
  );
}

export default ControlElement;

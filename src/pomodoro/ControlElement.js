import React from 'react';

function ControlElement(props) {
  return (
    <div className="control-element">
      <p className="ctrl-label" id={props.identity}>
        {props.title}
        <br />
        (MINs)
      </p>
      <div className="controls">
        <span
          className="ctrl"
          id={props.increment}
          onClick={props.increaseTime}>
          <i className="bi bi-arrow-bar-up"></i>
        </span>
        <span className="ctrl-display" id={props.length}>
          {props.time}
        </span>
        <span
          className="ctrl"
          id={props.decrement}
          onClick={props.decreaseTime}>
          <i className="bi bi-arrow-bar-down"></i>
        </span>
      </div>
    </div>
  );
}

export default ControlElement;

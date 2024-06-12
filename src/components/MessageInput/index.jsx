import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function MessageInput(props) {
  const {} = props;

  return (
    <div className="flex">
      <input className="message-input" placeholder="Type a Message..." />
      <button>send</button>
    </div>
  );
}

MessageInput.propTypes = {};

export default MessageInput;

import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./style.css";
function ChatViewHeader(props) {
  const { imgURL, title } = props;

  return (
    <div className="flex">
      <Avatar imgURL={imgURL} title={title} />
      <div className="chat-view-title">{title}</div>
    </div>
  );
}

ChatViewHeader.propTypes = {};

export default ChatViewHeader;

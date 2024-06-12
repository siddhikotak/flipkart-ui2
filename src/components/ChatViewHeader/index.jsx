import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./style.css";
import { classUtils } from "../../utils";
function ChatViewHeader(props) {
  const { imageURL, title } = props;

  return (
    <div
      className={classUtils({
        "chat-view-header": true,
      })}
    >
      <Avatar imageURL={imageURL} title={title} />
      <div className="chat-view-title">{title}</div>
    </div>
  );
}

ChatViewHeader.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChatViewHeader;

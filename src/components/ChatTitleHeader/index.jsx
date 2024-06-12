import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function ChatTitleHeader(props) {
  const { title, orderId, date, messageList } = props;

  return (
    <div className="chat-header">
      <div className="chat-title">
        <div>{title}</div>
        <div>Order {orderId}</div>
      </div>
      <div className="chat-date">{date}</div>
    </div>
  );
}

ChatTitleHeader.propTypes = {
  // title: PropTypes.string.isRequired(),
  // orderId: PropTypes.string.isRequired(),
  // date: PropTypes.string.isRequired(),
};

export default ChatTitleHeader;

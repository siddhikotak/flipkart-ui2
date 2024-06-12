/* eslint-disable react/prop-types */
import { classUtils, getTime } from "../../utils";
import "./style.css";

const OptionedMessage = ({ message }) => {
  return (
    <div
      className={classUtils({
        "text-message-container": true,
      })}
    >
      {message.message}
      {message.options.map((option) => (
        <button key={option}>{option?.optionText}</button>
      ))}
      <div className="message-time">{getTime(message.timestamp)}</div>
    </div>
  );
};

const TextMessage = ({ message }) => {
  return (
    <div
      className={classUtils({
        "text-message-container": true,
        isSenderUser: message.sender === "USER",
      })}
    >
      {message.message}
      <div className="message-time">{getTime(message.timestamp)}</div>
    </div>
  );
};

function MessageContainer(props) {
  const { messageList } = props;

  const getMessageFromType = (message) => {
    switch (message.messageType) {
      case "optionedMessage":
        return <OptionedMessage message={message} />;
      case "text":
        return <TextMessage message={message} />;
      default:
        return "";
    }
  };

  return (
    <div className="message-container">
      {messageList.length === 0 ? (
        <div className="message-text">Send a message to start chatting.</div>
      ) : (
        messageList?.map((message) => getMessageFromType(message))
      )}
    </div>
  );
}

MessageContainer.propTypes = {};

export default MessageContainer;

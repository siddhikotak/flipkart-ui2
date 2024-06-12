/* eslint-disable react/prop-types */
import Avatar from "../Avatar";
import ChatTitleHeader from "../ChatTitleHeader";
import "./style.css";
import { convertDate } from "../../utils";
function ChatList(props) {
  const { chat, setActiveChat } = props;

  return (
    <div
      tabIndex={0}
      aria-label={chat.title}
      className="chat-list-container"
      onClick={() => setActiveChat(chat)}
    >
      <Avatar imageURL={chat.imageURL} title={chat.title} />
      <ChatTitleHeader
        title={chat.title}
        orderId={chat.orderId}
        date={convertDate(chat.latestMessageTimestamp)}
      />
    </div>
  );
}

export default ChatList;

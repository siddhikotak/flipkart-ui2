/* eslint-disable react/prop-types */
import Avatar from "../Avatar";
import ChatTitleHeader from "../ChatTitleHeader";
import "./style.css";
import { classUtils, convertDate } from "../../utils";
function ChatList(props) {
  const { chat, setActiveChat, activeChatId } = props;
  return (
    <div
      tabIndex={0}
      aria-label={chat.title}
      className={classUtils({
        "chat-list-container": true,
        isChatActive: activeChatId === chat.orderId,
      })}
      onClick={() => setActiveChat(chat)}
    >
      <Avatar imageURL={chat.imageURL} title={chat.title} />
      <ChatTitleHeader
        title={chat.title}
        orderId={chat.orderId}
        date={convertDate(chat.latestMessageTimestamp)}
        messageList={chat.messageList}
      />
    </div>
  );
}

export default ChatList;

/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

import MessageInput from "../MessageInput";
import ChatViewHeader from "../ChatViewHeader";
import MessageContainer from "../MessageContainer";

export default function ChatView({ activeChatData }) {
  return (
    <div className="chat-view-container">
      <ChatViewHeader
        imageURL={activeChatData?.imageURL}
        title={activeChatData?.title}
      />
      <MessageContainer messageList={activeChatData?.messageList} />
      <MessageInput />
    </div>
  );
}

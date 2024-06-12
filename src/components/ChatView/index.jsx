/* eslint-disable react/prop-types */
import React from "react";
import ChatViewHeader from "../ChatViewHeader";

export default function ChatView({ activeChat }) {
  return (
    <div>
      <ChatViewHeader imgUrl={activeChat.imageURL} />
    </div>
  );
}

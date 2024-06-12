import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import ChatList from "../../components/ChatList";
import ChatView from "../../components/ChatView";

function ChatPage() {
  const [data] = useFetch("chat/chats");

  const [chatData, setChatData] = useState();
  const [activeChat, setActiveChat] = useState();

  useEffect(() => {
    setChatData(data);
  }, []);

  console.log(chatData);

  return (
    <>
      {chatData?.map((chat) => {
        return (
          <>
            <ChatList chat={chat} setActiveChat={setActiveChat} />
          </>
        );
      })}
      {/* <ChatView activeChat={activeChat} /> */}
    </>
  );
}

ChatPage.propTypes = {};

export default ChatPage;

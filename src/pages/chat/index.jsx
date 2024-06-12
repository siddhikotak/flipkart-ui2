import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import ChatList from "../../components/ChatList";
import ChatView from "../../components/ChatView";
import useSearchParams from "../../hooks/useSearchParams";
import FilterInput from "../../components/FilterInput";
import { debounceFn } from "../../utils";
function ChatPage() {
  const [data] = useFetch("chat/chats");
  const [queryFilter, updateQueryFilter] = useSearchParams({});

  const [chatData, setChatData] = useState();
  const [activeChatData, setActiveChatData] = useState();

  useEffect(() => {
    setChatData(data);
  }, [data]);

  const onInputChange = (e) => {
    updateQueryFilter("filterQuery", e.target.value);
  };

  const filterChatList = (chatData, value) => {
    value = value?.toLowerCase();
    return (
      chatData.title.toLowerCase().includes(value) ||
      chatData.orderId.toLowerCase().includes(value)
    );
  };

  const filterChat = () => {
    console.log(Date.now);
    const chatList = chatData?.filter((option) =>
      filterChatList(option, queryFilter?.filterQuery)
    );
    setChatData(chatList);
  };

  const debouncedFilter = debounceFn(filterChat, 500);

  useEffect(() => {
    if (queryFilter?.filterQuery) {
      debouncedFilter();
    } else {
      setChatData(data);
    }
  }, [queryFilter?.filterQuery]);

  const setActiveChat = (chat) => {
    setActiveChatData(chat);
    updateQueryFilter("orderId", chat.orderId);
  };

  return (
    <>
      <div className="flex">
        <div style={{ width: "100%" }}>
          <FilterInput
            value={queryFilter?.filterQuery ?? ""}
            onInputChange={onInputChange}
            placeholder="Start typing to search"
          />
          {chatData?.map((chat) => {
            return (
              <>
                <ChatList
                  chat={chat}
                  setActiveChat={(chat) => setActiveChat(chat)}
                  activeChatId={queryFilter?.orderId}
                />
              </>
            );
          })}
        </div>
        {activeChatData && <ChatView activeChatData={activeChatData} />}
      </div>
    </>
  );
}

ChatPage.propTypes = {};

export default ChatPage;

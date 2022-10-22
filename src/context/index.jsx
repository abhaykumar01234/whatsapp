import { createContext, useState } from "react";
import { chats } from "../config";
export const GlobalContext = createContext();

const allChats = chats.map((chat) => ({
  ...chat,
  messages: [
    { id: 1, msg: `Hi ABC`, time: "12:15", inMsg: true },
    { id: 2, msg: `Hello ${chat.name}`, time: "12:16", inMsg: false },
  ],
}));

export const GlobalProvider = ({ children }) => {
  const [chats, setChats] = useState(allChats);
  const [activeChat, setActiveChat] = useState(allChats[0]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (text) => {
    setSearchInput(text);
    // console.log("seaching for text " + text + " in chatlist names");
    setChats(
      allChats.filter(({ name }) =>
        name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const handleChatSubmit = (msg) => {
    const _d = new Date();
    const hours = String(_d.getHours()).padStart(2, "0");
    const minutes = String(_d.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;

    const newMsg = {
      id:
        activeChat.messages.length === 0
          ? 1
          : activeChat.messages.slice(-1)[0].id + 1,
      msg,
      time,
      inMsg: true,
    };

    setActiveChat((ac) => ({ ...ac, messages: [...ac.messages, newMsg] }));
    setChats((ch) =>
      ch.map((chatObj) =>
        chatObj.id === activeChat.id
          ? { ...chatObj, messages: [...chatObj.messages, newMsg] }
          : chatObj
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        chats,
        activeChat,
        setActiveChat,
        searchInput,
        handleSearchInput,
        handleChatSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

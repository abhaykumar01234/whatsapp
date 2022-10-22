import { useContext } from "react";
import { Block } from "./Block";
import s from "./block.module.scss";
import { GlobalContext } from "../../context";

export const ChatList = () => {
  const { chats, activeChat, setActiveChat } = useContext(GlobalContext);

  return (
    <div className={s.chatlist}>
      {chats.map((chat) => (
        <Block
          key={chat.id}
          chat={chat}
          isActive={chat.id === activeChat.id}
          onClick={() => setActiveChat(chat)}
        />
      ))}
    </div>
  );
};

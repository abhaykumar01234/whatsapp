import { useState } from "react";
import { Block } from "./Block";
import { chats } from "../../config";
import s from "./block.module.scss";

export const ChatList = () => {
  const [activeBlock, setActiveBlock] = useState(chats[0].id);

  return (
    <div className={s.chatlist}>
      {chats.map((chat) => (
        <Block
          key={chat.id}
          chat={chat}
          isActive={chat.id === activeBlock}
          setActiveBlock={setActiveBlock}
        />
      ))}
    </div>
  );
};

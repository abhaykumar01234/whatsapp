import React, { useContext } from "react";
import cx from "classnames";
import s from "./chatBox.module.scss";
import { GlobalContext } from "../../context";

export const ChatBox = () => {
  const { activeChat } = useContext(GlobalContext);

  return (
    <div className={s.chatBox}>
      {activeChat.messages.map(({ id, msg, time, inMsg }) => (
        <div key={id} className={cx(s.message, { [s.my_message]: inMsg })}>
          <p>
            {msg}
            <time>{time}</time>
          </p>
        </div>
      ))}
    </div>
  );
};

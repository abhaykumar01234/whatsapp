import React from "react";
import cx from "classnames";
import s from "./chatBox.module.scss";
import { messages } from "../../config";

export const ChatBox = () => {
  return (
    <div className={s.chatBox}>
      {messages.map(({ id, msg, time, inMsg }) => (
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

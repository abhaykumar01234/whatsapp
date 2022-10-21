import cx from "classnames";
import { useGlobal } from "../../context";
import s from "./chatbox.module.scss";

export const ChatBox = () => {
  const { messages } = useGlobal();
  return (
    <div className={s.chatbox}>
      {messages.map(({ id, msg, time, inMsg }) => (
        <div key={id} className={cx(s.message, { [s.in_message]: inMsg })}>
          <p>
            {msg}
            <time>{time}</time>
          </p>
        </div>
      ))}
    </div>
  );
};

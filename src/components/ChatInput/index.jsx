import cx from "classnames";
import s from "./chatinput.module.scss";

export const ChatInput = () => {
  return (
    <div className={cx(s.chat_input, "between")}>
      <ion-icon name="happy-outline" />
      <ion-icon name="attach-outline" />
      <input type="text" placeholder="Type a message" />
      <ion-icon name="mic" />
    </div>
  );
};

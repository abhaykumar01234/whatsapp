import { useGlobal } from "../../context";
import cx from "classnames";
import s from "./block.module.scss";

export const ChatList = () => {
  const { chats, activeChat, setActiveChat } = useGlobal();

  return (
    <div className={s.chatlist}>
      {chats.map((chat) => {
        const { id, name, imgUrl, dateTime, lastMsg, unreadMsgCount } = chat;
        return (
          <div
            key={id}
            className={cx(s.block, {
              [s.active]: id === activeChat.id,
              [s.unread]: unreadMsgCount > 0,
            })}
            onClick={() => setActiveChat(chat)}
          >
            <img src={imgUrl} alt={name} className={s.userImg} />
            <div className={s.details}>
              <div className={cx(s.listHead, "between")}>
                <h4>{name}</h4>
                <time className={s.time}>{dateTime}</time>
              </div>
              <div className={cx(s.message_p, "between")}>
                <p>{lastMsg}</p>
                {unreadMsgCount > 0 && (
                  <b className="center">{unreadMsgCount}</b>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

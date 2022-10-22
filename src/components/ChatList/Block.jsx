import cx from "classnames";
import s from "./block.module.scss";

export const Block = ({
  chat: { name, imgUrl, dateTime, lastMsg, unreadMsgCount },
  isActive,
  onClick,
}) => {
  return (
    <div
      className={cx(s.block, {
        [s.active]: isActive,
        [s.unread]: unreadMsgCount > 0,
      })}
      onClick={onClick}
    >
      <img src={imgUrl} alt={name} className={s.userImg} />
      <div className={s.details}>
        <div className={cx(s.listHead, "between")}>
          <h4>{name}</h4>
          <time className={s.time}>{dateTime}</time>
        </div>
        <div className={cx(s.message_p, "between")}>
          <p>{lastMsg}</p>
          {unreadMsgCount > 0 && <b className="center">{unreadMsgCount}</b>}
        </div>
      </div>
    </div>
  );
};

import cx from "classnames";
import s from "./lheader.module.scss";

export const LeftHeader = () => {
  return (
    <div className={cx(s.header, "between")}>
      <img src="/images/user.jpg" alt="user" className={s.userimg} />
      <ul className={s.nav_icons}>
        <li>
          <ion-icon name="scan-circle-outline" />
        </li>
        <li>
          <ion-icon name="chatbox" />
        </li>
        <li>
          <ion-icon name="ellipsis-vertical" />
        </li>
      </ul>
    </div>
  );
};

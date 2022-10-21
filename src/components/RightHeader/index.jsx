import React from "react";
import cx from "classnames";
import r from "./rheader.module.scss";
import l from "../LeftHeader/lheader.module.scss";

export const RightHeader = () => {
  return (
    <div className={cx(l.header, "between")}>
      <div className="center">
        <img src="/images/img1.jpg" alt="user" className={l.userimg} />
        <h4 className={r.imgText}>
          Abhay Kumar <br />
          <span>online</span>
        </h4>
      </div>
      <ul className={l.nav_icons}>
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

import cx from "classnames";
import s from "./lheader.module.scss";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";

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
          <Root>
            <Trigger asChild>
              <ion-icon name="ellipsis-vertical" />
            </Trigger>

            <Portal>
              <Content align="end" sideOffset={8} className={s.dropdown}>
                <Item>New Group</Item>
                <Item>Starred Messages</Item>
                <Item>Settings</Item>
                <Item>Logout</Item>
              </Content>
            </Portal>
          </Root>
        </li>
      </ul>
    </div>
  );
};

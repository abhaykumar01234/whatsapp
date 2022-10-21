import cx from "classnames";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";
import s from "./rheader.module.scss";
import l from "../LeftHeader/lheader.module.scss";
import { useGlobal } from "../../context";

export const RightHeader = () => {
  const { activeChat } = useGlobal();
  return (
    <div className={cx(l.header, "between")}>
      <div className="center">
        <img
          src={activeChat.imgUrl}
          alt={activeChat.name}
          className={l.userimg}
        />
        <h4 className={s.imgText}>
          {activeChat.name} <br />
          <span>online</span>
        </h4>
      </div>
      <ul className={l.nav_icons}>
        <li>
          <ion-icon name="search" />
        </li>
        <li>
          <Root>
            <Trigger asChild>
              <ion-icon name="ellipsis-vertical" />
            </Trigger>

            <Portal>
              <Content align="end" sideOffset={8} className={l.dropdown}>
                <Item>Contact Info</Item>
                <Item>Select Messages</Item>
                <Item>Close Chat</Item>
                <Item>Mute Notifications</Item>
                <Item>Disappearing Messages</Item>
                <Item>Clear Messages</Item>
                <Item>Delete Chat</Item>
              </Content>
            </Portal>
          </Root>
        </li>
      </ul>
    </div>
  );
};

import cx from "classnames";
import s from "./search.module.scss";
export const Search = () => {
  return (
    <div class={cx(s.search_chat, "center")}>
      <input type="text" placeholder="Search or start new chat" />
      <ion-icon name="search-outline" />
    </div>
  );
};

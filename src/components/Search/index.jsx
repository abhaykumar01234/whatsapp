import cx from "classnames";
import s from "./search.module.scss";
import { useGlobal } from "../../context";

export const Search = () => {
  const { searchText, setSearchText } = useGlobal();

  return (
    <div className={cx(s.search_chat, "center")}>
      <input
        type="text"
        placeholder="Search or start new chat"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ion-icon name="search-outline" />
    </div>
  );
};

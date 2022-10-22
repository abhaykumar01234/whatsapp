import { useContext } from "react";
import cx from "classnames";
import s from "./search.module.scss";
import { GlobalContext } from "../../context";

export const Search = () => {
  const { searchInput, handleSearchInput } = useContext(GlobalContext);
  return (
    <div className={cx(s.search_chat, "center")}>
      <input
        type="text"
        placeholder="Search or start new chat"
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <ion-icon name="search-outline" />
    </div>
  );
};

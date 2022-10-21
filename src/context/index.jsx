import { createContext, useContext, useReducer } from "react";
import { chats, messages } from "../config";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

const initialState = {
  contacts: [],
  chats,
  activeChat: chats[0] || {},
  messages,
  searchText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CHAT": {
      return { ...state, activeChat: action.payload };
    }
    case "SET_SEARCH_TEXT": {
      return {
        ...state,
        searchText: action.payload,
        chats: chats.filter(
          ({ name }) =>
            action.payload === "" ||
            String(name)
              .toLowerCase()
              .includes(String(action.payload).toLowerCase())
        ),
      };
    }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveChat = (chat) =>
    dispatch({ type: "SET_ACTIVE_CHAT", payload: chat });

  const setSearchText = (text) =>
    dispatch({ type: "SET_SEARCH_TEXT", payload: text });

  return (
    <GlobalContext.Provider value={{ ...state, setActiveChat, setSearchText }}>
      {children}
    </GlobalContext.Provider>
  );
};

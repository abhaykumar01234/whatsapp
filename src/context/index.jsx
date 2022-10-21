import { createContext, useContext, useReducer } from "react";
import { chats, messages } from "../config";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

const initialState = {
  contacts: [],
  chats,
  activeChat: chats[0] || {},
  messages,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CHAT": {
      return { ...state, activeChat: action.payload };
    }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveChat = (chat) =>
    dispatch({ type: "SET_ACTIVE_CHAT", payload: chat });

  return (
    <GlobalContext.Provider value={{ ...state, setActiveChat }}>
      {children}
    </GlobalContext.Provider>
  );
};

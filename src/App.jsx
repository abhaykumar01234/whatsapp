import React from "react";
import { ChatBox } from "./components/ChatBox";
import { ChatInput } from "./components/ChatInput";
import { ChatList } from "./components/ChatList";
import { LeftHeader } from "./components/LeftHeader";
import { RightHeader } from "./components/RightHeader";
import { Search } from "./components/Search";
import { GlobalProvider } from "./context";

const App = () => {
  return (
    <GlobalProvider>
      <div className="app center">
        <div className="container">
          <section className="leftSide">
            <LeftHeader />
            <Search />
            <ChatList />
          </section>
          <section className="rightSide">
            <RightHeader />
            <ChatBox />
            <ChatInput />
          </section>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;

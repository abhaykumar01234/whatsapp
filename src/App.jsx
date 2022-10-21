import React from "react";
import { ChatBox } from "./components/ChatBox";
import { ChatList } from "./components/ChatList";
import { LeftHeader } from "./components/LeftHeader";
import { RightHeader } from "./components/RightHeader";
import { Search } from "./components/Search";

const App = () => {
  return (
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
        </section>
      </div>
    </div>
  );
};

export default App;

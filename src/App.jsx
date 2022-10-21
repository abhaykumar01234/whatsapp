import React from "react";
import { ChatList } from "./components/ChatList";
import { LeftHeader } from "./components/LeftHeader";
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
        <section className="rightSide">Right</section>
      </div>
    </div>
  );
};

export default App;

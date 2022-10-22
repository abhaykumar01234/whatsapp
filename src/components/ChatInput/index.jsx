import { useState, useContext } from "react";
import s from "./chatinput.module.scss";
import React from "react";
import { GlobalContext } from "../../context";

export const ChatInput = () => {
  const { handleChatSubmit } = useContext(GlobalContext);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChatSubmit(msg);
    setMsg("");
  };
  return (
    <div className={s.chat_input}>
      <ion-icon name="happy-outline" />
      <ion-icon name="attach-outline" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </form>
      <ion-icon name="mic" />
    </div>
  );
};

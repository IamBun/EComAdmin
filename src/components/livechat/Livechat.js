import { useEffect } from "react";
import { useState } from "react";
import classes from "./livechat.module.css";
import openSocket from "socket.io-client";
import { useSelector } from "react-redux";

const socket = openSocket("wss://shy-roan-roll.glitch.me", {
  transports: ["websocket"],
});
const Livechat = () => {
  const userId = useSelector((state) => state.currentUser.userId);

  //use Use Debounce to improve
  const [message, setMessage] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const DUMMY_USER = ["Alex", "John", "Sahra"];

  socket.on("support-receive", (clientMess) => {
    setMessage([...message, clientMess]);
  });

  // useEffect(() => {
  //   setMessage(DUMMY);
  // }, []);

  // window.addEventListener("keypress", (event) => {
  //   if (event.key === "Enter" && userMessage?.trim() !== "") {
  //     sendMessageHandler();
  //   }
  // });

  const sendMessageHandler = (e) => {
    // e.preventDefault();
    console.log(userMessage);
    socket.emit("support-reply", { sender: userId, content: userMessage });
    setMessage([...message, { sender: userId, content: userMessage }]);
    setUserMessage("");
  };
  return (
    <div className={classes.livechatWrapper}>
      <div className={classes.left}>
        <input placeholder="Search contact"></input>
        <div className={classes.contact}>
          {/* icons */}
          {DUMMY_USER &&
            DUMMY_USER.map((ele, index) => {
              return <h3 key={index}>{ele}</h3>;
            })}
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.chatRender}>
          {message.length > 0 &&
            message.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={
                    ele.sender === userId
                      ? classes.chatMessageRight
                      : classes.chatMessageLeft
                  }
                >
                  <span
                    className={
                      ele.sender === userId ? classes.support : classes.client
                    }
                  >
                    {ele.sender === userId
                      ? ele.content
                      : ele.name + " : " + ele.content}
                  </span>
                </div>
              );
            })}
        </div>
        <div className={classes.chatType}>
          <input
            placeholder="Typing here..."
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
            value={userMessage}
          ></input>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Livechat;

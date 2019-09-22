import React, { useState, useEffect } from "react";
import smallLogo from "../logo-sm.svg";
import "../styles/chatbar.css";

export default function Chatbar() {
  const [messages, setMessages] = useState([]);
  const [fetchData, setFetchData] = useState(
    '{"queryInput":{"text":{"text":"Hello!","languageCode":"en"}},"queryParams":{"timeZone":"America/Toronto"}}'
  );

  const handleMessage = e => {
    e.preventDefault();
    let message = {
      firstName: "Laura",
      userId: 2,
      content: e.target.children[0].value,
      createdAt: new Date()
    };
    let newMessageList = [...messages, message];
    setMessages(newMessageList);
    let data = `{"queryInput":{"text":{"text":"${message.content}","languageCode":"en"}},"queryParams":{"timeZone":"America/Toronto"}}`;
    console.log(data);
    setFetchData(data);
    console.log(fetchData);
    e.target.children[0].value = "";
  };

  useEffect(() => {
    fetch(
      "https://dialogflow.googleapis.com/v2/projects/telenyx-bganmh/agent/sessions/b5a0be4b-2502-a7ae-693a-2a68585f7593:detectIntent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.AUTH_KEY
        },
        body: fetchData
      }
    )
      .then(function(response) {
        return response.json(); // pass the data as promise to next then block
      })
      .then(function(data) {
        console.log(data);
        let message = {
          firstName: "Roger",
          userId: 1,
          content: data.queryResult && data.queryResult.fulfillmentText,
          createdAt: new Date()
        };
        let newMessageList = [...messages, message];
        setMessages(newMessageList);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }, [fetchData]);
  //
  return (
    <main>
      <div className="chat-box">
        <header>
          <div className="menu-left">
            <img src={smallLogo} alt="logo" className="chat-logo" />
            <p>Roger</p>
          </div>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </header>
        <ul className="message-list">
          {messages.map((msg, i) => (
            <div key={i}>
              {msg.userId === 2 ? (
                <li key={i} className="user-chat">
                  <div>
                    <span className="name">{msg.firstName}</span>
                    <span className="time">
                      {msg.createdAt.getHours() +
                        ":" +
                        msg.createdAt.getMinutes()}
                    </span>
                    <p>{msg.content}</p>
                  </div>
                </li>
              ) : (
                <li key={i} className="bot-chat">
                  <span className="bot-logo">
                    <i className="fas fa-robot"></i>
                  </span>
                  <div>
                    <span className="name">Roger</span>
                    <span className="time">
                      {msg.createdAt.getHours() +
                        ":" +
                        msg.createdAt.getMinutes()}
                    </span>
                    <p>{msg.content}</p>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <section className="chat-input">
          <form onSubmit={handleMessage}>
            <input type="text" placeholder="Enter a message" />
            <button>Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}
